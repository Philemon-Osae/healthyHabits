import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/nutritionStyles'

export default function Nutrition({ navigation }) {

  const items = [
    { id: 'Vegetables', label: 'Vegetables', sub: 'Kontomire, Carrots', img: require('../images/vegetables.png'), color: '#2A9D8F' },
    { id: 'Fruits', label: 'Fruits', sub: 'Mango, Banana', img: require('../images/fruits.png'), color: '#E76F51' },
    { id: 'Water', label: 'Water', sub: '2-3L / day', img: require('../images/water.png'), color: '#219EBC' },
    { id: 'Legumes', label: 'Legumes', sub: 'Beans, Groundnut', img: require('../images/wheat.png'), color: '#F4A261' },
    { id: 'Eggs', label: 'Eggs', sub: '1 per day', img: require('../images/eggss.png'), color: '#FFB703' },
    { id: 'Dairy', label: 'Dairy', sub: 'Milk, Yogurt', img: require('../images/dairy.png'), color: '#8ECAE6' },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NUTRITION</Text>
        <Text style={styles.subHeader}>What to eat for healthy mama & baby 🇬🇭</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.nutritionContainer}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.optionSelect, { borderLeftColor: item.color }]}
              onPress={() => navigation.navigate(item.id)}
              activeOpacity={0.8}
            >
              <View style={[styles.iconCircle, { backgroundColor: item.color + '20' }]}>
                <Image source={item.img} style={styles.optionLogo} resizeMode="contain" />
              </View>
              <Text style={styles.cardTitle}>{item.label}</Text>
              <Text style={styles.cardSub}>{item.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Daily Tip</Text>
          <Text style={styles.tipText}>Eat small, eat often. 3 main meals + 2 snacks (groundnut + fruit, or boiled egg). Don't skip meals.</Text>
        </View>
      </ScrollView>
    </View>
  )
}