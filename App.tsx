import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { 
  Main, 
  Login,
  Register
} from "./screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
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
  );
}

