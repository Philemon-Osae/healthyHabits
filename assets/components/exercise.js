import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/exerciseStyles'

const exercises = [
  { title: 'Walking', subtitle: '10-20 mins daily • Best for mama', screen: 'Walking', img: require('../images/exercise.png'), border: '#2A9D8F', bg: '#E0F2F1' },
  { title: 'Stand & Stretch', subtitle: 'Back pain relief • 2 mins', screen: 'Stand', img: require('../images/stretch.png'), border: '#E76F51', bg: '#FFEBE8' },
  { title: 'Leg Stretch', subtitle: 'Reduce cramps & swelling', screen: 'LegExercise', img: require('../images/pregnancy.png'), border: '#FFB703', bg: '#FFF8E1' },
  { title: 'Knee Bend', subtitle: 'Thigh strength • For delivery', screen: 'Knee', img: require('../images/pregnant-yoga.png'), border: '#9C27B0', bg: '#F3E5F5' },
  { title: 'Bend Backwards', subtitle: 'Lower back relief', screen: 'Bending', img: require('../images/sitt.png'), border: '#219EBC', bg: '#E3F2FD' },
];

export default function Exercise({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Home</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>EXERCISES</Text>
          <Text style={styles.subHeader}>HEALTHY HABITS • Safe for Ghanaian mothers</Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>⚠️ Stop if dizzy, bleeding, or chest pain. Drink water. Ask midwife.</Text>
        </View>

        <View style={styles.nutritionContainer}>
          {exercises.map((item, idx) => (
            <TouchableOpacity key={idx} style={[styles.optionSelect, { borderLeftColor: item.border }]} onPress={() => navigation.navigate(item.screen)} activeOpacity={0.8}>
              <View style={[styles.iconCircle, { backgroundColor: item.bg }]}>
                <Image source={item.img} style={styles.optionLogo} resizeMode="contain" />
              </View>
              <View style={styles.textWrap}>
                <Text style={styles.cardTitle}>{item.title.toUpperCase()}</Text>
                <Text style={styles.cardSub}>{item.subtitle}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.footer}>Made with ❤️ • Do daily, not too much</Text>
      </ScrollView>
    </View>
  )
}