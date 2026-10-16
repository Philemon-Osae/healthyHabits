import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import styles from '../styles/loginStyles';

export function Login({ navigation }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.logoContainer}>
          <Image source={require('../images/pregg.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>MamaCare GH</Text>
          <Text style={styles.welcome}>Welcome back, Mama ❤️</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor={'#aaa'}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={'#aaa'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customBotton} onPress={() => navigation.navigate('Homepage')} activeOpacity={0.8}>
            <Text style={styles.textt}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[styles.signText, styles.signupLink]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}