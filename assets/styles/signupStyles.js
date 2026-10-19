import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2', // premium grey like homepage now
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  logo: {
    width: 90, // smaller - looks real, not demo
    height: 90,
  },
  appName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#D90429',
    marginTop: 10,
    letterSpacing: 1,
  },
  welcome: {
    fontSize: 13,
    color: '#555',
    marginTop: 6,
    fontWeight: '600',
  },
  twiHint: {
    fontSize: 11,
    color: '#999',
    marginTop: 3,
    fontStyle: 'italic',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
    color: '#888',
    marginLeft: 4,
    marginBottom: 6,
    marginTop: 16,
    letterSpacing: 0.5,
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#eee',
    fontSize: 15,
    color: '#111',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  customBotton: {
    height: 54,
    marginTop: 28,
    backgroundColor: '#111', // black = premium, not bright red
    width: '100%',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 22,
    alignSelf: 'center',
  },
  signText: {
    color: '#777',
    fontSize: 13,
  },
  signupLink: {
    fontWeight: '800',
    color: '#111',
    marginLeft: 4,
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    color: '#bbb',
    marginTop: 20,
  }
});

export default styles;