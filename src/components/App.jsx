import { useState } from "react";

import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import QuotestList from "./QuotesList";

import DataFriends from "../data/friends.json";

function App() {
  const [friends] = useState(DataFriends);
  const [filterQuote, setFilterQuote] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("all");

  // Función para manejar el filtro por frase
  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue.toLowerCase());
  };

  // Función para manejar la selección de personaje
  const handleCharacterSelect = (event) => {
    const selectedCharacter = event.currentTarget.value;
    setSelectedCharacter(selectedCharacter.toLowerCase());
  };

  // Aplicamos los filtros a la lista de Friends
  const filteredQuote = friends.filter((friend) => {
    // Comprobamos si el personaje coincide con el seleccionado o "todos"
    const matchesCharacter =
      selectedCharacter === "all" ||
      friend.character.toLowerCase() === selectedCharacter;
    // comprobamos si la frase coincide con el filtro o si está vacío
    const matchesQuote =
      filterQuote === "" ||
      friend.quote.toLowerCase().includes(filterQuote) ||
      friend.character.toLowerCase().includes(filterQuote);
    // Retorna true si se cumplen ambas condiciones, si el personaje pasa los filtros
    return matchesCharacter && matchesQuote;
  });

  return (
    <>
      <div className="app">
        <Header />
        <main className="main__friends">
          <Filters
            handleFilterQuote={handleFilterQuote}
            handleCharacterSelect={handleCharacterSelect}
          />
          <QuotestList friends={filteredQuote} />
        </main>
      </div>
    </>
  );
}

export default App;
