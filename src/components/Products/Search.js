import { SearchContainer, SearchInput } from "./Search.elements";

const Search = ({ search, setSearch }) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Digite aqui sua busca"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
