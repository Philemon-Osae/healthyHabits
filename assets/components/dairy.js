import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dairy() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text 
        style={styles.headerText}>BENEFITS OF DAIRY PRODUCTS</Text>
    </View>
    <ScrollView style={styles.textContainer}>
    <Text style={styles.textt}>
     1. Dairy products are rich source sources of calcium,protein and vitamin D,nutrients that are considered essential for optimal growth of the fetus.
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
  fontSize: 32,
  color: '#FF003D',
  fontWeight: 'bold'
},

textContainer: {
  marginTop: 10,
  padding: 5
},

textt: {
  fontSize: 18
}

})