import React, {useState} from 'react';
import  {Image, View, Text, TextInput, TouchableOpacity} from 'react-native'

import styles from '../styles/loginStyles';

export function Login({navigation}) {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
    
      <Image source={require('../images/pregg.png')} style={styles.logo} />
      </View> 
      <View style={styles.inputContainer}>
   
    <TextInput 
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your username"
              placeholderTextColor={'black'}
              value={username}
              onChangeText={setUsername}
    />

      <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Enter your password"
              placeholderTextColor={'black'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

          <TouchableOpacity
              style={styles.customBotton}
              onPress={() => navigation.navigate('Homepage')}
            >
              <Text style={styles.textt}>Login</Text>
          </TouchableOpacity>

       <View style={styles.signupContainer}>
              <Text style={styles.signText}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Signup')}
                >
                <Text style={[styles.signText, styles.signupLink]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  )  
}
