import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Eggs({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EGGS 🥚</Text>
        <Text style={styles.subHeader}>Affordable protein for Ghanaian Mums</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        {/* TRIMESTER CARDS */}
        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester (Week 1-12)</Text>
          <Text style={styles.textt1}>1-2 eggs per day is safe.</Text>
          <Text style={styles.textt}>Best for morning sickness: Boiled eggs are easy to digest and stop nausea. Avoid raw eggs in salad or mayonnaise.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester (Week 13-27)</Text>
          <Text style={styles.textt1}>1-2 eggs per day.</Text>
          <Text style={styles.textt}>Baby's brain is growing fast. Choline in egg yolk helps brain & spinal cord. Pair with kontomire or beans for iron.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester (Week 28-40)</Text>
          <Text style={styles.textt1}>1 egg per day + other proteins.</Text>
          <Text style={styles.textt}>Don't overdo to avoid excess weight. Boiled > Fried. If you have high cholesterol, speak to your midwife.</Text>
        </View>

        {/* GHANAIAN SWAP - OUR STANDOUT FEATURE */}
        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Market Swap</Text>
          <Text style={styles.textt}>No eggs today? Same protein:</Text>
          <Text style={styles.bullet}>• 1 cup cooked beans (GH₵10) + 1 small tilapia</Text>
          <Text style={styles.bullet}>• 2 boiled eggs = 1 sachet of groundnuts + 1 egg</Text>
          <Text style={styles.bullet}>• Budget tip: Crate of eggs is cheaper at Kaneshie/Madina market on Saturdays.</Text>
        </View>

        {/* TRAFFIC LIGHT SAFETY */}
        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Well-cooked, boiled or fried till hard.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Ask Midwife: You have high BP or cholesterol.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Go to Clinic NOW if: Vomiting + rash after eating eggs, or severe stomach pain.</Text>
        </View>

        <Text style={styles.headerText2}>Benefits of EGGS</Text>
        <Text style={styles.textt}>1. High-quality protein for baby's cells and organs.</Text>
        <Text style={styles.textt}>2. Choline for baby's brain development - one of the best sources.</Text>
        <Text style={styles.textt}>3. Vitamin D, B12, Folate, Iron & Zinc for your blood and bones.</Text>
        <Text style={styles.textt}>4. DHA (in enriched eggs) for baby's eyes and brain.</Text>
        <Text style={styles.textt}>5. Easy to digest when nausea or heartburn comes.</Text>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Share with Partner / Husband →</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    padding: 12
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
    width: '100%'
  },
  headerText: {
    fontSize: 32,
    color: '#D90429',
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginTop: 4
  },
  textContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  swapCard: {
    backgroundColor: '#FFF3CD',
    borderLeftWidth: 5,
    borderLeftColor: '#FFB703'
  },
  safetyCard: {
    backgroundColor: '#F0F8FF',
    borderLeftWidth: 5,
    borderLeftColor: '#219EBC'
  },
  headerText1: {
    fontSize: 18,
    color: '#6A040F',
    fontWeight: 'bold',
    marginBottom: 6
  },
  headerText2: {
    fontSize: 20,
    color: '#FB8500',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8
  },
  textt: {
    fontSize: 16,
    color: '#333',
    lineHeight: 23,
    marginBottom: 8
  },
  textt1: {
    fontSize: 16,
    color: '#023E8A',
    fontWeight: '600',
    marginBottom: 6
  },
  bullet: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    marginTop: 4
  },
  light: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
    fontWeight: '500'
  },
  green: { color: '#2A9D8F' },
  yellow: { color: '#CA6702' },
  red: { color: '#D90429', fontWeight: 'bold' },
  partnerBtn: {
    backgroundColor: '#D90429',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15
  },
  partnerBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})