import { useContext, useState, useEffect } from "react";
import PomodoroContext from "../PomodoroContext";
import styled from "styled-components";

const motivationalPhrases = [
  "You can do it! 💪",
  "You got this! 🤗",
  "Keep grinding! 🙌",
  "Getting better everyday! 👏",
  "Taking it step-by-step! 🙂",
  "Improving everyday! 🧠",
  "Ignore the noise 🔇",
  "Focus on yourself! 💎",
  "Work hard in silence! 💻",
  "Strive for progress! 🚀",
  "Only way is 🚀!",
  "Impossible until it's done! 💪",
  "Make yourself proud! 💎",
  "💎💎💎 are made in pressure!",
  "Study, because you can ✅",
  "Never give up! 🤗",
  "Have faith in hard work! 👊",
  "Give it your all 💯",
  "Less talk 🤏, more doing!",
  "You are unstoppable! 🔥",
  "Ditch the crowd and grow!",
  "Time is on your side! ⏱",
  "Be creative! 💡",
  "Set goals and start! 📌",
  "Success is the sum of small efforts.",
  "Achieve your goals 🌞",
  "You become what you study 💯",
  "Follow your dreams ✨",
  "Study first, play afterwards.",
  "Don't be the same, be better ✅",
  "Grab your coffee and do your work ☕",
  "Your future self will be proud 🌌",
  "Wiser to find out than to suppose.",
  "Slow progress > No progress.",
  "Dreams + Work = Success ✈️",
  "Future depends on what you do today!",
  "Do not lose hope and continue 💯",
  "Imagine what you can be 💭",
  "Don't fall asleep on your dreams 👁‍🗨",
  "Just DO IT!",
  "No party is better than your dreams.",
  "Keep hustling!",
];

const MotivationalMessages = () => {
  const { timer, next } = useContext(PomodoroContext);
  const [updatingArray, setUpdatingArray] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [cropped, setCropped] = useState(0);

  useEffect(() => {
    if (updatingArray.length === 10) {
      setUpdatingArray(
        [...updatingArray]
          .slice(9)
          .concat([motivationalPhrases[Math.round(Math.random() * 42)]])
      );
      // Crop the array, set margin-top multiplier
      setCropped(cropped + 1);
    }
    // Push wrapper up
    setTranslate(translate + 1);
    // Add new message
    updatingArray.push(motivationalPhrases[Math.round(Math.random() * 42)]);
  }, [timer]);

  return (
    <VerticalCarousel className={next ? "fade-in" : "fade-out"}>
      <MotivationWrapper id="motivation" up={translate} crop={cropped}>
        {updatingArray.map((msg, index) => {
          return (
            <Bubble className="fade-in xs-delay" key={index}>
              {msg}
            </Bubble>
          );
        })}
      </MotivationWrapper>
    </VerticalCarousel>
  );
};
export default MotivationalMessages;

const VerticalCarousel = styled.div`
  max-height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, var(--c-blue), transparent 30%);
    z-index: 1;
    border-radius: 50px;
  }
`;

const MotivationWrapper = styled.div.attrs((props) => ({
  style: {
    transform: `translateY(${props.up * -98}px)`,
  },
}))`
  height: 150px;
  margin-top: -14px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  & > p:first-child {
    margin-top: calc(40px + (40px + 58px) * ${(props) => props.crop} * 9);
  }
`;

const Bubble = styled.p`
  margin: 40px 0 0 0;
  background: #0005;
  display: inline-flex;
  padding: var(--g-gap-md);
  border-radius: 50px;
  color: var(--c-white);
  box-shadow: 0px 6px 12px -6px #0008;
`;
