

import React, { useState, useEffect } from "react";
import './Search.css'
import url from "../url";
import Header from "./Header"
function Search(props) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]); // Added state for results

  useEffect(() => {
    const fetchData = (value) => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const filteredResults = json.filter((vocab) =>
            vocab.vocab.toLowerCase().includes(value.toLowerCase())
          );
          setResults(filteredResults);
        });
    };

    fetchData(input);
  }, [input]);

  
  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="all-search">
      <Header />
      <div className="search-body">
        <div className="search-container">
          <h3 className="search-title">Search</h3>
          <input className="input-search"
            placeholder="Type to search"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        {results.map((result) => (
          <div className="search-container" style={{ display: "flex" }} key={result.id}>
            <h3 className="search-title">
              Vocabulary
            </h3>
            <h2 className="result-search">{result.vocab}</h2>
            <h3 className="search-title">Translation:</h3>
            <h2 className="result-search"> {result.translation}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
