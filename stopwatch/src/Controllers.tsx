import styled from "@emotion/styled";
import * as React from "react";
import Button from "./Button";
import { STATUS } from "./hooks/useStopwatch";

interface IProps {
  status: STATUS;
  record: () => void;
  stop: () => void;
  reset: () => void;
  start: () => void;
}

const Controllers: React.FC<IProps> = ({
  status,
  record,
  stop,
  reset,
  start,
}) => {
  return (
    <Container>
      {status === STATUS.PROCESSING ? (
        <>
          <Button type="NORMAL" onClick={record}>랩</Button>
          <Button type="ERROR" onClick={stop}>정지</Button>
        </>
      ) : (
        <>
          <Button type="NORMAL" onClick={reset}>초기화</Button>
          <Button type="SUCCESS" onClick={start}>시작</Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  flex: none;

  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #1d1c1e;
`;

export default Controllers;