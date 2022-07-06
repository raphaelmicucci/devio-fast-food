import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100vw;
  min-height: 60vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #150f15;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const CategoryCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;

  &:hover {
    cursor: pointer;
  }
`;

export const CategoryImg = styled.img`
  height: 200px;
  min-height: 200px;
  max-width: 100%;
  box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export const CategoryHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

export const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: left;
`;

export const CategoryTitle = styled.h2`
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
`;

export const CategoryButton = styled.h2`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e3150e;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in;
    cursor: pointer;
    color: #000;
  }
`;
