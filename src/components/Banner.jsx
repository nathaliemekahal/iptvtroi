import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <>
        {this.props.title === "Highlights" && (
          <div className="Heading-class" style={{ paddingTop: "3rem" }}>
            {this.props.svgFile}
            <h4 className="title-class">{this.props.title}</h4>
            {console.log("HEHEEH")}
          </div>
        )}
        {this.props.title !== "Highlights" && (
          <div className="Heading-class">
            {this.props.svgFile}
            <h4 className="title-class">{this.props.title}</h4>
          </div>
        )}
      </>
    );
  }
}

export default Banner;
