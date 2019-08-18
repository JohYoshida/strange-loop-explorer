import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div className="Controls">
        <div>
          <label>X</label>
          <input
            id="x"
            type="number"
            name="X"
            min="0"
            max="255"
            step="1"
            value={this.props.x}
            onChange={evt => this.props.updateX(evt)}
          />
        </div>
        <div>
          <label>Y</label>
          <input
            id="y"
            type="number"
            name="Y"
            min="0"
            max="255"
            step="1"
            value={this.props.y}
            onChange={evt => this.props.updateY(evt)}
          />
        </div>
        <div>
          {this.props.current}
        </div>
      </div>
    );
  }
}

export default Controls;
