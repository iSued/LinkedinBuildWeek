import React from "react";
import { Image, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import { FaLinkedin } from "react-icons/fa";
import InfoIcon from "@material-ui/icons/Info";

class AdSense extends React.Component {
  render() {
    return (
      <Card className=" mt-2 p-2">
        <Link>
          <Image
            style={{ width: "1100%" }}
            src="https://i.ibb.co/SKPFPHW/li-evergreen-jobs-ad-300x250-v1.jpg"
            thumbnail
            className="img"
          />
        </Link>
      </Card>
    );
  }
}
export default AdSense;
