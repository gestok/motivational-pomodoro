import styled from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";
import MotivationalMessages from "./MotivationalMessages";
import Timer from "./Timer";
import ActionButtons from "./ActionButtons";
import CoffeeBreak from "./CoffeeBreak";

const PomodoroScreen = () => {
  const { motivating, hasSession } = useContext(PomodoroContext);
  return (
    <PomodoroWrapper>
      <ActionButtons />
      <Timer />
      {motivating && hasSession ? <MotivationalMessages /> : !hasSession && <CoffeeBreak/>}
    </PomodoroWrapper>
  );
};
export default PomodoroScreen;

const PomodoroWrapper = styled.div`
  z-index: 10;
`;
