import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Legumes() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>LEGUMES</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}> </Text>
   
   
    <Text style={styles.headerText1}>SOME SPECIFIC LEGUME RECOMMENDATIONS FOR EACH TRIMESTER.</Text><Text style={styles.textt}> </Text>
    <Text style={styles.headerText2}>First trimester</Text> 
     <Text style={styles.textt}>. Lentils</Text>
     <Text style={styles.textt}>. Black beans</Text>
     <Text style={styles.textt}>. Kidney beans</Text>
     <Text style={styles.textt}>. Pinto beans</Text>
   
   
     <Text style={styles.headerText2}>Second trimester</Text> 
     <Text style={styles.textt}>. Chickpeas</Text>
     <Text style={styles.textt}>. Hummus</Text>
     <Text style={styles.textt}>. Edamame</Text>
     <Text style={styles.textt}>. Roasted chickpeas</Text>
   

     <Text style={styles.headerText2}>Third  trimester</Text> 
     <Text style={styles.textt}>. Tofu</Text>
     <Text style={styles.textt}>. Tempeh</Text>
     <Text style={styles.textt}>. Miso</Text>
     <Text style={styles.textt}>. Soy sauce</Text>


     <Text style={styles.textt}>
      In addition to eating legumes, pregnant women can also increase their intake of folate and iron by eating other healthy foods, such as leafy green vegetables, nuts, and seeds. They should also talk to their doctor about taking prenatal vitamins, which can help to ensure that they are getting enough of the nutrients they need. When consuming legumes during pregnancy, it's important to ensure they are properly cooked to eliminate any potential bacteria or toxins.

     </Text>
   
   
    <Text style={styles.textt}> </Text>
   
   
    <Text style={styles.textt}>  </Text>
  
  
    <Text style={styles.textt}> </Text>
   
   
    <Text style={styles.textt}> </Text>
   
   
    <Text style={styles.textt}>  </Text>
    <Text style={styles.textt}>
    </Text>
    <Text style={styles.textt}>
    </Text>
    <Text style={styles.textt}>
          
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
  fontSize: 28,
  color: 'violet',
  fontWeight: 'bold'
},

headerText2: { 
  fontSize: 27,
  color: 'blue',
  fontWeight: 'bold'
},
textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 23
}

})