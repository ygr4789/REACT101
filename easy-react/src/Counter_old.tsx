import * as React from "react";
import { setConstantValue } from "typescript";
import CountDisplay from "./CountDisplay_old";

interface CounterProps {
  title: string;
}
interface CounterStates {
  num: number;
  hideCount: boolean;
}

class Counter extends React.Component<CounterProps, CounterStates> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      num: 0,
      hideCount: false,
    };

    console.log("[Mounting] Counter / In constructor");
  }

  handleClick = () => {
    this.setState((prev) => {
      return { num: prev.num + 1 };
    });
  };
  handleToggle = () => {
    this.setState((prev) => {
      return { hideCount: !prev.hideCount };
    });
  };

  componentDidUpdate() {
    console.log("[Uptading]: Counter / componentDidUpdate");
  }
  componentDidMount() {
    console.log("[Mounting]: Counter / componentDidMount");
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {!this.state.hideCount && <CountDisplay count={this.state.num} />}
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleClick}>Plus</button>
      </div>
    );
  }
}

export default Counter;
