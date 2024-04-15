import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Eggs() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
                 style={styles.headerText}>              EGGS</Text>
    </View>
    <ScrollView style={styles.textContainer}>

    <Text style={styles.headerText1}>First trimester</Text><Text style={styles.textt1}>During this period take 1-2 eggs per day.</Text>

<Text style={styles.headerText1}>Second trimester</Text><Text style={styles.textt1}>During this period take 1-2 eggs per day.</Text>

<Text style={styles.headerText1}>Third trimester</Text><Text style={styles.textt1}>During this period take 1-2 eggs per day.</Text>


<Text style={styles.headerText2}>  Benefits of EGGS</Text>

    <Text style={styles.textt}>
     1. Eggs are an excellent source of high-quality protein, which is essential for the growth and development of the baby. Protein helps in the formation of new cells, tissues, and organs, and it also supports the production of enzymes and hormones.
    </Text>
    <Text style={styles.textt}>
     2. Eggs are one of the best dietary sources of choline, a nutrient that plays a crucial role in fetal brain development. Choline is important for the formation of the neural tube, which eventually develops into the baby's brain and spinal cord.
    </Text>
    <Text style={styles.textt}>
     3.  Eggs contain various vitamins and minerals that are beneficial during pregnancy. They are a good source of vitamin D, which helps in calcium absorption and bone health. Eggs also provide vitamins A, E, B12, and folate, along with minerals like iron and zinc.          
    </Text>
    <Text style={styles.textt}>
     4. Some eggs are enriched with omega-3 fatty acids, particularly DHA (docosahexaenoic acid). DHA is vital for the development of the baby's brain and eyes. It may also help reduce the risk of preterm birth and promote healthy birth weight.
    </Text>
    
    <Text style={styles.textt}>
     5. Eggs are generally well-tolerated by most people and are easy to digest. This can be especially beneficial for pregnant women who may experience digestive issues such as nausea or heartburn.
    </Text>
   <Text style={styles.textt}>
          *Overall, eggs are a nutritious food choice for pregnant women due to their high protein content, choline, omega-3 fatty acids, vitamins, and minerals. 
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
  fontSize: 35,
  color: 'violet',
  fontWeight: 'bold'
},

headerText2: { 
  fontSize: 30,
  color: 'orange',
  fontWeight: 'bold'
},


textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 20,
  color: 'pink'
},

textt1:  {
  fontSize: 22
  ,color: 'blue',
  fontWeight: 'bold',
}

})