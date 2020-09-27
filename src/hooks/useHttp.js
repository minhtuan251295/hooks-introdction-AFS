import React from 'react';
import api from "../api";

const useHttp = (endpoint, dependencies) => {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  //useEffect
  React.useEffect(() => {
    setLoading(true);
    api.get(endpoint)
      .then((res) => {
        setLoading(false);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
  }, [dependencies, endpoint])

  return [isLoading, data];
};

export default useHttp;