import * as React from "react";
import axios from "axios";
import "./App.css";

function App() {
  // Poniendole un array vacio ([]) evita que se rompa la aplicacion ya que
  // ya no seria undefined como en el caso de que este vacio ()

  // Pero si se utiliza un LOADER como en el caso del if(!criptos)... se deja
  // el useState() y ya no con el array vacio
  const [criptos, setCriptos] = React.useState();
  const API_URL = import.meta.env.VITE_API_URL;

  React.useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La peticion fallo");
      });
  }, []);

  if (!criptos) return <span>Cargando...</span>;

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({ id, name, priceUsd }) => (
          <li key={id}>
            Nombre: {name} Precio: {Math.floor(priceUsd)}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
