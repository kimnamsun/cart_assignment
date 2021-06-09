import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 4px;
`;
