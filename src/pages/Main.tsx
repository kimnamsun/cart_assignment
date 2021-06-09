import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from '@components/Nav';
import Title from '@components/Title';
import ProductItem from '@components/ProductItem';
import { flexSet } from '@styles/Theme';
import { getProduct } from '@api/api';
import { Product } from '@constants';

const Main = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data: productData } = await getProduct();
      console.log(productData.products);
      setProductList(productData.products);
    } catch {
      console.log('error');
    }
  };

  return (
    <>
      <Nav />
      <Wrapper>
        <Title text="상품 목록" />
        <hr />
        <ProductWrapper>
          {productList &&
            productList.map((product: Product) => {
              return <ProductItem product={product} key={product.id} />;
            })}
        </ProductWrapper>
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  margin: 5rem auto;
  width: ${({ theme }) => theme.basicWidth};
  height: 100%;
  /* background-color: ${({ theme }) => theme.color.red}; */

  hr {
    height: 2px;
    border-width: 0;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const ProductWrapper = styled.div`
  ${flexSet('space-between', 'center')};
  padding: 3rem 0 3rem 0;
  flex-wrap: wrap;
`;
