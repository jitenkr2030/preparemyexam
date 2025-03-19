import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudyMaterialDashboard from '../screens/StudyMaterialDashboard';
import MaterialDetailScreen from '../screens/MaterialDetailScreen';
import UploadMaterialScreen from '../screens/UploadMaterialScreen';

const Stack = createNativeStackNavigator();

const StudyMaterialStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MaterialDashboard" component={StudyMaterialDashboard} options={{ title: 'Materials' }} />
    <Stack.Screen name="MaterialDetail" component={MaterialDetailScreen} options={{ title: 'Material Details' }} />
    <Stack.Screen name="UploadMaterial" component={UploadMaterialScreen} options={{ title: 'Upload Material' }} />
  </Stack.Navigator>
);

export default StudyMaterialStack;