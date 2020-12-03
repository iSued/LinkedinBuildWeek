import React from "react";
import { Image } from "react-bootstrap";

class Advertise extends React.Component {
  render() {
    return (
      <div className=" mb-2">
        <Image
          src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
          thumbnail
          className="img"
        />
      </div>
    );
  }
}
export default Advertise;
