import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const getPrediction = async (ticker, company) => {
  const res = await axios.get(`${BASE_URL}/predict`, {
    params: { ticker, company }
  });

  console.log("Axios response:", res);
  console.log("Axios data:", res.data);

  return res.data;
};

export const getHistory = async (ticker, days = 90) => {
  const res = await axios.get(`${BASE_URL}/history`, {
    params: { ticker, days }
  });

  console.log("Axios response:", res);
  console.log("Axios data:", res.data);

  return res.data;
};