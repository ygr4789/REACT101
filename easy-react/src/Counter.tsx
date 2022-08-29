import * as React from "react";
import CountDisplay from "./CountDisplay";
import { useCounter } from "./hooks/useCounter";
import useWindowWidth from "./hooks/useWindowWidth";
import useToggle from "./hooks/ustToggle";

interface CounterProps {
  title: string;
}
interface CounterStates {
  num: number;
  hideCount: boolean;
}

const Counter: React.FC<CounterProps> = ({title}) => {
  const { count, add, minus } = useCounter();
  const [hide, toggle] = useToggle();
  const width = useWindowWidth();

  React.useEffect(() => {
    console.log("[Rendered] Counter / useEffect");
  });

  React.useEffect(() => {
    console.log("[Mounted] Counter / useEffect");
  }, []);

  return (
    <div>
      <h1>{title} / {width}</h1>
      {!hide && <CountDisplay count={count} />}
      <button onClick={toggle}>Toggle</button>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default Counter;
