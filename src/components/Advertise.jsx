import React from "react";
import { Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Advertise extends React.Component {
  render() {
    return (
      <div className=" mb-2">
        <Link>
          <Image
            src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            thumbnail
            className="img"
          />
        </Link>
      </div>
    );
  }
}
export default withRouter(Advertise);
