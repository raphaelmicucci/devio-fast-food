import React from "react";
import {
  ProductsContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./Products.elements";

const Products = ({ heading, data, busca }) => {
  const produtosFiltrados = data.filter((produto) =>
    produto.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {produtosFiltrados.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
