import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignItems: 'center',
  },

textColor: {
color: 'white',
fontSize: 20,
fontWeight: 'bold'
  },

  logoContainer: {
    top: 8,
    margin: 15,
    width: '100%',
    height: 400,

  },

  logo: {
    width: '100%',
    height: 450,
},

  input: {
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    borderRadius: 35,
    borderWidth: 2,
    paddingLeft: 20,
    borderColor: '#FF003D'
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },


  forgotContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
    alignSelf: 'center',
  },

  signupContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    alignSelf: 'center',
  },

  signText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  },

  rememberText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
    marginRight: 30
  },

  signupLink: {
    fontWeight: 'bold',
    color: '#FF003D',
    marginLeft: 5,
  },

  textt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  customBotton: {
    height: 50,
    marginTop: 80,
    backgroundColor: '#FF003D',
    width: '50%',
    padding: 10,
    borderRadius: 14,
  },

});

export default styles;
