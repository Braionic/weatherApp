import React, { useEffect, useState } from "react";

export default function useFetch(Api: RequestInfo) {
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState<any>("")
  const fetchData = async (api: RequestInfo) => {
    try {
      setIsloading(true);
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('Error fetching Data or invalid value').message;
      }
      const result = await response.json();
      if (result) {
        setData(result);
      }
    } catch (error) {
      if (error) {
        setError(error);
      }
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData(Api);
  }, [Api]);
  return { data, isLoading, error, fetchData };
}
