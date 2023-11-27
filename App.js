import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import Detail from './components/Detail';
import SplashScreen from './components/SplashScreen';
import { store } from './redux/store'
import  { Provider } from 'react-redux';
import Register from './components/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}

      <Register></Register>
    </Provider>
  );
}
