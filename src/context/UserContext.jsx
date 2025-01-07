import * as React from "react";

const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = React.useState({});
  React.useEffect(() => {
    setUsuario({ name: "Kevin Benites", registered: "01/Enero/2025" });
  }, []);
  return (
    <UserContext.Provider value={usuario}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
