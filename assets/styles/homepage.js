import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
  
    logo: {
        top: 7,
        width: 110,
        height: 90,
      },

      optionContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      optionSelect: {        
      height: 192,
      margin: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
      width: 280,
      borderRadius: 113,
      elevation: 10
      },
      
      optionLogo: {
        width: '50%',
        height: 130,
      },

    exerciseLogo: {
        width: 70,
        height: 130,
    }
});

export default styles;
