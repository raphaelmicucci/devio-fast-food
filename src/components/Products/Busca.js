import { BuscaContainer, BuscaInput } from "./Busca.elements";

const Busca = ({ busca, setBusca }) => {
  return (
    <BuscaContainer>
      <BuscaInput
        placeholder="Digite aqui sua busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </BuscaContainer>
  );
};

export default Busca;
