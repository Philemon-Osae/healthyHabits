import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    header: {
        marginTop: 50,
        width: 177,
        height: 40,
        alignItems: 'center',
    },

    headerText: { 
        fontSize: 32,
        color: 'grey',
        fontWeight: 'bold'
    },

    nutritionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '60%',
        width: '100%',
        justifyContent: 'space-around'
    },

    optionSelect: {        
        height: 160,
        marginTop: 25,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 44,
        elevation: 10
        },
        
        optionLogo: {
            width: 90,
            height: 120,
            tintColor: 'white'
          },

          optionLogoPreg: {
            width: 100,
            height: 100,
            tintColor: 'white'
          },

          optionLogoSkip: {
            tintColor: 'white',
            width: 120,
            height: 120,
          },

          recordContainer: {
            height: 22,
            alignSelf: "flex-start",
            marginLeft: 15,
            
          },

          recordText: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#FF003D'
          }
})

export default styles;