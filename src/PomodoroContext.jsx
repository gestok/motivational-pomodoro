import { useState, useEffect, createContext, useCallback } from "react";

const PomodoroContext = createContext();

export const PomodoroContextProvider = ({ children }) => {
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [timer, setTimer] = useState(sessionLength);
  const [onSession, setOnSession] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [hasSettings, setHasSettings] = useState(false);
  const [next, setNext] = useState(false);
  const [project, setProject] = useState("");
  const [enabledSound, setEnabledSound] = useState(false);
  const [motivating, setMotivating] = useState(false);

  useEffect(() => {
    setTimer(sessionLength);
  }, [sessionLength]);

  const timeOut = useCallback(() => {
    if (enabledSound){
      document.getElementById('guitar').volume = 1;
      document.getElementById('guitar').currentTime = 0;
      document.getElementById('guitar').play();
    }
    if (onSession) setTimer(breakLength);
    else setTimer(sessionLength);
    setOnSession(!onSession);
  }, [onSession, breakLength, sessionLength, enabledSound]);

  useEffect(() => {
    if (!playing) return;

    const loop = setInterval(() => {
      if (timer === 0) timeOut();
      else setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(loop);
  }, [playing, timer, timeOut]);

  return (
    <PomodoroContext.Provider
      value={{
        breakLength,
        setBreakLength,
        sessionLength,
        setSessionLength,
        timer,
        setTimer,
        onSession,
        setOnSession,
        playing,
        setPlaying,
        hasSettings,
        setHasSettings,
        next,
        setNext,
        project,
        setProject,
        enabledSound,
        setEnabledSound,
        motivating,
        setMotivating,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
export default PomodoroContext;
