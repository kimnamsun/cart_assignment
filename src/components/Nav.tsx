import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { flexSet } from '@styles/Theme';

const Nav = () => {
  const history = useHistory();

  const goToCart = () => {
    history.push('/cart');
  };

  return (
    <Wrapper>
      <Logo>SUNNYSHOP</Logo>
      <Cart onClick={goToCart}>
        <i className="xi-cart-o" />
        <Badge>
          <Amount>1</Amount>
        </Badge>
      </Cart>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  ${flexSet('space-between', 'center')};
  padding: 3rem;
  max-height: 100px;
  background-color: ${({ theme }) => theme.color.black};
`;

const Logo = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
`;

const Cart = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
`;

const Badge = styled.button`
  position: absolute;
  padding: 10px;
  width: 15px;
  height: 15px;
  top: 0;
  right: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.red};
`;

const Amount = styled.span`
  position: absolute;
  bottom: 10;
  margin: -6px 0px 0px -2px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
`;
