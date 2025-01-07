import axios from "axios";
import * as React from "react";

const usePetition = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);

  React.useEffect(() => {
    setCargando(true);
    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false);
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
      });
  }, []);
  return [data, cargando];
};

export default usePetition;
