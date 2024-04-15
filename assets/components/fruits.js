import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fruits() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}> FRUITS</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}> 
     

    </Text><Text style={styles.headerText1}>. First Trimester:</Text>2 servings per day  <Text style={styles.textt}>
     



    </Text><Text style={styles.headerText1}>. Second Trimester:</Text>2-3 servings per day<Text style={styles.textt}>
     



    </Text><Text style={styles.headerText1}>. Third Trimester:</Text>3-4 servings per day <Text styles={styles.textt}>
    
     
    </Text>
    Pregnant women should choose a variety of fruits to get the most nutrients. Some good choices include:
    <Text style={styles.textt}></Text> <Text style={styles.headerText1}>. Citrus fruits: </Text>Oranges, grapefruits, lemons, and limes are excellent sources of vitamin C, which is important for immune function and iron absorption. <Text style={styles.textt}>


    </Text> <Text style={styles.headerText2}>. Berries:</Text> Strawberries, blueberries, rasberries, and blackberries are packed with antioxidants, which can help protect cells from damage.<Text style={styles.textt}>

    </Text> <Text style={styles.headerText2}>. Bananas: </Text>Bananas are a good source of potassium, which is important for regulating blood pressure. <Text style={styles.textt}>



    </Text> <Text style={styles.headerText2}>. Apples: </Text>Apples are a good source of fibre and vitamin C. <Text style={styles.textt}>


    </Text> <Text style={styles.headerText2}>. Melons: </Text>Cantaloupe, honeydew, and watermelon are good source of water and vitamins A and C<Text style={styles.textt}>

 </Text> <Text style={styles.textt1}>*Pregnant women should try to eat fresh fruits whenever possible. Dried fruit are a good source of concentrated nutrients, but they are also high in sugar, so it is important to eat them in moderation. Fruit juice can be a part of a healthy diet, but it is important to limit intake to not more than 100% juice and avoid juices with added sugar.  
    </Text>
    </ScrollView>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10
},

header: {
  marginTop: 30,
  height: 40,
  width: '100%'
},

headerText: { 
  fontSize: 35,
  color: '#FF003D',
  fontWeight: 'bold'
},

headerText1: { 
  fontSize: 32,
  color: 'blue',
  fontWeight: 'bold'
},

headerText2: { 
  fontSize: 30,
  color: 'violet',
  fontWeight: 'bold'
},

textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 26
  ,color: 'blue',
  fontWeight: 'bold',
  
}, 

textt:  {
   fontSize: 22
   ,color: 'violet',
   fontWeight: 'bold',
},

textt1:  {
  fontSize: 22
  ,color: 'orange',
  fontWeight: 'bold',
}


})