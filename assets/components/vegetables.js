import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Vegetables() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}> VEGETABLES</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.headerText1}>.First trimester</Text><Text style={styles.textt}>Eat two and half servings per day in this trimester.</Text>
   
    <Text style={styles.headerText1}>Vegetables to eat during this trimester</Text><Text style={styles.textt}></Text>
   
    <Text style={styles.headerText2}>. Leafy green vegetables:</Text><Text style={styles.textt}> These are high in folate, which is important for preventing neural tube defects. Examples include spinach,kale, and collard greens.</Text>
   
    <Text style={styles.headerText2}>. Broccoli:</Text><Text style={styles.textt}> This ia a good source of vitamin C, which helps the body absorb iron. </Text>

    <Text style={styles.headerText2}>. Carrot:</Text><Text style={styles.textt}> These are high in betacarotene, which the body converts to vitamin A. Vitamin A is important for vision and cell growth. </Text>
    
     <Text style={styles.headerText2}>. Leafy green vegetables:</Text><Text style={styles.textt}> These are high in folate, which is important for preventing neural tube defects. Examples include spinach,kale, and collard greens.</Text>


     <Text style={styles.headerText1}>.Second trimester</Text><Text style={styles.textt}>Eat 3 servings per day in this trimester.</Text>
 
     <Text style={styles.headerText1}>Vegetables to eat during this trimester</Text><Text style={styles.textt}></Text>
   
     <Text style={styles.headerText2}>. Tomatoes:</Text><Text style={styles.textt}>These are high in lycopene, an antioxidant that may help protect against cancer.</Text>
 
     <Text style={styles.headerText2}>Bell peppers:</Text><Text style={styles.textt}> These are a good source of vitamin C and potassium.</Text>

     <Text style={styles.headerText2}>. Asparagus:</Text><Text style={styles.textt}> This is a good source of folate and vitamin K. Vitamin K is important for blood clotting.</Text>

     <Text style={styles.headerText1}>.Third trimester</Text><Text style={styles.textt}>Eat 3 servings per day in this trimester.</Text>
   
     <Text style={styles.headerText1}>Vegetables to eat during this trimester</Text><Text style={styles.textt}></Text>
   
     <Text style={styles.headerText2}>. Berries:</Text><Text style={styles.textt}> These are high in antioxidants, which can help protect the body from damage. </Text>

     <Text style={styles.headerText2}>. Melon:</Text><Text style={styles.textt}>This is a good source of water, which is important for staying hydrated during pregnancy.  </Text>

     <Text style={styles.headerText2}>. Squash:</Text><Text style={styles.textt}>This is a good source of protein and fiber.</Text>


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
  color: 'red',
  fontWeight: 'bold'
},

headerText1: {
  fontSize: 30,
  color: 'blue',
  fontWeight: 'bold'
},

headerText2: {
  fontSize: 25,
  color: 'violet',
  fontWeight: 'bold'

},

textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 20
}

})