import { Image, TouchableOpacity, View ,ScrollView, ImageBackground, ImageBackgroundComponent } from "react-native";

import styles from "../styles/homepage";
import { Button } from "react-native-web";

export const Homepage = ({navigation}) => {
    return(
      


        <ScrollView style={styles.textContainer}>

        <View style={styles.container}>
        <View>

       
        <Image source={require('../images/daily-health-app.png')} 
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


                <Text> NUTRITION</Text>  
                </TouchableOpacity>
                
            

            <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Exercise')}
                >
                <Image source={require('../images/stretch.png')} 
                    style={styles.optionLogo}
                />



                   <Text>EXERCISES</Text>
                </TouchableOpacity>




              
                
                
                
                 <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Tips')}
                >
                <Image source={require('../images/bulb.png')} 
                    style={styles.exerciseLogo}
                />



                   <Text> TIPS </Text>
    </TouchableOpacity> 
                

              
                
                 <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('order drugs')}
                > 
                <Image source={require('../images/medicine.png')} 
                    style={styles.optionLogo}
                />



                  <Text>ORDER MEDICATIONS</Text>
                </TouchableOpacity>
                
        </View>
        
        
        </View>
        </ScrollView>
    )}
