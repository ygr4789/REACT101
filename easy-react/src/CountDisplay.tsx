import * as React from "react";

interface CountDisplayProps {
  count: number;
}

const CountDisplay: React.FC<CountDisplayProps> = ({ count }) => {
  React.useEffect(() => {
    console.log("[Rendered] CountDisplay / useEffect");
  });
  React.useEffect(() => {
    console.log("[Mounted] CountDisplay / useEffect");
    return () => {
      console.log("[Clean-Up] CountDisplay / useEffect")
    }
  }, []);

  return <h3>FC Count: {count}</h3>;
};

export default CountDisplay;
