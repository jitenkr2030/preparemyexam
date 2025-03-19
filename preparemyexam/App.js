import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import WelcomeScreen from './screens/WelcomeScreen'; // Ensure this file exists
import SignUpScreen from './screens/SignUpScreen'; // Ensure this file exists
import LoginScreen from './screens/LoginScreen'; // Ensure this file exists
import ProfileSetupScreen from './screens/ProfileSetupScreen'; // Ensure this file exists
import HomeDashboard from './screens/HomeDashboard'; // Ensure this file exists
import ExamDetailsScreen from './screens/ExamDetailsScreen'; // Ensure this file exists
import StudyMaterialDashboard from './screens/StudyMaterialDashboard'; // Ensure this file exists
import PracticeDashboard from './screens/PracticeDashboard'; // Ensure this file exists
import MockTestDashboard from './screens/MockTestScreen'; // Ensure this file exists
import ProgressDashboard from './screens/ProgressDashboardScreen'; // Ensure this file exists
import CommunityDashboard from './screens/CommunityDashboard'; // Ensure this file exists
import SubscriptionScreen from './screens/SubscriptionScreen'; // Ensure this file exists
import NotificationsScreen from './screens/NotificationsScreen'; // Ensure this file exists
import OfflineDashboard from './screens/OfflineDashboard'; // Ensure this file exists

// Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeDashboard} />
      <Tab.Screen name="Study Material" component={StudyMaterialDashboard} />
      <Tab.Screen name="Practice" component={PracticeDashboard} />
      <Tab.Screen name="Progress" component={ProgressDashboard} />
      <Tab.Screen name="Community" component={CommunityDashboard} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Onboarding Flow */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} options={{ title: 'Profile Setup' }} />

        {/* Main Flow */}
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />

        {/* Exam Discovery Flow */}
        <Stack.Screen name="ExamDetalis" component={ExamDetailsScreen} options={{ title: 'Exam Details' }} />

        {/* Study Material Flow */}
        <Stack.Screen name="StudyMaterial" component={StudyMaterialDashboard} options={{ title: 'Study Material' }} />

        {/* Practice & Assessment Flow */}
        <Stack.Screen name="MockTest" component={MockTestDashboard} options={{ title: 'Mock Tests' }} />

        {/* Monetization Flow */}
        <Stack.Screen name="Subscription" component={SubscriptionScreen} options={{ title: 'Subscription' }} />

        {/* Notifications Flow */}
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />

        {/* Offline Access Flow */}
        <Stack.Screen name="Offline" component={OfflineDashboard} options={{ title: 'Offline Access' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}