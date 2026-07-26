function PredictionCard({ data }) {
  const isUp = data.prediction.includes("UP");
  return (
    <div className={`card prediction-card ${isUp ? 'up' : 'down'}`}>
      <div className="card-label">Next Day Prediction</div>
      <div className="prediction-arrow">{isUp ? "↑" : "↓"}</div>
      <div className="prediction-text">{data.prediction}</div>
      <div className="confidence">Confidence: {data.confidence}</div>
      <div className="price">Current Price: ₹{data.current_price}</div>
      <div className="date">As of {data.as_of_date}</div>
    </div>
  );
}
export default PredictionCard;