import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red'
    },

    header: {
        marginTop: 50,
        width: 177,
        height: 40,
        
    },
    headerText: { 
        fontSize: 32,
        color: 'blue',
        fontWeight: 'bold'
    },

    nutritionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '60%',
        width: '100%',
        justifyContent: 'space-around',
        color: 'Blue'
    },

    optionSelect: {        
        height: 160,
        marginTop: 25,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 44,
        elevation: 10
        },
        
        optionLogoFruit: {
            width: '100%',
            height: 492,
            color: 'red'
          },

          optionLogo: {
            width: '100%',
            height: 150,
          },

          optionLogoWheat: {
            width: '100%',
            height: 250,
          },

          optionLogoWater: {
            width: '70%',
            height: 100,
          },

          recordContainer: {
            marginTop: 130,
            height: 20,
            alignSelf: "flex-start",
            marginLeft: 15
          },

          eggs: {
            width: 100,
            height: 80,
            tintColor: 'white' 
          },

          dairy: {
            width: 100,
            height: 100,
            tintColor: 'white' 
          },

          fruit: {
            width: 100,
            height: 100,
            tintColor: 'red' 
          },

          vegetables: {
            width: 100,
            height: 100,
            tintColor: 'red' 
          },

          water: {
            width: 100,
            height: 100,
            tintColor: 'red' 
          },

          recordText: {
            fontWeight: 'bold',
            fontSize: 15,
            color: '#FF003D'
          }

})

export default styles;