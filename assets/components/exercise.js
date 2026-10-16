import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/exerciseStyles'

const exercises = [
  { title: 'Standing Stretch', subtitle: 'Back pain relief', screen: 'Stand', img: require('../images/exercise.png'), color: '#FFE5EC' },
  { title: 'Prenatal Yoga', subtitle: 'Calm & flexibility', screen: 'Knee', img: require('../images/pregnant-yoga.png'), color: '#E0F7FA' },
  { title: 'Sitting Pose', subtitle: 'Pelvic strength', screen: 'Bending', img: require('../images/sitt.png'), color: '#F3E8FF' },
  { title: 'Leg Exercise', subtitle: 'Reduce swelling', screen: 'LegExercise', img: require('../images/pregnancy.png'), color: '#FFF3CD' },
];

export default function Exercise({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Safe Exercises</Text>
          <Text style={styles.subHeader}>1st - 3rd Trimester • 5-10 mins</Text>
        </View>

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>⚠️ Stop if dizzy, bleeding, or chest pain. Always consult your midwife.</Text>
        </View>

        <View style={styles.nutritionContainer}>
          {exercises.map((item, idx) => (
            <TouchableOpacity key={idx} style={[styles.optionSelect, { backgroundColor: item.color }]} onPress={() => navigation.navigate(item.screen)} activeOpacity={0.8}>
              <Image source={item.img} style={styles.optionLogo} resizeMode="contain" />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}