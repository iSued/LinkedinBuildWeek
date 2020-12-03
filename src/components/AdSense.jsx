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
            src="https://static-exp3.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            thumbnail
            className="img"
          />
        </Link>
      </Card>
    );
  }
}
export default AdSense;
