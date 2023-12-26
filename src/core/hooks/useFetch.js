import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (service, args = []) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await service(...args);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [service,...args]);

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;