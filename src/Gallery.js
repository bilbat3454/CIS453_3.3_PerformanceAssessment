import React, { Component } from "react";
import CafeImage from "./cafe-7454951_1920.jpg";
 
class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <img src={CafeImage} alt="cafe" style={{ width: '400px', }}/>
      </div>
    );
  }
}
 
export default Gallery;