import { LineChart, Line, XAxis, YAxis, CartesianGrid, 
         Tooltip, ResponsiveContainer } from "recharts";

function PriceChart({ data }) {
  if (!data) return null;

  const chartData = data.dates.map((date, i) => ({
    date: date.slice(5),   // show MM-DD only
    price: data.close[i]
  }));

  return (
    <div className="card chart-card">
      <div className="card-label">Price History (90 days) — {data.ticker}</div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" tick={{ fontSize: 11 }} 
                 interval={14} stroke="#888" />
          <YAxis tick={{ fontSize: 11 }} stroke="#888"
                 domain={['auto', 'auto']} />
          <Tooltip 
            contentStyle={{ background: '#1a1a2e', border: '1px solid #444' }}
            formatter={(val) => [`₹${val}`, 'Price']}
          />
          <Line type="monotone" dataKey="price" 
                stroke="#4f8ef7" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default PriceChart;