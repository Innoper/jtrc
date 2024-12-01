import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "default";
}

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
  height: auto;
  white-space: normal; /* 줄바꿈 허용 */
  word-break: break-word; /* 긴 단어를 줄바꿈 */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7em 1em;
  font-size: 1rem;
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
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton variant={props.variant || "primary"} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
