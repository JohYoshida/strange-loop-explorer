import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {
  render() {
    const Board = this.makeBoard();
    return <div className="Board">{Board}</div>;
  }

  makeBoard = () => {
    const Board = [];
    let row = [];
    let index = 0;
    let count = 1;
    const { data, x, y } = this.props;
    // Make each row
    for (var i = 0; i < y; i++) {
      // Make each cell
      for (var j = 0; j < x; j++) {
        if (count === data[index]) {
          row.push(<Cell key={count} data={"figure"} count={count} updateCurrent={this.props.updateCurrent} />);
          index++;
          count++;
        } else {
          row.push(<Cell key={count} data={"ground"} count={count} updateCurrent={this.props.updateCurrent} />);
          count++;
        }
      }
      // Add row to board
      Board.push(
        <div key={i} className="row">
          {row}
        </div>
      );
      row = [];
    }
    return Board;
  };
}

export default Board;
