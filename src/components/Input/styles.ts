import styled, { css } from 'styled-components';

interface PropsContainer {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<PropsContainer>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  transition: all 0.2s ease-in-out;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isField &&
    css`
      color: #ff9000;
    `}

  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
