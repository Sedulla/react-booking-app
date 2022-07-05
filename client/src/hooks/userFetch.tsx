import axios from 'axios';
import { useState, useEffect } from 'react';

// interface Props {}

export const useFetchData = (url: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err: any) {
        setError(err);
      }
      setLoading(false);
    };
  }, [url]);

  const reFetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetchData };
};
