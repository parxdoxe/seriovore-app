import { View, Text } from "react-native";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setData(movies.results);
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return [data];
};

export default useFetch;
