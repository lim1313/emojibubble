import React from 'react';
import styled from 'styled-components';

const AriaDiv = ({ className, children, onClick, onkeydown }) => {
  return (
    <div
      role='button'
      aria-pressed='false'
      tabIndex='0'
      className={className}
      onClick={onClick}
      onKeyDown={onkeydown}
    >
      {children}
      {/* 여기에는 Emoji가 들어간다 */}
    </div>
  );
};

const EmojiButton = styled(AriaDiv)`
  padding: 3rem;
  margin: 1rem;
  background-color: #00c7ef;
  width: fit-content;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 10px rgba(26, 30, 30, 30);
  }
`;

export default EmojiButton;
