import React, {useState, useEffect} from 'react';
import  {Image, View, Text, TextInput, TouchableOpacity} from 'react-native'


import styles from '../styles/signupStyles'

export default function SignUp({navigation}) {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
    
      <Image source={require('../images/pregg.png')} style={styles.logo} />
      </View> 
      <View style={styles.inputContainer}>
   
    <TextInput 
              style={[styles.input, {color: 'white'}]}
              placeholder="Create your username"
              placeholderTextColor={'white'}
              value={username}
              onChangeText={setUsername}
    />

      <TextInput
              style={[styles.input, {color: 'white'}]}
              placeholder="Enter your password"
              placeholderTextColor={'white'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          
        
          <TouchableOpacity
              style={styles.customBotton}
              onPress={() => navigation.navigate('Homepage')}
            >
              <Text style={styles.textt}>Sign Up</Text>
          </TouchableOpacity>

       <View style={styles.signupContainer}>
              <Text style={styles.signText}>Already have an account? </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                <Text style={[styles.signText, styles.signupLink]}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>

    
      </View>
      
       </View>
  );
}