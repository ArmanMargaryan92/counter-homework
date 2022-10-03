import "./App.css";

import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      count: 0,
      maxCount: 0,
      minCount: 0,
    };
  }
  handleAddButton = () => {
    if (
      this.state.count < this.state.maxCount &&
      this.state.maxCount >= +this.state.count + +this.state.step
    ) {
      this.setState({ count: +this.state.count + +this.state.step });
    }
  };
  handleMinusButton = () => {
    if (
      this.state.count > 0 &&
      this.state.count > this.state.minCount &&
      this.state.count - this.state.step >= this.state.minCount
    ) {
      this.setState({ count: +this.state.count - +this.state.step });
    }
  };
  handleResetButton = () => {
    this.setState({ count: this.state.minCount });
  };

  handleMaxInput = (event) => {
    this.setState({ maxCount: event.target.value });
  };

  handleMinInput = (event) => {
    this.MinValue = event.target.value;
    this.setState({ minCount: event.target.value });
  };
  handleStepInput = (event) => {
    if (event.target.value >= 1) {
      this.setState({ step: event.target.value });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div className="inputbox">
          <input
            onChange={this.handleMaxInput}
            className="input"
            type="number"
            min={1}
            placeholder={"Input Max Value"}
          />
          <input
            onChange={this.handleMinInput}
            className="input"
            type="number"
            min={0}
            placeholder={" Input Min Value"}
          />
          <input
            onChange={this.handleStepInput}
            className="input"
            type="number"
            min={1}
            placeholder={"Input Step"}
          />
        </div>

        <div className="buttonbox">
          <button className={"buttonplus"} onClick={this.handleAddButton}>
            +
          </button>
          <span className={"span"}>{this.state.count}</span>
          <button className={"buttonminus"} onClick={this.handleMinusButton}>
            -
          </button>
          <button className={"buttonReset"} onClick={this.handleResetButton}>
            {" "}
            Reset{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
