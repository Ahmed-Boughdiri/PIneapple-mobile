import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { 
  Main, 
  Login,
  Register
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./global/Store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="login" 
            component={Login} 
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="register" 
            component={Register} 
            options={{ 
              headerShown: false 
            }} 
          />
          <Stack.Screen 
            name="main" 
            component={Main} 
            options={{ 
              headerShown: false 
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

