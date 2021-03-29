import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


import HomeScreen from "./../screens/HomeScreen";
import FeedScreen from "./../screens/FeedScreen";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white", textAlign: "center", flex: 1 },
  headerTintColor: "white",
};
const HomeStack = createStackNavigator();
const FeedStack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={globalScreenOptions}
  >
    <HomeStack.Screen
      name="Home"
      options={{ title: "S3-Section" }}
      component={HomeScreen}
    />
  </HomeStack.Navigator>
);

const FeedStackScreen = () => (
  <FeedStack.Navigator
    initialRouteName="Feed"
    screenOptions={globalScreenOptions}
  >
    <FeedStack.Screen
      name="Feed"
      options={{ title: "S3-Section" }}
      component={FeedScreen}
    />
  </FeedStack.Navigator>
);



const ButtomNavigation = () => {
  return (
    <Tabs.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
    {/*<Stack.Screen  name="LoginScreen" component={LoginScreen} />
    <Stack.Screen  name="register" component={RegisterScreen} />*/}

    <Tabs.Screen
      name="Home"
      options={{ title: "Home" }}
      component={HomeStackScreen}
    />
    <Tabs.Screen name="Task" component={FeedStackScreen} />
  </Tabs.Navigator>
  );
};

export default ButtomNavigation;

const styles = StyleSheet.create({});
