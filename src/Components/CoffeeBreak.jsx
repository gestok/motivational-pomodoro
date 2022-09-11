import styled, { keyframes } from "styled-components";
import coffee from "../Assets/coffee.gif";

const CoffeeBreak = () => {
  return <Image src={coffee} alt="Coffee Break" />;
};
export default CoffeeBreak;

const Reveal = keyframes`
  0% {opacity: 0; visibility: hidden;}
  100% {opacity: 1; visibility: visible;}
`;

const Image = styled.img`
  animation: 0.5s ${Reveal} 0.4s forwards ease;
  max-width: 240px;
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
`;
