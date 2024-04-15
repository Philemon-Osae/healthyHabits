import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import styles from '../styles/splashStyles';

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../images/daily-health-app.png')} style={styles.logo} />
      </View>
      <Text style={styles.textColor}>HEALTHY HABITS</Text>
      <StatusBar style="auto" />
    </View>
  );
}
