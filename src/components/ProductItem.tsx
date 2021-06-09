import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Product } from '@constants';
import { currency } from '@utils';

interface TextProps {
  type: string;
}

const textStyles = {
  title: css`
    font-size: 16px;
    font-weight: 600;
  `,
  price: css`
    font-size: 14px;
    color: ${({ theme }) => theme.color.red};
  `,
  button: css`
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.color.white};
  `,
};

const ProductItem = ({ product }: { product: Product }) => {
  const { id, name, price, img } = product;
  const history = useHistory();

  const goToCart = (product: Product) => {
    console.log(product);
    // history.push('/cart');
  };

  return (
    <Wrapper>
      <Thumbnail src={img} alt={name} />
      <Text type="title">{name}</Text>
      <Text type="price">{currency(price)}원</Text>
      <CartButton
        onClick={() => {
          goToCart(product);
        }}
      >
        <Text type="button">
          <i className="xi-cart-o" />
          장바구니 담기
        </Text>
      </CartButton>
    </Wrapper>
  );
};

export default ProductItem;

const Wrapper = styled.div`
  padding: 1rem 0 1rem 0;
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Text = styled.p<TextProps>`
  margin: 0.5rem 0;
  ${props => textStyles[props.type]};

  i {
    font-size: 15px;
    margin: 0 3px;
  }
`;

const CartButton = styled.button`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 4px;
`;
