import React, { Component } from 'react';
import Board from "./components/Board";
import Controls from "./components/Controls";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: [1],
      ground: [2, 4],
      x: 255,
      y: 255,
      groundSize: 2,
      current: 0,
    };
  }

  componentDidMount() {
    this.extendData();
  }

  render() {
    const { x, y, figure } = this.state;
    return (
      <div>
        <Controls
          x={x}
          y={y}
          current={this.state.current}
          updateX={this.updateX}
          updateY={this.updateY}
        />
      <Board x={x} y={y} data={figure} updateCurrent={this.updateCurrent}/>
      </div>
    );
  }

  updateX = evt => {
    this.setState({
      x: Number(evt.target.value),
    });
    this.extendData();
  }

  updateY = evt => {
    this.setState({
      y: Number(evt.target.value),
    });
    this.extendData();
  }

  updateCurrent = evt => {
    this.setState({ current: Number(evt)})
  }

  extendData = () => {
    const { figure, x, y } = this.state;
    let { groundSize } = this.state;
    const max = x * y;
    let nextFig = figure[figure.length - 1];

    while (max > nextFig) {
      groundSize = this.extendGround();
      nextFig = this.extendFigure();
    }
    this.setState({ groundSize });
  }

  extendGround = () => {
    let { ground, groundSize } = this.state
    for (var i = 0; i < groundSize; i++) {
    ground.push(ground[ground.length - 1] + 1);
    }
    groundSize++;
    let last = ground.length - 1;
    ground.push(ground[last] + 2);
    return groundSize;
  }

  extendFigure = () => {
    const { figure, ground } = this.state;
    const index = figure.length - 1;
    const current = figure[index];
    const next = current + ground[index];
    figure.push(next);
    return next;
  }
}

export default App;
