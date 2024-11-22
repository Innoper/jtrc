import React from "react";
import styled from "styled-components";

const defaultColor = {
  default: {
    bgColor: "#ececec61",
    boxShadow: "#c5c5c5",
  },
  focus: {
    bgColor: "#ffffff",
    boxShadow: "#1677ff",
  },
};

const StyledTextarea = styled.textarea<HTMLTextAreaElement>`
  width: 100%;
  padding: 0.3rem 0.6rem;
  font-size: 0.6rem;
  line-height: 0.8rem;
  resize: none;
  border: none;
  outline: none;
  background-color: var(
    --jtrc-textarea-default-bg-color,
    ${defaultColor.default.bgColor}
  );
  box-shadow: inset 0 0 0 0.0625rem
    var(--jtrc-textarea-default-border-color, ${defaultColor.default.boxShadow});
  border-radius: 0.375rem;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-track {
    margin: 0.125rem 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #99999960;
    background-clip: padding-box;
    border: 0.1875rem solid transparent;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* focus */
  &:focus {
    background-color: var(
      --jtrc-textarea-focus-bg-color,
      ${defaultColor.focus.bgColor}
    );
    box-shadow: inset 0 0 0 0.0625rem
      var(--jtrc-textarea-focus-border-color, ${defaultColor.focus.boxShadow});
  }
`;

const Textarea: React.FC<HTMLTextAreaElement> = ({ ...props }) => {
  return <StyledTextarea {...props} />;
};

export default Textarea;
