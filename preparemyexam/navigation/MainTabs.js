import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeDashboard from '../screens/HomeDashboard';
import PracticeDashboard from '../screens/PracticeDashboard';
import ProgressDashboardScreen from '../screens/ProgressDashboardScreen';
import CommunityDashboard from '../screens/CommunityDashboard';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons'; // Example icon library

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Practice') {
          iconName = focused ? 'barbell' : 'barbell-outline';
        } else if (route.name === 'Progress') {
          iconName = focused ? 'stats-chart' : 'stats-chart-outline';
        } else if (route.name === 'Community') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeDashboard} />
    <Tab.Screen name="Practice" component={PracticeDashboard} />
    <Tab.Screen name="Progress" component={ProgressDashboardScreen} />
    <Tab.Screen name="Community" component={CommunityDashboard} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default MainTabs;