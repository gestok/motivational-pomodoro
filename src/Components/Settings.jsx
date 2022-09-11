import styled from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";
import { FaPlay, FaGithub } from "react-icons/fa";
import ProjectTitle from "./ProjectTitle";
import BreakLength from "./BreakLength";
import SessionLength from "./SessionLength";
import Additionals from "./Additionals";

const Settings = () => {
  const { setHasSettings, setPlaying, next, setNext } =
    useContext(PomodoroContext);
  const nextStep = () => {
    setNext(true);
    setTimeout(() => {
      setHasSettings(true);
      setPlaying(true);
    }, 1000);
  };
  return (
    <SettingsWrapper>
      <Heading className={next ? "fade-out" : "fade-in"}>
        <h2 style={{ margin: "0" }}>Get started</h2>
        <Github
          href="https://github.com/gestok/motivational-pomodoro"
          target="_blank"
          title="Source Code"
        >
          <FaGithub size={26} />
        </Github>
      </Heading>
      <ProjectTitle />
      <FlexRow>
        <BreakLength />
        <SessionLength />
      </FlexRow>
      <Additionals />
      <Play className={next ? "playout" : "playin"} onClick={nextStep}>
        <FaPlay />
      </Play>
    </SettingsWrapper>
  );
};
export default Settings;

const SettingsWrapper = styled.div`
  padding: var(--g-gap-md);
  display: flex;
  flex-direction: column;
  gap: var(--g-gap-md);
  flex-grow: 1;
  z-index: 10;
`;

const Heading = styled.div`
  display: flex;
  gap: var(--g-gap-md);
  justify-content: space-between;
  color: #fff;
  user-select: none;
  background: var(--c-light-black);
  padding: 6px var(--g-gap-sm);
  border-radius: var(--g-radius);
`;

const Github = styled.a`
  display: flex;
  align-items: end;
  justify-content: center;
  color: var(--c-white);
  border-radius: 50%;
`;

const Play = styled.button`
  display: flex;
  padding: 0 0 0 6px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 12%;
  background: none;
  cursor: pointer;
  color: #fff;
  border: solid 2px var(--c-white);
  border-radius: 50%;
  font-size: 3rem;
  visibility: hidden;
  opacity: 0;
`;

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--g-gap-md);
`;
