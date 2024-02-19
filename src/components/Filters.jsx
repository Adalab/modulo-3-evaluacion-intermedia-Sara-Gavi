import PropTypes from "prop-types";

function Filters({ handleFilterQuote, handleCharacterSelect }) {
  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  return (
    <>
      <label>
        Filtrar por frase:
        <input type="text" onInput={handleInput} />
      </label>
      <label>
        Filtrar por personaje:
        <select onChange={handleCharacterSelect}>
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </label>
    </>
  );
}

Filters.propTypes = {
  handleFilterQuote: PropTypes.func.isRequired,
  handleCharacterSelect: PropTypes.func.isRequired,
};

export default Filters;
