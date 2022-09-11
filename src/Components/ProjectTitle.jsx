import styled from "styled-components";
import { useContext } from "react";
import PomodoroContext from "../PomodoroContext";

const ProjectTitle = () => {
  const { project, setProject, next } = useContext(PomodoroContext);
  return (
    <Row className={!next ? "fade-in xs-delay" : "fade-out"}>
      <Label>Your Project Title</Label>
      <Input
        type="text"
        defaultValue={project}
        placeholder="What are you focusing on?"
        onChange={(e) => setProject(e.target.value)}
      />
    </Row>
  );
};
export default ProjectTitle;

const Label = styled.div`
  font-weight: 800;
  padding: 0px 12px;
`;
const Input = styled.input`
  background: #ffffff;
  border: none;
  border-radius: var(--g-radius);
  padding: 8px 12px;
  outline: none;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
  z-index: 1;
`;
