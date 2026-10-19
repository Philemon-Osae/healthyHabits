import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/nutritionStyles'

export default function Nutrition({ navigation }) {
  const items = [
    { id: 'Vegetables', label: 'Vegetables', sub: 'Kontomire, Carrots', twi: 'Nkosua • Ebun', img: require('../images/vegetables.png'), color: '#2A9D8F', tip: 'Iron boost' },
    { id: 'Fruits', label: 'Fruits', sub: 'Mango, Banana', twi: 'Adua • Kwadu', img: require('../images/fruits.png'), color: '#E76F51', tip: 'Vitamin C' },
    { id: 'Water', label: 'Water', sub: '2-3L / day', twi: 'Nsu • Drink more', img: require('../images/water.png'), color: '#219EBC', tip: 'Anti-swelling' },
    { id: 'Legumes', label: 'Legumes', sub: 'Beans, Groundnut', twi: 'Abɛ • Beans', img: require('../images/wheat.png'), color: '#F4A261', tip: 'Protein' },
    { id: 'Eggs', label: 'Eggs', sub: '1 per day', twi: 'Nkosua pa', img: require('../images/eggss.png'), color: '#FFB703', tip: 'Brain power' },
    { id: 'Dairy', label: 'Dairy', sub: 'Milk, Yogurt', twi: 'Me Nufosuo', img: require('../images/dairy.png'), color: '#8ECAE6', tip: 'Calcium' },
  ]
  return (
    <View style={styles.container}>
      {/* PREMIUM HEADER - like homepage */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>NUTRITION • ADUANE</Text>
          <Text style={styles.subHeader}>What to eat • Week 20 • Market swap ready</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Tip card - Ghana specific */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 AGOO TIP TODAY</Text>
          <Text style={styles.tipText}>Eat kontomire + orange together. Vitamin C helps absorb iron from kontomire. Avoid tea right after eating.</Text>
        </View>

        <View style={styles.nutritionContainer}>
          {items.map((item) => (
            <TouchableOpacity key={item.id} style={styles.optionSelect} onPress={() => navigation.navigate(item.id)} activeOpacity={0.85}>
              <View style={[styles.iconCircle, { backgroundColor: item.color + '15' }]}>
                <Image source={item.img} style={styles.optionLogo} resizeMode="contain" />
              </View>
              <View style={[styles.badge, { backgroundColor: item.color }]}>
                <Text style={styles.badgeText}>{item.tip}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.label}</Text>
              <Text style={styles.cardSub}>{item.sub}</Text>
              <Text style={styles.cardTwi}>{item.twi}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.marketCard}>
          <Text style={styles.marketTitle}>🏪 GHANA MARKET SWAP</Text>
          <Text style={styles.marketText}>No broccoli? Use kontomire. No quinoa? Use brown rice + beans. Same nutrients, local price.</Text>
        </View>
      </ScrollView>
    </View>
  )
}