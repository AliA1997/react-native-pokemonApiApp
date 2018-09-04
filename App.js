/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
//first import createStackNavigator from react-navigation
//then import StackNavigator for creatign nested routes
import { createStackNavigator } from 'react-navigation';
//Import your screens 
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';
import Home from './components/Home';


//Define your routes using createStackNavigator, which will be a object full of options. 
const RootStack = createStackNavigator({
    //Define your screens.
    Home: { screen: Home },
    PokeList: { screen: PokeList },
    Pokemon: {screen: Pokemon }
  },
  {
    initialRouteName:  'Home'
  })


//Export default the stateless component 
const App = () => {
  return <RootStack />
}

export default App;

