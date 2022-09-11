import { useContext } from "react";
import PomodoroContext from "./PomodoroContext";
import styled, { keyframes } from "styled-components";
import PomodoroScreen from "./Components/PomodoroScreen";
import Settings from "./Components/Settings";
import guitar from './Assets/guitar.mp3';

const Main = () => {
  const { hasSettings, next, hasSession } = useContext(PomodoroContext);
  return (
    <>
      {hasSettings ? <PomodoroScreen /> : <Settings />}
      <DecalOverlay />
      <Decal hasSession={hasSession} />
      <Decal hasSession={hasSession} className="two" />
      <Expander hasSession={hasSession} expanding={next} />
      <audio type="audio/mp3" src={guitar} id="guitar" />
    </>
  );
};
export default Main;

const Expander = styled.div`
  background: ${(props) => (props.hasSession ? "var(--c-blue)" : "#4caf50")};
  border-radius: ${(props) => (props.expanding ? "32px" : "40% 55% 50% 53%")};
  position: absolute;
  left: ${(props) => (props.expanding ? "0%" : "35%")};
  bottom: ${(props) => (props.expanding ? "0%" : "8%")};
  width: ${(props) => (props.expanding ? "100%" : "30%")};
  height: ${(props) => (props.expanding ? "100%" : "20%")};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 1s ease;
  transition-delay: ${(props) => (props.expanding ? "0s" : "0.65s")};
`;
const bubble = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;
const DecalOverlay = styled.div`
  animation: 0.5s ${bubble} 1.5s forwards ease;
  background: var(--c-white);
  position: absolute;
  left: 50%;
  bottom: 5%;
  width: 175px;
  height: 175px;
  transform: translateX(-50%);
  z-index: 3;
`;

const Decal = styled.div`
  background: ${(props) => (props.hasSession ? "var(--c-blue)" : "#4caf50")};
  border-radius: 40% 55% 50% 53%;
  position: absolute;
  left: 48%;
  bottom: 8%;
  width: 120px;
  height: 120px;
  animation: 9s stationary infinite linear;
  &.two {
    width: 100px;
    height: 100px;
    border-radius: 40% 55% 50% 53%;
    animation: 9s stationary-layer reverse infinite linear;
  }
`;
