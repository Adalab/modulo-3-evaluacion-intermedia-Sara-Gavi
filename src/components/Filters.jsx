function Filters({ handleFilterQuote }) {
  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  const handleCharacterSelect = (event) => {
    const selectedCharacter = event.currentTarget.value;
    handleFilterQuote(selectedCharacter === "all" ? "" : selectedCharacter);
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

export default Filters;
