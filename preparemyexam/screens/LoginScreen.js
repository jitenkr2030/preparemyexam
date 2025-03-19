import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authAPI } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await authAPI.login({ email, password });
      const { token, user } = response.data;
      
      // Store the token
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      
      Alert.alert('Login Successful', `Welcome, ${user.fullName}!`);
      navigation.navigate('Main');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during login');
      Alert.alert('Login Failed', error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the Signup Screen
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>
        Log in to continue your journey with PrepareMyExam.
      </Text>

      {/* Login Form */}
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text style={styles.toggleText}>
              {passwordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Social Login Options */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or log in with</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Call-to-Action Section */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footerText}>
        By logging in, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 40 },
  subtitle: { fontSize: 16, textAlign: 'center', marginVertical: 10, color: '#555' },
  form: { marginVertical: 20 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: { flex: 1, height: 40 },
  toggleButton: { padding: 5 },
  toggleText: { color: '#007bff', fontWeight: 'bold' },
  forgotPassword: { alignItems: 'flex-end', marginVertical: 5 },
  forgotText: { fontSize: 14, color: '#007bff' },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: { flex: 1, height: 1, backgroundColor: '#ddd' },
  dividerText: { marginHorizontal: 10, color: '#888' },
  socialButtons: { marginBottom: 20 },
  googleButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 10,
    borderRadius: 8,
  },
  socialText: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  loginText: { textAlign: 'center', color: '#fff', fontWeight: 'bold' },
  signUpText: { textAlign: 'center', marginTop: 10, fontSize: 14, color: '#555' },
  signUpLink: { color: '#007bff', fontWeight: 'bold' },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#aaa',
    marginTop: 20,
  },
  linkText: { color: '#007bff', textDecorationLine: 'underline' },
});

export default LoginScreen;