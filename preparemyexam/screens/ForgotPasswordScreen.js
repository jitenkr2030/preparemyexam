import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function ForgotPasswordScreen() {
  const [resetOption, setResetOption] = useState('email'); // 'email' or 'otp'
  const [inputValue, setInputValue] = useState('');

  const handleReset = () => {
    if (!inputValue) {
      Alert.alert('Error', 'Please provide the required information.');
      return;
    }
    Alert.alert('Success', resetOption === 'email' ? 'Reset link sent to your email!' : 'OTP sent to your mobile!');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Don’t worry! We’ll help you reset your password.</Text>

      {/* Reset Options */}
      <Text style={styles.instruction}>Please choose how you’d like to reset your password:</Text>
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => {
            setResetOption(value);
            setInputValue('');
          }}
          value={resetOption}
        >
          <View style={styles.radioOption}>
            <RadioButton value="email" />
            <View>
              <Text style={styles.radioLabel}>Reset via Email</Text>
              <Text style={styles.radioDescription}>
                We’ll send a password reset link to your registered email address.
              </Text>
            </View>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="otp" />
            <View>
              <Text style={styles.radioLabel}>Reset via OTP on Mobile</Text>
              <Text style={styles.radioDescription}>
                We’ll send a one-time password (OTP) to your registered mobile number.
              </Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      {/* Input Section */}
      <TextInput
        style={styles.input}
        placeholder={resetOption === 'email' ? 'Enter your registered email address' : 'Enter your registered mobile number'}
        keyboardType={resetOption === 'email' ? 'email-address' : 'phone-pad'}
        value={inputValue}
        onChangeText={setInputValue}
      />

      {/* CTA Section */}
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>
          {resetOption === 'email' ? 'Send Reset Link' : 'Send OTP'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Navigate', 'Go to Login Screen')}>
        <Text style={styles.secondaryText}>Remember your password? Log In.</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <TouchableOpacity onPress={() => Alert.alert('Support', 'Redirect to Support')}>
        <Text style={styles.footerText}>Need help? Contact Support.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  radioDescription: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4caf50',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
  },
});
