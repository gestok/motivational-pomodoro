import styled from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";

const Additionals = () => {
  const { enabledSound, setEnabledSound, motivating, setMotivating, next } =
    useContext(PomodoroContext);
  const handleSound = () => {
    setEnabledSound(!enabledSound);
    document.getElementById('guitar').currentTime = 0;
    document.getElementById('guitar').volume = 0;
    document.getElementById('guitar').play();
    setTimeout(() => document.getElementById('guitar').pause(), 150);
  }
  return (
    <>
      <AdditionalsWrapper className={!next ? "fade-in md-delay" : "fade-out"}>
        <Label>Enable Sound Notification</Label>
        <Checkbox
          type="checkbox"
          isChecked={enabledSound}
          onClick={handleSound}
        />
      </AdditionalsWrapper>
      <AdditionalsWrapper className={!next ? "fade-in lg-delay" : "fade-out"}>
        <Label>Display Motivational Messages</Label>
        <Checkbox
          type="checkbox"
          isChecked={motivating}
          onClick={() => setMotivating(!motivating)}
        />
      </AdditionalsWrapper>
    </>
  );
};
export default Additionals;

const Label = styled.div`
  font-weight: 800;
  padding: 0px 12px;
`;
const AdditionalsWrapper = styled.div`
  display: flex;
  gap: var(--g-gap-sm);
  align-items: center;
`;
const Checkbox = styled.input`
  -webkit-appearance: none;
  position: relative;
  background: ${(props) => (props.isChecked ? "var(--c-blue)" : "#ccc")};
  border-radius: var(--g-radius);
  width: 40px;
  height: 24px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.isChecked ? "calc(50% - 2px)" : "0px")};
    top: 0%;
    width: 24px;
    height: 100%;
    background: #fff;
    border-radius: 14px;
    transition: all 0.2s ease-in-out;
  }
`;
