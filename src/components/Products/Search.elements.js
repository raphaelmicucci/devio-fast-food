import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100vw;
  min-height: 10vh;
  padding: 1rem calc((100vw - 1300px) / 2);
  padding-top: 2rem;
  background: #fff;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 50vw;
  height: 50px;
  background: #eaf8ea;
  border: 1px solid #4d914f;
  border-radius: 5px;
  color: #000;
  font-size: 20px;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 960px) {
    width: 80vw;
  }
`;
