import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../styles/nutritionStyles'

export default function Nutrition({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text 
        style={styles.headerText}>NUTRITION</Text>
    </View>
            <View style={styles.nutritionContainer}>
                <TouchableOpacity style={styles.optionSelect}
                onPress={() => navigation.navigate('Vegetables')}
                >
                <Image 
                    source={require('../images/vegetables.png')} 
                    style={styles.optionLogoFruit}
                />
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.optionSelect}
                 onPress={() => navigation.navigate('Fruits')}
                >
                <Image 
                    source={require('../images/fruits.png')} 
                    style={styles.optionLogo}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                 onPress={() => navigation.navigate('Water')}
                >
                <Image 
                    source={require('../images/water.png')} 
                    style={styles.optionLogoWater}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                 onPress={() => navigation.navigate('Legumes')}
                >
                <Image 
                    source={require('../images/wheat.png')} 
                    style={styles.optionLogoWheat}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                 onPress={() => navigation.navigate('Eggs')}
                >
                <Image 
                    source={require('../images/eggss.png')} 
                    style={styles.eggs}
                />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionSelect}
                 onPress={() => navigation.navigate('Dairy')}
                >
                <Image 
                    source={require('../images/dairy.png')} 
                    style={styles.dairy}
                />
                </TouchableOpacity>

            </View>
{/* 
            <View style={styles.recordContainer}>
                <Text style={styles.recordText}>
                    Records...
                </Text>
            </View>  */}
        
    </View>
  )
}
