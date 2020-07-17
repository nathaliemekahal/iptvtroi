import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="Heading-class">
        {this.props.svgFile}
        <h4 className="title-class">{this.props.title}</h4>
      </div>
    );
  }
}

export default Banner;
