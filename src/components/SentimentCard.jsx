function SentimentCard({ data }) {
  const score = data.sentiment_score;
  const pct = Math.round(((score + 1) / 2) * 100); // map -1..1 to 0..100

  return (
    <div className="card sentiment-card">
      <div className="card-label">News Sentiment</div>
      <div className={`sentiment-label ${data.sentiment_label.toLowerCase()}`}>
        {data.sentiment_label}
      </div>
      <div className="sentiment-score">Score: {score.toFixed(3)}</div>
      <div className="sentiment-bar-bg">
        <div className="sentiment-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="sentiment-hint">
        -1.0 (very negative) → +1.0 (very positive)
      </div>
    </div>
  );
}
export default SentimentCard;