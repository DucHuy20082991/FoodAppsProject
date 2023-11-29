import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Detail from './components/Detail';
import SplashScreen from './components/SplashScreen';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Register from './components/Register';
import Login from './components/Login';
import Forgotpassword from './components/Forgotpassword';
import Seafood from './components/Seafood';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Drink from './components/Drink';
import Profile from './components/Profile';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Forgotpassword"
        component={Forgotpassword}
        options={{
          headerShown: false,
        }}
      />
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
        name="Seafood"
        component={Seafood}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
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
      <Stack.Screen
        name="Drink"
        component={Drink}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./assets/images/piz.png')}></Image>
          ),
        }}
      />
      <Tab.Screen
        name="Seafood"
        component={Seafood}
        options={{
          tabBarLabel: 'Seafood',
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./assets/images/seafood.png')}></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Drink"
        component={Drink}
        options={{
          tabBarLabel: 'Drink',
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./assets/images/drink.png')}></Image>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 25, width: 25}}
              source={require('./assets/images/profile.png')}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator></BottomTabNavigator>
      </NavigationContainer>
    </Provider>
  );
}
