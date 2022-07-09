import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 3rem 2rem;
  background: #fff;
  color: #150f15;
`;
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
  padding-bottom: 2rem;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-height: 200px;
  max-width: 100%;
  box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: left;
`;

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  text-align: center;
`;

export const ProductPrice = styled.h2`
  font-size: 1.5rem;
`;

export const ProductButton = styled.h2`
  font-size: 1rem;
  padding: 0.5rem 3rem;
  border: none;
  border-radius: 4px;
  background: #125c13;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in;
    cursor: pointer;
    color: #000;
  }
`;
