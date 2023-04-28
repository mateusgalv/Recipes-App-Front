import { useEffect, useState } from 'react';

interface IApiResponse {

}

export const useFetch = (endpoint: string): any => {
  const [data, setData] = useState<IApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [endpoint]);

  return data;
};