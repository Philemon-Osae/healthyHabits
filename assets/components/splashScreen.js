import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styles from '../styles/splashStyles';

export function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login'); // replace so user can't go back to splash
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.View style={[styles.logoWrapper, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        <Image source={require('../images/pregg.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.appName}>MamaCare GH</Text>
        <Text style={styles.tagline}>Healthy Mama, Healthy Baby</Text>
      </Animated.View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>🇬🇭 Made for Ghanaian Mothers</Text>
      </View>
    </View>
  );
}