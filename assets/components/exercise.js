import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/exerciseStyles'

const exercises = [
  { 
    title: 'Walking', 
    subtitle: '10-20 mins daily • Best for mama', 
    twi: 'Nante kakraa', 
    time: '20 min',
    level: 'Easy',
    screen: 'Walking', 
    img: require('../images/exercise.png'), 
    border: '#2A9D8F', 
    bg: '#2A9D8F15' 
  },
  { 
    title: 'Stand & Stretch', 
    subtitle: 'Back pain relief • 2 mins', 
    twi: 'Wo akyi mu', 
    time: '2 min',
    level: 'Relief',
    screen: 'Stand', 
    img: require('../images/stretch.png'), 
    border: '#E76F51', 
    bg: '#E76F5115' 
  },
  { 
    title: 'Leg Stretch', 
    subtitle: 'Reduce cramps & swelling', 
    twi: 'Wo nan mu', 
    time: '5 min',
    level: 'Daily',
    screen: 'LegExercise', 
    img: require('../images/pregnancy.png'), 
    border: '#FFB703', 
    bg: '#FFB70315' 
  },
  { 
    title: 'Knee Bend', 
    subtitle: 'Thigh strength • For delivery', 
    twi: 'Kotodwe',
    time: '5 min',
    level: 'Strong',
    screen: 'Knee', 
    img: require('../images/pregnant-yoga.png'), 
    border: '#9C27B0', 
    bg: '#9C27B015' 
  },
  { 
    title: 'Bend Backwards', 
    subtitle: 'Lower back relief', 
    twi: 'Wo akyi',
    time: '3 min',
    level: 'Relief',
    screen: 'Bending', 
    img: require('../images/sitt.png'), 
    border: '#219EBC', 
    bg: '#219EBC15' 
  },
];

export default function Exercise({ navigation }) {
  const [week] = useState(20);

  return (
    <View style={styles.container}>
      {/* Premium header like homepage */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerText}>EXERCISES • APOW-MU-TE</Text>
          <Text style={styles.subHeader}>Week {week} • Safe • 5 moves • Home only</Text>
        </View>
        <View style={styles.weekPill}><Text style={styles.weekPillText}>W{week}</Text></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Warning - premium dark */}
        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>⚠️ WHEN TO STOP • GYAE</Text>
          <Text style={styles.warningText}>Stop if dizzy, bleeding, chest pain, water breaks. Drink nsu. Call midwife. Korle Bu: 0302...</Text>
        </View>

        <View style={styles.nutritionContainer}>
          {exercises.map((item, idx) => (
            <TouchableOpacity 
              key={idx} 
              style={styles.optionSelect} 
              onPress={() => navigation.navigate(item.screen)} 
              activeOpacity={0.85}
            >
              <View style={[styles.iconCircle, { backgroundColor: item.bg }]}>
                <Image source={item.img} style={styles.optionLogo} resizeMode="contain" />
              </View>
              <View style={styles.textWrap}>
                <View style={styles.rowBetween}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={[styles.levelPill, { backgroundColor: item.border + '15' }]}>
                    <Text style={[styles.levelText, { color: item.border }]}>{item.time} • {item.level}</Text>
                  </View>
                </View>
                <Text style={styles.cardSub}>{item.subtitle}</Text>
                <Text style={styles.cardTwi}>{item.twi}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>💡 TODAY'S TIP</Text>
          <Text style={styles.tipText}>Do exercises in morning when cool. No gym needed. Use chair for balance. Barefoot on mat.</Text>
        </View>

        <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • Week {week} • Do daily, not too much • {exercises.length} safe moves</Text>
      </ScrollView>
    </View>
  )
}