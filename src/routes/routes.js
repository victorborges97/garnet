import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserProvider from "../Context/UserProvider";

const Stack = createStackNavigator();

//Rota Login
import Login from "../Login";

//Rotas ADM
import AdmStack from "./AdmStack";


function Routes() {

  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator headerMode={"none"} initialRouteName={"Login"}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTransparent: true, headerTitle: null, headerLeft: null }}
          />
          <Stack.Screen name={"AdmStack"} component={AdmStack} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}

export default Routes;
