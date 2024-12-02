import React from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  height?: string | number;
  variant?: "primary" | "secondary" | "default";
  isLoading?: boolean;
}

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 점이 올라가는 높이 */
  }
`;

const defaultColor = {
  primary: {
    bgColor: "#1677ff",
    borderColor: "#1677ff",
    fontColor: "#ffffff",
  },
  secondary: {
    bgColor: "#ffffff",
    borderColor: "#1677ff",
    fontColor: "#1677ff",
  },
  default: {
    bgColor: "#ffffff",
    borderColor: "#000000",
    fontColor: "#000000",
  },
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => props.height || "3rem"};
  white-space: normal; /* 줄바꿈 허용 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7em 1em;
  font-size: 1.2rem;
  line-height: 1;
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.variant === "primary"
      ? `var(--jtrc-button-color, var(--jtrc-thema, ${defaultColor.primary.bgColor}))`
      : `${defaultColor.default.bgColor}`};

  color: ${(props) =>
    props.variant === "primary"
      ? `${defaultColor.primary.fontColor}`
      : props.variant === "secondary"
      ? `var(--jtrc-button-color, var(--jtrc-thema, ${defaultColor.secondary.fontColor}))`
      : `${defaultColor.default.fontColor}`};

  border: 1px solid
    ${(props) =>
      props.variant !== "default"
        ? `var(--jtrc-button-color, var(--jtrc-thema, ${defaultColor.primary.borderColor}))`
        : ` ${defaultColor.default.borderColor}`};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// 로딩 컨테이너
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* 점들 간의 간격 */
`;

// 점 스타일
const Dot = styled.div<{ delay: string }>`
  width: 8px;
  height: 8px;
  background-color: #777777;
  border-radius: 50%;
  animation: ${bounce} 1s infinite ease-in-out;
  animation-delay: ${(props) => props.delay};
`;

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <StyledButton
      disabled={isLoading}
      variant={props.variant || "primary"}
      {...props}
    >
      {!isLoading ? (
        children
      ) : (
        <LoadingContainer>
          <Dot delay="0s" />
          <Dot delay="0.2s" />
          <Dot delay="0.4s" />
        </LoadingContainer>
      )}
    </StyledButton>
  );
};

export default Button;
