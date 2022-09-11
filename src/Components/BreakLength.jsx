import styled from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const BreakLength = () => {
  const { breakLength, setBreakLength, playing, next } =
    useContext(PomodoroContext);
  const decrementBreak = () => {
    if (!playing && breakLength !== 60) setBreakLength(breakLength - 60);
  };
  const incrementBreak = () => {
    if (!playing && breakLength !== 3600) setBreakLength(breakLength + 60);
  };

  return (
    <Row className={!next ? "fade-in sm-delay" : "fade-out"}>
      <Label>Break Length</Label>
      <ButtonInput>
        <ControlButtons className="left" onClick={decrementBreak}>
          <FaMinus />
        </ControlButtons>
        <Digits>{(breakLength / 60).toFixed(0)}</Digits>
        <ControlButtons className="right" onClick={incrementBreak}>
          <FaPlus />
        </ControlButtons>
      </ButtonInput>
    </Row>
  );
};
export default BreakLength;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  z-index: 1;
`;
const Label = styled.div`
  font-weight: 800;
  padding: 0px 12px;
`;
const ButtonInput = styled.div`
  background: #ffffff;
  border-radius: var(--g-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--g-gap-sm);
`;
const Digits = styled.span`
  user-select: none;
  letter-spacing: 1px;
  &::after {
    content: "m";
  }
`;
const ControlButtons = styled.button`
  border: none;
  height: 100%;
  padding: 8px 12px;
  background: var(--c-blue);
  color: var(--c-white);
  cursor: pointer;
  &.right {
    border-radius: 0 var(--g-radius) var(--g-radius) 0;
  }
  &.left {
    border-radius: var(--g-radius) 0 0 var(--g-radius);
  }
`;
