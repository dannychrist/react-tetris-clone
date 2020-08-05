import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border: 4px solid black;
  color: #00FF41;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  
  :hover {
    transform: scale(1.1);
    color: red;
  }
`;
