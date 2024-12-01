import React, { useRef } from "react";
import styled, { css, keyframes } from "styled-components";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoSize?: boolean;
  isError?: boolean;
}

const shake = keyframes`
  0% { transform: translateX(-0.375rem); }
  25% { transform: translateX(0.375rem); }
  50% { transform: translateX(-0.375rem); }
  75% { transform: translateX(0.375rem); }
  100% { transform: translateX(0); }
`;

const defaultColor = {
  default: {
    bgColor: "#ececec61",
    boxShadow: "#c5c5c5",
  },
  focus: {
    bgColor: "#ffffff",
    boxShadow: "#1677ff",
  },
  error: {
    bgColor: "#f44e4e44",
    boxShadow: "#f44e4e",
  },
};

const StyledTextarea = styled.textarea<TextareaProps>`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  resize: none;
  border: none;
  outline: none;
  background-color: var(
    --jtrc-textarea-default-bg-color,
    ${defaultColor.default.bgColor}
  );
  box-sizing: border-box;
  box-shadow: inset 0 0 0 0.125rem
    var(--jtrc-textarea-default-border-color, ${defaultColor.default.boxShadow});
  border-radius: 0.5rem;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    margin: 0.25rem 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #99999960;
    background-clip: padding-box;
    border: 0.25rem solid transparent;
    border-radius: 0.75rem;
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
    box-shadow: inset 0 0 0 0.125rem
      var(--jtrc-textarea-focus-border-color, ${defaultColor.focus.boxShadow});
  }

  /* error */
  ${(props) =>
    props.isError &&
    css`
      box-shadow: inset 0 0 0 0.125rem
        var(--jtrc-textarea-error-border-color, ${defaultColor.error.boxShadow});
      background-color: var(
        --jtrc-textarea-error-bg-color,
        ${defaultColor.error.bgColor}
      );
      animation: ${shake} 0.3s ease;
    `}
`;

const Textarea: React.FC<TextareaProps> = ({ autoSize, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 텍스트 입력 시 높이 자동 조절
  const handleInput = () => {
    if (textareaRef.current && autoSize) {
      // 높이를 초기화
      textareaRef.current.style.height = "auto";

      // HTML의 기본 폰트 크기를 가져옴
      const baseFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      // scrollHeight를 rem 단위로 변환
      const scrollHeightRem = textareaRef.current.scrollHeight / baseFontSize;

      // 높이를 rem 단위로 설정
      textareaRef.current.style.height = `${scrollHeightRem}rem`;
    }
  };

  return <StyledTextarea ref={textareaRef} onInput={handleInput} {...props} />;
};

export default Textarea;
