import React from "react";
import { Alert, Media, Row, Col, Card, Spinner } from "react-bootstrap";

class Feed extends React.Component {
  state = {
    posts: [],
    like: false,
    loading: true,
    userName: process.env.REACT_APP_USER,
  };

  fetchPosts = async () => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: process.env.REACT_APP_TOKEN,
          },
        }
      );
      let posts = await response.json();
      console.log(posts);
      posts = posts.reverse();
      posts = posts.filter((post) => post.username !== "StefanoMilosh");
      console.log(posts);
      if (response.ok) {
        this.setState({ posts, loading: false });
      } else {
        <Alert variant="danger">Something went wrong!</Alert>;
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchPosts();
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner
            animation="border"
            variant="primary"
            style={{ marginLeft: "45%" }}
          />
        ) : (
          <Row>
            {this.state.posts.map((post, index) => (
              <Col md={{ span: 6, offset: 4 }} className="my-1" key={index}>
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
                          style={{ borderRadius: "50%", objectFit: "cover" }}
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
                          <h6 style={{ color: "#b0b0b0", fontSize: "15px" }}>
                            {post.user.title}
                          </h6>
                          <h6 style={{ color: "#b0b0b0", fontSize: "15px" }}>
                            {post.createdAt}
                            <i
                              className="fas fa-globe-americas ml-1"
                              style={{ color: "#6c6c6c" }}
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
                      ></i>
                    </Col>
                  </Row>
                  <p
                    className="border-bottom pt-3 pb-4 px-1"
                    style={{ borderColor: "#e7e6e5" }}
                  >
                    {post.text}
                    <br />
                    <i
                      className="far fa-thumbs-up mt-2 p-2"
                      style={{
                        color: "#0a66c2",
                        background: "#aacdf0",
                        borderRadius: "50%",
                        display: this.state.like ? "inline" : "none",
                      }}
                    ></i>
                  </p>

                  <div className="d-flex  posts " style={{ color: "#6c6c6c" }}>
                    <span
                      className="px-3"
                      onClick={() => this.setState({ like: !this.state.like })}
                    >
                      <i className="far fa-thumbs-up"></i> Like
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
      </>
    );
  }
}

export default Feed;
