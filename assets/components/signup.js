import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import styles from '../styles/signupStyles'

export default function SignUp({ navigation }) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.logoContainer}>
          <Image source={require('../images/pregg.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>Join MamaCare GH</Text>
          <Text style={styles.welcome}>Create account for you & baby 🇬🇭</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Create your username"
            placeholderTextColor={'#aaa'}
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Email (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="mama@email.com"
            placeholderTextColor={'#aaa'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Create password (6+ chars)"
            placeholderTextColor={'#aaa'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.customBotton} onPress={() => navigation.navigate('Homepage')} activeOpacity={0.8}>
            <Text style={styles.textt}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.signText, styles.signupLink]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}