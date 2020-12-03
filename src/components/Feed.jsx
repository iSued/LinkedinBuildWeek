import React from "react"
import {Alert, Media, Row, Col, Card, Spinner} from "react-bootstrap"
import ModalEditPost from "./ModalEditPost"

class Feed extends React.Component {
  state = {
    posts: [],
    // like: localStorage.getItem("likes").split(","),
    like:
      localStorage.getItem("likes") && localStorage.getItem("likes").length > 0
        ? localStorage.getItem("likes").split(",")
        : // localStorage.getItem("likes")
          " ",

    loading: true,
    userName: process.env.REACT_APP_USER,
    show: false,
    post: {},
  }

  handleLikes = (id) => {
    let likes = []
    if (this.state.like.includes(id)) {
      likes = this.state.like.filter((el) => el !== id)
      this.setState({
        like: likes,
      })
    } else {
      likes = [...this.state.like, id]
      this.setState({like: likes})
    }

    localStorage.setItem("likes", likes)
  }

  fetchPosts = async () => {
    this.setState({loading: true})
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      )
      let posts = await response.json()
      // console.log(posts);
      posts = posts.reverse()
      posts = posts.filter((post) => post.username !== "StefanoMilosh")
      console.log("posts", posts)
      if (response.ok) {
        this.setState({posts, loading: false})
      } else {
        ;<Alert variant="danger">Something went wrong!</Alert>
        this.setState({loading: false})
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate = (previousProps) => {
    if (previousProps.feedCounter !== this.props.feedCounter) {
      this.fetchPosts()
    }
  }
  componentDidMount = () => {
    this.fetchPosts()
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner
            animation="border"
            variant="primary"
            style={{marginLeft: "45%"}}
          />
        ) : (
          <Row>
            {this.state.posts.map((post, index) => (
              <Col md={12} className="my-1" key={index}>
                <Card className="p-4 postProfile">
                  <Row>
                    <Col xs={11}>
                      <Media className="p-1">
                        <img
                          width={64}
                          height={64}
                          className="mr-3"
                          src={post.user.image}
                          alt="user"
                          style={{borderRadius: "50%", objectFit: "cover"}}
                          onClick={() =>
                            this.props.history.push("/profile/" + post.user._id)
                          }
                        />
                        <Media.Body>
                          <h5
                            onClick={() =>
                              this.props.history.push(
                                "/profile/" + post.user._id
                              )
                            }
                          >
                            {post.user.name} {post.user.surname}
                          </h5>
                          <h6 style={{color: "#b0b0b0", fontSize: "15px"}}>
                            {post.user.title}
                          </h6>
                          <h6 style={{color: "#b0b0b0", fontSize: "15px"}}>
                            {post.createdAt}
                            <i
                              className="fas fa-globe-americas ml-1"
                              style={{color: "#6c6c6c"}}
                            ></i>
                          </h6>
                        </Media.Body>
                      </Media>
                    </Col>
                    <Col xs={1}>
                      <i
                        className="fas fa-ellipsis-h p-1"
                        style={{
                          color: "#404040",
                          display:
                            post.user.username === this.state.userName
                              ? "inline"
                              : "none",
                        }}
                        onClick={() => this.setState({post: post, show: true})}
                      ></i>
                    </Col>
                  </Row>
                  <div className="border-bottom pb-4">
                    <p className="pt-3 pb-4 px-1">
                      {post.text}
                      <br />
                    </p>
                    {post.image && (
                      <img
                        src={post.image}
                        className="img-fluid "
                        style={{
                          objectFit: "cover",
                          maxHeight: "300px",
                          width: "100%",
                          borderColor: "#e7e6e5",
                        }}
                      />
                    )}
                    <br />
                    <i
                      className="far fa-thumbs-up mt-2 p-2"
                      style={{
                        color: "#0a66c2",
                        background: "#aacdf0",
                        borderRadius: "50%",
                        display: this.state.like.includes(post._id)
                          ? "inline-block"
                          : "none",
                      }}
                    ></i>
                  </div>

                  <div
                    className="d-flex  mt-3 posts "
                    style={{color: "#6c6c6c"}}
                  >
                    <span
                      className="px-3"
                      onClick={() => this.handleLikes(post._id)}
                    >
                      <i className="far fa-thumbs-up"></i>{" "}
                      {this.state.like.includes(post._id) ? "Unlike" : "Like"}
                    </span>
                    <span className="px-3">
                      <i className="far fa-comment-dots"></i> Comment
                    </span>
                    <span className="px-3">
                      <i className="fas fa-share-square"></i> Share
                    </span>
                    <span className="px-3">
                      <i className="fas fa-paper-plane"></i> Send
                    </span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
        <ModalEditPost
          post={this.state.post}
          show={this.state.show}
          onHide={() => this.setState({show: false})}
          feedCounter={this.props.changeCounter}
        />
      </>
    )
  }
}

export default Feed
