import { useState } from "react";

import "../scss/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import QuotestList from "./QuotesList";

import DataFriends from "../data/friends.json";

function App() {
  const [friends] = useState(DataFriends);
  const [filterQuote, setFilterQuote] = useState("");

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const filteredQuote = friends.filter((friend) =>
    friend.quote.includes(filterQuote)
  );

  return (
    <>
      <div className="app">
        <Header />
        <main className="main__friends">
          <Filters handleFilterQuote={handleFilterQuote} />
          <QuotestList friends={filteredQuote} />
        </main>
      </div>
    </>
  );
}

export default App;
