import { useState } from "react";

function SearchBar({ stocks, onSearch, selected, loading }) {
  const [ticker, setTicker] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    if (!ticker.trim()) return;

    onSearch(
      ticker.trim().toUpperCase(),
      company.trim() || ticker.trim().toUpperCase()
    );
  };

  return (
    <div className="search-container">

      <div className="manual-search">
        <input
          type="text"
          placeholder="Ticker (e.g. RELIANCE.NS)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      <h4>Quick Picks</h4>

      <div className="search-bar">
        {stocks.map((s) => (
          <button
            key={s.ticker}
            className={`stock-btn ${
              selected === s.ticker ? "active" : ""
            }`}
            onClick={() => onSearch(s.ticker, s.company)}
            disabled={loading}
          >
            {s.company}
          </button>
        ))}
      </div>

    </div>
  );
}

export default SearchBar;
