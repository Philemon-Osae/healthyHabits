import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/signupStyles'

export default function SignUp({ navigation }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    if (!username.trim()) {
      Alert.alert("Enter name", "E.g. Mary, Rose, Esi");
      return;
    }
    if (password.length < 4) {
      Alert.alert("Password short", "Use 4+ characters");
      return;
    }

    // SAVE LIKE PLAY STORE APP
    await AsyncStorage.setItem('userName', username.trim());
    if (email) await AsyncStorage.setItem('userEmail', email.trim());
    await AsyncStorage.setItem('isLoggedIn', 'true');

    // use replace so no flicker back to signup
    navigation.replace('Homepage');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.logoContainer}>
          <Image source={require('../images/daily-health-app.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>HEALTHY HABITS</Text>
          <Text style={styles.welcome}>Made for Ghana • Create account</Text>
          <Text style={styles.twiHint}>Yɛbɛhwɛ wo • We will take care of you</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Name • Din</Text>
          <TextInput 
            style={styles.input} 
            placeholder="E.g. Mary, Rose, Esi" 
            placeholderTextColor={'#aaa'} 
            value={username} 
            onChangeText={setUsername} 
            autoCapitalize="words"
          />

          <Text style={styles.label}>Email (optional)</Text>
          <TextInput style={styles.input} placeholder="you@email.com" placeholderTextColor={'#aaa'} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

          <Text style={styles.label}>Password • Password</Text>
          <TextInput style={styles.input} placeholder="Create password (4+ chars)" placeholderTextColor={'#aaa'} value={password} onChangeText={setPassword} secureTextEntry={true} />

          <TouchableOpacity style={styles.customBotton} onPress={handleSignUp} activeOpacity={0.8}>
            <Text style={styles.textt}>Create Account →</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.signText, styles.signupLink]}>Log In</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>If Mary signs up → Home shows "Maakye, Mary!"</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}