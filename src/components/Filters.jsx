function Filters({ handleFilterQuote }) {
  const handleInput = (event) => {
    handleFilterQuote(event.currentTarget.value);
  };

  return (
    <>
      <label>
        Filtrar por frase:
        <input type="text" onInput={handleInput} />
      </label>
    </>
  );
}

export default Filters;
