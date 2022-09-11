import styled, { keyframes } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";
import PomodoroContext from "../PomodoroContext";

const ActionButtons = () => {
  const {
    setBreakLength,
    setSessionLength,
    playing,
    setPlaying,
    setHasSession,
    setHasSettings,
    setNext,
    next,
    project,
    timer,
  } = useContext(PomodoroContext);
  const [move, setMove] = useState(0);

  useEffect(() => {
    setMove(move + 1);
  }, [timer]);

  const resetPomodoro = () => {
    setPlaying(false);
    setNext(false);
    setTimeout(() => {
      setHasSession(true);
      setBreakLength(5 * 60);
      setSessionLength(25 * 60);
      setHasSettings(false);
    }, 1000);
  };

  const smoothDecrease = (id) => {
    if (id.value > 100) {
      const smoothTransition = setInterval(() => {
        if (id.value < 1000) id.value = parseInt(id.value) + 1;
        else clearInterval(smoothTransition);
      }, 30);
    } else {
      resetPomodoro();
    }
  };

  const handleCancel = (e) => {
    const slider = document.getElementById("slideCancel");
    slider.addEventListener("mouseup", smoothDecrease(slider));
    slider.removeEventListener("mouseup", smoothDecrease(slider));
  };

  return (
    <>
      <Buttons>
        <SlideCancelWrapper className={next ? "fade-in" : "fade-out"}>
          <span>{project}</span>
          <SlideCancel
            id="slideCancel"
            type="range"
            min="0"
            max="1000"
            defaultValue="1000"
            move={move}
            onChange={(e) => handleCancel(e)}
          />
        </SlideCancelWrapper>
        <Button
          className={next ? "fade-in" : "fade-out"}
          onClick={() => (playing ? setPlaying(false) : setPlaying(true))}
        >
          {playing ? (
            <GiPauseButton size={20} />
          ) : (
            <FaPlay size={16} style={{ paddingLeft: "2px" }} />
          )}
        </Button>
      </Buttons>
    </>
  );
};
export default ActionButtons;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  padding: var(--g-gap-lg) 0;
`;

const SlideCancelWrapper = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  & span {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 12px;
    z-index: -1;
    user-select: none;
    pointer-events: none;
    color: var(--c-white);
    max-width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const expandSlider = keyframes`
  0% {
    width: 35px;
  }
  100% {
    width: 200px;
  }
`;
const SlideCancel = styled.input.attrs(props => ({
  style: {
    backgroundPosition: props.move * 50 + 'px',
  },
}))`
  animation: 0.5s ${expandSlider} forwards ease-in;
  -webkit-appearance: none;
  display: inline-flex;
  background: linear-gradient(90deg, #ffffff50, #ffffff85, #ffffff75, #ffffff50);
  border-radius: 50px;
  padding: 5px;
  width: 200px;
  transition: all 1s linear;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 34px;
    width: 34px;
    color: var(--c-blue);
    border-radius: 50%;
    background: url("data:image/svg+xml,%3Csvg fill='%2300ADB5' xmlns='http://www.w3.org/2000/svg' viewBox='-180 -100 680 680'%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E")
        center center / contain no-repeat,
      #eeeeee;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;

const Button = styled.button`
  -webkit-appearance: none;
  border: none;
  padding: 0;
  background: var(--c-white);
  color: var(--c-blue);
  font-size: 1.5rem;
  border-radius: 50%;
  display: inline-flex;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
`;
