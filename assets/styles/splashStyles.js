import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D90429',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
  appName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    letterSpacing: 1,
  },
  tagline: {
    color: '#FFD1DC',
    fontSize: 14,
    marginTop: 8,
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
});

export default styles;