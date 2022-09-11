import 'normalize.css';
import { createGlobalStyle } from "styled-components";
import { PomodoroContextProvider } from './PomodoroContext';
import Main from './Main';

function App() {
  return (
    <PomodoroContextProvider>
      <Main />
      <GlobalStyle />
    </PomodoroContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    --c-light-black: #393E46;
    --c-black: #222831;
    --c-blue: #00ADB5;
    --c-white: #EEEEEE;
    --g-max-width: 380px;
    --g-radius: 32px;
    --g-gap-sm: 10px;
    --g-gap-md: 20px;
    --g-gap-lg: 40px;
    --g-gap-xl: 60px;
    --g-gap-xxl: 80px;
    --g-font: 'Nanum Gothic', 'Arial', sans-serif;
  }
  body {
    background: var(--c-black);
    color: var(--c-light-black);
    font-family: var(--g-font);
    display: flex;
    height: 100vh;
    padding: 14px;
    justify-content: center;
    align-items: center;
  }
  #app {
    max-width: var(--g-max-width);
    width: 100%;
    min-height: 560px;
    box-shadow: 0px 4px 12px var(--c-black);
    border-radius: var(--g-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--c-white);
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .playin {animation: 0.5s PlayIn 1.5s forwards ease;}
  .playout {animation: 0.5s PlayOut 0.1s backwards ease;}
  .fade-in {animation: 0.5s fade-in forwards ease;}
  .fade-out {animation: 0.5s fade-out forwards ease;}

  /* Keyframes */
  @keyframes stationary {
    from { transform: scale(0.875) translate(-40%, -3%) rotate(0deg);}
    50% { transform: scale(1.125) translate(-36%, -5%) rotate(180deg);}
    to { transform: scale(0.875) translate(-40%, -3%) rotate(360deg);}
  }
  @keyframes stationary-layer {
    from { transform: scale(1) translate(-40%, 0%) rotate(0deg);}
    50% { transform: scale(1.3) translate(-36%, -4%) rotate(180deg);}
    100% { transform: scale(1) translate(-40%, 0%) rotate(360deg);}
  }
  @keyframes expanding {
    from { transform: scale(0.875) rotate(0deg);}
    50% { transform: scale(1.125) rotate(180deg);}
    to { transform: scale(0.875) rotate(360deg);}
  }
  @keyframes fade-in {
    0% {opacity: 0; visibility: hidden;}
    100% {opacity: 1; visibility: visible;}
  }
  @keyframes fade-out {
    0% {opacity: 1; visibility: visible;}
    100% {opacity: 0; visibility: hidden;}
  }
  @keyframes PlayIn {
    0% {opacity: 0; visibility: hidden; transform: translateX(-50%) scale(2);}
    100% {opacity: 1; visibility: visible; transform: translateX(-50%) scale(1);}
  }
  @keyframes PlayOut {
    0% {opacity: 1; visibility: visible;transform: translateX(-50%) scale(1);}
    50% {opacity: 1; visibility: visible;transform: translateX(-50%) scale(1.4);}
    100% {opacity: 0; visibility: hidden;transform: translateX(-50%) scale(1);}
  }

  /* Delays */
  .xs-delay, .sm-delay, .md-delay, .lg-delay, .xl-delay, .xxl-delay {opacity: 0; visibility: hidden;}
  .xs-delay {animation-delay: 0.3s;}
  .sm-delay {animation-delay: 0.6s;}
  .md-delay {animation-delay: 0.9s;}
  .lg-delay {animation-delay: 1.2s;}
  .xl-delay {animation-delay: 1.5s;}
  .xxl-delay {animation-delay: 1.8s;}
`;