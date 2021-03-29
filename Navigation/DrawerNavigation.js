import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from "./../screens/HomeScreen";
import FeedScreen from "./../screens/FeedScreen";

const ProfileStack = createStackNavigator();


const DrawerNavigation = () => {
    return (
        <ProfileStack.Navigator
      initialRouteName="Home"
      screenOptions={globalScreenOptions}
    >
      <ProfileStack.Screen name="Home" component={HomeScreen} />
    </ProfileStack.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
