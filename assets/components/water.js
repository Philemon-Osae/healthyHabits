import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Water() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>WATER</Text>
    </View>
    <ScrollView style={styles.textContainer}>
<Text style={styles.headerText1}>First trimester</Text><Text style={styles.textt1}>During this period take 8 cups of water per day.</Text>

<Text style={styles.headerText1}>Second trimester</Text><Text style={styles.textt1}>During this period take 10 cups of water per day.</Text>

<Text style={styles.headerText1}>Third trimester</Text><Text style={styles.textt1}>During this period take 12 cups of water per day.</Text>


<Text 
        style={styles.headerText2}>Benefits of Water</Text>

    <Text style={styles.textt}>
     1. Water is essential for maintaining proper hydration levels in the body, especially during pregnancy. 
        It helps carry nutrients to the baby, supports the development of the placenta, and aids in digestion.
     </Text>

     <Text style={styles.textt}>
      2.  Pregnant women are more susceptible to overheating due to hormonal changes and increased blood volume. Drinking water helps regulate body temperature and prevents overheating, which is important for both the mother's comfort and the baby's well-being.
     </Text>

     <Text style={styles.textt}>
      3. During pregnancy, blood volume increases to support the growing baby. Staying hydrated with water helps maintain adequate blood volume, which is crucial for optimal circulation and nutrient delivery to the baby.
     </Text>

     <Text style={styles.textt}>
      4. Pregnancy hormones can slow down digestion and lead to constipation. Drinking enough water helps soften stools, making them easier to pass and reducing the risk of constipation.
     </Text>

     <Text style={styles.textt}>
      5. Water acts as a natural detoxifier by flushing out waste products and toxins from the body. This is particularly important during pregnancy when there is an increased workload on the kidneys.
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
  color: 'blue',
  fontWeight: 'bold'
},

headerText2: { 
  fontSize: 28,
  color: 'brown',
  fontWeight: 'bold',
  
},

textContainer: {
  marginTop: 10,
  padding: 5
},

textt:  {
  fontSize: 22
  ,color: 'violet',
  fontWeight: 'bold',
},

textt1:  {
  fontSize: 22
  ,color: 'yellow',
  fontWeight: 'bold',
}

})