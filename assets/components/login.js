import React, { useState, useContext } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './UserContext'; // <-- ADDED
import styles from '../styles/loginStyles';

export function Login({ navigation }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { saveName } = useContext(UserContext); // <-- ADDED

  const handleLogin = async () => {
    if (!username.trim()) {
      Alert.alert("Enter name", "E.g. Mary, Rose");
      return;
    }

    // SAVE LIKE PLAY STORE - Mary stays Mary
    // Save to BOTH places
    await AsyncStorage.setItem('userName', username.trim());
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await saveName(username.trim()); // <-- THIS FIXES AC BUG! Updates context immediately

    navigation.replace('Homepage');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={require('../images/daily-health-app.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>HEALTHY HABITS</Text>
          <Text style={styles.welcome}>Welcome back • Akwaaba bio ❤️</Text>
          <Text style={styles.twiHint}>Enter same name you used before</Text>
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
          <Text style={styles.label}>Password • Password</Text>
          <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor={'#aaa'} value={password} onChangeText={setPassword} secureTextEntry={true} />

          <TouchableOpacity style={styles.customBotton} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.textt}>Login →</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[styles.signText, styles.signupLink]}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>Mary logs in → Shows "Maakye, Mary!"</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}