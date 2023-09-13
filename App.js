import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Import your custom screens for GET, POST, PUT, DELETE methods
import GetScreen from './GetScreen';
import PostScreen from './PostScreen';
import PutScreen from './PutScreen';
import DeleteScreen from './DeleteScreen';

// Create a tab navigator for HTTP methods
const TabNavigator = createBottomTabNavigator(
  {
    GET: GetScreen,
    POST: PostScreen,
    PUT: PutScreen,
    DELETE: DeleteScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue', // Change the colour for the active tab
      labelStyle: {
        fontSize: 16,
      },
    },
  }
);

// Create a drawer navigator for other pages (e.g., Home and About)
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: () => <Text>Home Screen</Text>, // Replace with your Home component
    },
    About: {
      screen: () => <Text>About Screen</Text>, // Replace with your About component
    },
    Methods: TabNavigator, // Include the TabNavigator as one of the drawer options
  },
  {
    initialRouteName: 'Home', // Set the initial page when the app loads
  }
);

// Create an app container
const AppContainer = createAppContainer(DrawerNavigator);

export default function App() 
{
  return <AppContainer/>;
}