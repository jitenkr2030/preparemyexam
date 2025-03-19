import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import ExamStack from './ExamStack';
import StudyMaterialStack from './StudyMaterialStack';
import AIStudyPlanScreen from '../screens/AIStudyPlanScreen';
import AIGeneratedQuestionScreen from '../screens/AIGeneratedQuestionScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import InAppPurchaseScreen from '../screens/InAppPurchaseScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import PaymentConfirmationScreen from '../screens/PaymentConfirmationScreen';
import OfflineDashboard from '../screens/OfflineDashboard';
import OfflineTestAttemptScreen from '../screens/OfflineTestAttemptScreen';
import PracticeQuestionScreen from '../screens/PracticeDashboard';
import MockTestScreen from '../screens/MockTestScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import TestResultsScreen from '../screens/TestResultsScreen';
import DiscussionThreadScreen from '../screens/DiscussionThreadScreen';
import MentorMatchScreen from '../screens/MentorMatchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import HelpSupport from '../screens/HelpSupport';
import FeedbackRatingScreen from '../screens/FeedbackRatingScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';

const Stack = createNativeStackNavigator();

const MainAppStack = () => (
  <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="ExamStack" component={ExamStack} />
    <Stack.Screen name="StudyMaterialStack" component={StudyMaterialStack} />
    <Stack.Screen name="AIStudyPlan" component={AIStudyPlanScreen} options={{ title: 'AI Study Plan' }} />
    <Stack.Screen name="AIQuestions" component={AIGeneratedQuestionScreen} options={{ title: 'AI Questions' }} />
    <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    <Stack.Screen name="InAppPurchase" component={InAppPurchaseScreen} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
    <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
    <Stack.Screen name="OfflineDashboard" component={OfflineDashboard} />
    <Stack.Screen name="OfflineTest" component={OfflineTestAttemptScreen} />
    <Stack.Screen name="PracticeQuestions" component={PracticeDashboard} />
    <Stack.Screen name="MockTest" component={MockTestScreen} />
    <Stack.Screen name="Achievements" component={AchievementsScreen} />
    <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    <Stack.Screen name="TestResults" component={TestResultsScreen} />
    <Stack.Screen name="Discussions" component={DiscussionThreadScreen} />
    <Stack.Screen name="MentorMatch" component={MentorMatchScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
    <Stack.Screen name="HelpSupport" component={HelpSupport} />
    <Stack.Screen name="FeedbackRating" component={FeedbackRatingScreen} />
    <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
  </Stack.Navigator>
);

export default MainAppStack;