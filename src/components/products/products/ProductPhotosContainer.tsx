/**
 * Must show only from the second photo onwards
 * if the length of images is less than 2
 * don´t show anything
 */
import React from 'react'
import styled from 'styled-components';
import { ProductComponentSimple } from './ProductComponentSimple';

const Wrapper = styled.div`
  display: flex;
`

interface ProductPhotosContainerProps {
  images: string[] | []
}

export const ProductPhotosContainer: React.FC<ProductPhotosContainerProps> = ({ images }) => {
  return (
    <Wrapper>
      <ProductComponentSimple
        data={null}
        key={null}
      />
    </Wrapper>
  );
}