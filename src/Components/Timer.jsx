import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";

const Timer = () => {
  const { timer, onSession, next } = useContext(PomodoroContext);
  return (
    <>
      <TimerLabel>{onSession ? "Time to focus!" : "Take a break!"}</TimerLabel>
      <Countdown>
        {timer === 3600
          ? "60:00"
          : new Date(1000 * timer)
              .toISOString()
              .substr(11, 8)
              .replace(/^[0]+[:]/, "")}
      </Countdown>
      <ClockWrapper reveal={next}>
        <Rotator seconds={timer}>
          {Array(30)
            .fill(null)
            .map((fill, value) => {
              return value % 5 === 0 ? (
                <Tick key={value} rotate={value * 6} />
              ) : (
                <Tick key={value} className="small" rotate={value * 6} />
              );
            })}
        </Rotator>
      </ClockWrapper>
    </>
  );
};
export default Timer;

const FadeUp = keyframes`
  0% {
    bottom: -100px;
    visibility: hidden;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    visibility: visible;
    opacity: 1;
  }
`;

const FadeUpLess = keyframes`
  0% {
    bottom: -50px;
    visibility: hidden;
    opacity: 0;
  }
  100% {
    bottom: 0px;
    visibility: visible;
    opacity: 1;
  }
`;

const TimerLabel = styled.h2`
  position: relative;
  animation: 0.5s ${FadeUpLess} forwards ease-in;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 600;
  color: var(--c-white);
`;

const Countdown = styled.div`
  position: relative;
  animation: 0.5s ${FadeUpLess} forwards ease-in;
  font-size: 4rem;
  font-weight: 700;
  color: var(--c-white);
  text-align: center;
`;

const ClockWrapper = styled.div`
  animation: 0.5s ${FadeUp}
    ${(props) => (props.reveal ? "forwards" : "reverse")} ease-in;
  width: 100%;
  height: 240px;
  position: absolute;
  bottom: 0%;
  pointer-events: none;
  user-select: none;
  z-index: 2;
`;

const Tick = styled.div.attrs(props => ({
  style: {
    transform: `translate(-50%, -50%) rotate(${props.rotate}deg)`,
  }
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  background: linear-gradient(
    0deg,
    var(--c-white) 0%,
    var(--c-white) 5%,
    transparent 5%,
    transparent 95%,
    var(--c-white) 95%
  );
  width: 4px;
  height: 800px;
  &.small {
    background: linear-gradient(
      0deg,
      transparent 1.5%,
      var(--c-white) 1.5%,
      var(--c-white) 3%,
      transparent 3%,
      transparent 97%,
      var(--c-white) 97%,
      var(--c-white) 98.5%,
      transparent 98.5%
    );
    width: 3px;
  }
`;

const Rotator = styled.div.attrs(props => ({
  style: {
    transform: `translateX(-50%) rotate(${props.seconds * 6}deg)`,
  }
}))`
  width: 800px;
  height: 800px;
  position: relative;
  left: 50%;
  bottom: 0%;
  transition: all 1s ease;
`;
