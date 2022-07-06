import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  padding-inline: 50px;

  @media screen and (max-width: 991px) {
    padding-inline: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#125c13" : "#FFF")};
  white-space: nowrap;
  padding: ${(big) => (big ? "12px 24px" : "10px 20px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "60px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#FFF" : "#125c13")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
