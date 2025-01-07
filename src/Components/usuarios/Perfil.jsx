import * as React from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () => {
  const usuario = React.useContext(UserContext);
  return (
    <div>
      <h1>Perfil de {usuario.name}</h1>
      <div>Usuario desde: {usuario.registered}</div>
    </div>
  );
};

export default Perfil;
