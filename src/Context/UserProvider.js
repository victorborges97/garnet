import React, { useState, useContext, createContext, useEffect } from "react";
import { AsyncStorage } from "react-native";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [User, setUser] = useState([]);
  const [UserToken, setUserToken] = useState("");

  async function signOut() {
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("user");
    setUser([]);
  }

  return (
    <UserContext.Provider
      value={{
        User,
        setUser,
        signOut,
        UserToken,
        setUserToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used within a Context.Provider");
  const { User, setUser, signOut, setUserToken, UserToken } = context;
  return { User, setUser, signOut, setUserToken, UserToken };
}
