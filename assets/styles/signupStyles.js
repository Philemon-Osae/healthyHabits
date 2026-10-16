import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D90429',
    marginTop: 5,
  },
  welcome: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    height: 52,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    fontSize: 15,
    color: '#222',
    elevation: 1,
  },
  customBotton: {
    height: 52,
    marginTop: 25,
    backgroundColor: '#FF003D',
    width: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
  },
  signText: {
    color: '#555',
    fontSize: 14,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#FF003D',
    marginLeft: 5,
  },
});

export default styles;