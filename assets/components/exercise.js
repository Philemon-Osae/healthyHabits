import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import styles from '../styles/exerciseStyles'

export default function Exercise({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text 
        style={styles.headerText}>EXERCISES</Text>
    </View>
            <View style={styles.nutritionContainer}>
                <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Stand')}
                >
                <Image 
                    source={require('../images/exercise.png')} 
                    style={styles.optionLogo}
                />
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Knee')}
                >
                <Image 
                    source={require('../images/pregnant-yoga.png')} 
                    style={styles.optionLogoPreg}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Bending')}
                >
                <Image 
                    source={require('../images/sitt.png')} 
                    style={styles.optionLogo}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('LegExercise')}
                >
                <Image 
                    source={require('../images/pregnancy.png')} 
                    style={styles.optionLogoSkip}
                />
                </TouchableOpacity>

            </View>

        
    </View>
  )
}
