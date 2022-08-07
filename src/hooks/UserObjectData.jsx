import React, { createContext, useState, useContext } from "react";

const UserObjectDataContext = createContext();

export default function UserObjectDataProvider({ children }) {
  const [userObjectData, setUserObjectData] = useState(null);

  return (
    <UserObjectDataContext.Provider
      value={{
        userObjectData,
        setUserObjectData,
      }}
    >
      {children}
    </UserObjectDataContext.Provider>
  );
}

export function useUserObjectData() {
  const context = useContext(UserObjectDataContext);

  const { userObjectData, setUserObjectData } = context;

  return { userObjectData, setUserObjectData };
}
