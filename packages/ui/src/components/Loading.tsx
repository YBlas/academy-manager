import styled from "@emotion/styled";
import { FC } from "react";
import { colors } from "../theme";
import { P4 } from "../theme/styles";

const LoadingOvercast: FC = () => {
  return (
    <Blur>
      <LoadingAnimation>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </LoadingAnimation>
      <P4>Cargando</P4>
    </Blur>
  );
};

const Blur = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99998;
  backdrop-filter: blur(3px);
  background-color: ${colors.colors.whiteTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingAnimation = styled.div`
  @keyframes wave {
    0%,
    60%,
    100% {
      transform: initial;
    }

    30% {
      transform: translateY(-15px);
    }
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  z-index: 99999;
  .dot {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 7px;
    animation: wave 1.3s linear infinite;

    &:nth-child(1) {
      background-color: ${colors.colors.orange80};
    }

    &:nth-child(2) {
      animation-delay: -1.1s;
      background-color: ${colors.colors.red80};
    }

    &:nth-child(3) {
      animation-delay: -0.9s;
      background-color: ${colors.colors.purple80};
    }
  }
`;

export default LoadingOvercast;
