import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF0F5' },
        headerTintColor: '#C2185B',
        headerTitleStyle: { fontFamily: 'serif', fontWeight: 'bold' },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 16 }}
            >
              <Text style={{ fontSize: 22, color: '#C2185B' }}>☰</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
}

function AboutStackNavigator({ navigation }) {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF0F5' },
        headerTintColor: '#C2185B',
        headerTitleStyle: { fontFamily: 'serif', fontWeight: 'bold' },
      }}
    >
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 16 }}
            >
              <Text style={{ fontSize: 22, color: '#C2185B' }}>☰</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </AboutStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          drawerStyle: { backgroundColor: '#FFF0F5' },
          drawerActiveTintColor: '#D81B60',
          drawerInactiveTintColor: '#4A0E2E',
          drawerLabelStyle: { fontFamily: 'serif', fontWeight: 'bold', fontSize: 15 },
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="About" component={AboutStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
