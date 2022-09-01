import styled from "@emotion/styled";
import * as React from "react";
import { Lap } from "./hooks/useStopwatch";
import { stopwatchTime } from "./utils";

interface IProps {
  seconds: number;
  nextLap: Lap;
  laps: Lap[];
}

const LapItems: React.FC<Lap> = ({ title, lapTime }) => {
  return (
    <Box>
      <span>{title}</span>
      <span>{stopwatchTime(lapTime)}</span>
    </Box>
  );
};

const Laps: React.FC<IProps> = ({ seconds, nextLap, laps }) => {
  const showNextLap = React.useMemo(() => {
    return seconds !== 0;
  }, [seconds]);
  return (
    <Container>
      {showNextLap && <LapItems {...nextLap} />}
      {laps.map((lap) => {
        return <LapItems key={lap.id} {...lap} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
  font-size: 24px;

  padding: 20px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #1d1c1e;
  }

  &:nth-of-type(2) {
    color: #095022;
  }
  &:last-of-type:not(:first-of-type):not(:nth-of-type(2)) {
    color: #e8594f;
  }
`;

export default Laps;
