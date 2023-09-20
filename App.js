import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Importing Custom screens for GET, POST, PUT, DELETE methods
import GetScreen from './GetScreen';
import PostScreen from './PostScreen';
import PutScreen from './PutScreen';
import DeleteScreen from './DeleteScreen';

// Creating a Tab Navigator for the HTTP methods
const TabNavigator = createBottomTabNavigator(
  {
    GET: GetScreen,
    POST: PostScreen,
    PUT: PutScreen,
    DELETE: DeleteScreen,
  },
  {
    tabBarOptions: 
    {
      activeTintColor: 'blue', // Changing colour for the Active Tab
      labelStyle: 
      {
        fontSize: 16,
      },
    },
  }
);

// Creating a Drawer Navigator for other pages (e.g., Home and About)
const DrawerNavigator = createDrawerNavigator(
  {
    Home: 
    {
      screen: () => <Text>Home Screen</Text>, // Replacing with Home component
    },
    About: 
    {
      screen: () => <Text>About Screen</Text>, // Replacing with About component
    },
    Methods: TabNavigator, // Including the TabNavigator as one of the Drawer options
  },
  {
    initialRouteName: 'Home', // Setting the initial page when the app loads
  }
);

// Creating an App Container
const AppContainer = createAppContainer(DrawerNavigator);

export default function App() 
{
  return <AppContainer/>;
}