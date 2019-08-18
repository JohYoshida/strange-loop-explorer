import React, { Component } from "react";

class Cell extends Component {
  render() {
    const { data, count } = this.props;
    const className = makeClassName(data);
    return <div className={className} onMouseEnter={this.props.updateCurrent.bind(this, count)} />;
  }
}

function makeClassName(data, color) {
  let className = "Cell";
  if (data === "figure") {
    className += " figure";
  } else if (data === "ground") {
    className += " ground";
  }
  return className;
}

export default Cell;
