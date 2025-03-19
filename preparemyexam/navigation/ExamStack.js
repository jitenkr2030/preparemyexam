import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExamDashboardScreen from '../screens/ExamDashboardScreen';
import ExamDetailsScreen from '../screens/ExamDetailsScreen';
import ExamSearchFilter from '../screens/ExamSearchFilter';

const Stack = createNativeStackNavigator();

const ExamStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ExamDashboard" component={ExamDashboardScreen} options={{ title: 'Exams' }} />
    <Stack.Screen name="ExamDetails" component={ExamDetailsScreen} options={{ title: 'Exam Details' }} />
    <Stack.Screen name="ExamSearch" component={ExamSearchFilter} options={{ title: 'Search Exams' }} />
  </Stack.Navigator>
);

export default ExamStack;