import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Updates from 'expo-updates';

import Routes from "./src/routes/routes";

export default function App() {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);

  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#FFF" style="auto" />
    </>
  );
}
