import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);
  const [id, setId] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        id,
        setId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, id, setId } = context;
  return { signed, setSigned, name, setName, id, setId };
}
