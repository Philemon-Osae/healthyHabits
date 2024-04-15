import { Image, TouchableOpacity, View ,ScrollView, ImageBackground, ImageBackgroundComponent } from "react-native";

import styles from "../styles/homepage";
import { Button } from "react-native-web";

export const Homepage = ({navigation}) => {
    return(
      


        <ScrollView style={styles.textContainer}>

        <View style={styles.container}>
        <View>w

       
        <Image source={require('../images/Capture.PNG')} 
        style={[styles.logo]}
        />
        </View>

        <View style={styles.optionContainer}>
            
        <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Nutrition')}
                > 
                <Image source={require('../images/nutrition.png')} 
                    style={styles.optionLogo}
                />


                  NUTRITION
                </TouchableOpacity>
                
            

            <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Exercise')}
                >
                <Image source={require('../images/stretch.png')} 
                    style={styles.optionLogo}
                />



                   EXERCISES
                </TouchableOpacity>




              
                
                
                
                 <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Tips')}
                >
                <Image source={require('../images/bulb.png')} 
                    style={styles.exerciseLogo}
                />



                    TIPS 
    </TouchableOpacity> 
                

              
                
                 <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('order drugs')}
                > 
                <Image source={require('../images/medicine.png')} 
                    style={styles.optionLogo}
                />



                  ORDER MEDICATIONS
                </TouchableOpacity>
                
        </View>
        
        
        </View>
        </ScrollView>
    )}
