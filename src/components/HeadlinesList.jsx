function HeadlinesList({ headlines, sentiment }) {
  const color = sentiment > 0.05 ? '#22c55e' 
              : sentiment < -0.05 ? '#ef4444' 
              : '#f59e0b';
  return (
    <div className="card headlines-card">
      <div className="card-label">Latest News Headlines</div>
      <ul className="headlines">
        {headlines.map((h, i) => (
          <li key={i} style={{ borderLeft: `3px solid ${color}` }}>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HeadlinesList;