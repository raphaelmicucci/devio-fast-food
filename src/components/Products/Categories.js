import React from "react";
import {
  CategoriesContainer,
  CategoryHeading,
  CategoryWrapper,
  CategoryCard,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
} from "./Categories.elements";

const Categories = ({ search, heading, data }) => {
  return (
    <CategoriesContainer
      style={search === "" ? { display: "block" } : { display: "none" }}
    >
      <CategoryHeading>{heading}</CategoryHeading>
      <CategoryWrapper>
        {data.map((category) => {
          return (
            <CategoryCard key={category.id}>
              <CategoryImg src={category.img} alt={category.alt} />
              <CategoryInfo>
                <CategoryTitle>{category.name}</CategoryTitle>
              </CategoryInfo>
            </CategoryCard>
          );
        })}
      </CategoryWrapper>
    </CategoriesContainer>
  );
};

export default Categories;
