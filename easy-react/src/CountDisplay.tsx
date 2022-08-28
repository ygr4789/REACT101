import * as React from "react";

interface CountDisplayProps {
  count: number;
}
interface CountDisplayStates {}

class CountDisplay extends React.Component<
  CountDisplayProps,
  CountDisplayStates
> {
  constructor(props: CountDisplayProps) {
    super(props);
    console.log("[Mounting]: CountDisplay / In constructor");
  }

  componentDidUpdate() {
    console.log("[Uptading]: CountDisplay / componentDidUpdate");
  }
  componentDidMount() {
    console.log("[Mounting]: CountDisplay / componentDidMount");
  }
  componentWillUnmount() {
    console.log("[Unmounting]: CountDisplay / componentWillUnmount");
  }

  render() {
    return <h3>Count: {this.props.count}</h3>;
  }
}

export default CountDisplay;
