import { useState } from "react";
import { getPrediction, getHistory } from "./api/stockApi";
import SearchBar from "./components/SearchBar";
import PredictionCard from "./components/PredictionCard";
import SentimentCard from "./components/SentimentCard";
import PriceChart from "./components/PriceChart";
import HeadlinesList from "./components/HeadlinesList";
import "./App.css";

const STOCKS = [
  { ticker: "RELIANCE.NS", company: "Reliance Industries" },
  { ticker: "TCS.NS",      company: "TCS" },
  { ticker: "INFY.NS",     company: "Infosys" },
  { ticker: "HDFCBANK.NS", company: "HDFC Bank" },
  { ticker: "^NSEI",       company: "NIFTY 50" },
];

function App() {
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory]       = useState(null);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);
  const [selected, setSelected]     = useState(null);

  const handleSearch = async (ticker, company) => {
  //alert("Button clicked!");

  setLoading(true);
  setError(null);
  setSelected(ticker);

  try {
    const predData = await getPrediction(ticker, company);
    const histData = await getHistory(ticker, 90);

    console.log(predData);
    console.log(histData);

    setPrediction(predData);
    setHistory(histData);
    console.log("Prediction state:", predData);
    console.log("History state:", histData);

    //alert("Prediction loaded!");

  } catch (err) {
    console.log(err);
    alert("ERROR");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="app">
      <header className="header">
        <h1>📈 StockSense</h1>
        <p>ML-powered stock direction prediction + news sentiment</p>
      </header>

      <SearchBar
        stocks={STOCKS}
        onSearch={handleSearch}
        selected={selected}
        loading={loading}
      />

      {loading && <div className="loading">Fetching live data & running model...</div>}
      {error   && <div className="error">{error}</div>}

      {prediction && !loading && (
        <div className="dashboard">
          <div className="top-row">
            <PredictionCard data={prediction} />
            <SentimentCard  data={prediction} />
          </div>
          <PriceChart data={history} />
          <HeadlinesList headlines={prediction.top_headlines} 
                         sentiment={prediction.sentiment_score} />
        </div>
      )}

      {!prediction && !loading && (
        <div className="placeholder">
          Select a stock above to see the ML prediction
        </div>
      )}

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "13px",
          marginTop: "30px",
        }}
      >
        ⚠️ StockSense is an ML research project for educational purposes only.
        It is not financial advice. Past market patterns do not guarantee future
        returns.
      </footer>
    </div>
  );
}

export default App;
