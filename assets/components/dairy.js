import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Dairy() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DAIRY 🥛</Text>
        <Text style={styles.subHeader}>Milk, Yoghurt, Cheese for strong bones</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester (Week 1-12)</Text>
          <Text style={styles.textt1}>1-2 cups per day.</Text>
          <Text style={styles.textt}>If morning sickness makes you hate milk smell, try cold yoghurt or brukina without too much sugar. Calcium now helps build baby's first bones.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester (Week 13-27)</Text>
          <Text style={styles.textt1}>2-3 cups per day.</Text>
          <Text style={styles.textt}>Baby's bones and teeth are hardening fast. You need extra calcium. Try FanYogo (200ml) or 1 cup fresh milk with Milo in the evening.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester (Week 28-40)</Text>
          <Text style={styles.textt1}>2 cups per day max.</Text>
          <Text style={styles.textt}>Too much full-cream milk can cause heartburn. Switch to low-fat milk or plain yoghurt. Take with meals, not on empty stomach at night.</Text>
        </View>

        {/* GHANAIAN SWAP */}
        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Market Swap</Text>
          <Text style={styles.textt}>Can't afford or tolerate fresh milk?</Text>
          <Text style={styles.bullet}>• 1 cup milk = 1 cup brukina (millet + milk) - GH₵15</Text>
          <Text style={styles.bullet}>• 1 cup yoghurt = 1 cup soya milk + 2 spoon groundnut paste</Text>
          <Text style={styles.bullet}>• Budget tip: Ideal / Peak powdered milk sachet is okay — mix with warm water, not too light.</Text>
          <Text style={styles.bullet}>• Lactose issue? Use nkontomire + small dry fish for calcium.</Text>
        </View>

        {/* TRAFFIC LIGHT */}
        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Pasteurized milk, boiled fresh cow milk, sealed yoghurt.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Ask Midwife: Unpasteurized brukina from roadside, soft cheese (like wagashi left overnight).</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Raw unboiled cow milk, expired yoghurt, any dairy smelling sour. Go to clinic if diarrhea after dairy.</Text>
        </View>

        <Text style={styles.headerText2}>Benefits of Dairy</Text>
        <Text style={styles.textt}>1. Rich in calcium for baby's bones and teeth + protects your bones.</Text>
        <Text style={styles.textt}>2. Protein for baby's growth and your energy.</Text>
        <Text style={styles.textt}>3. Vitamin D helps calcium enter your body — very important in pregnancy.</Text>
        <Text style={styles.textt}>4. Probiotics in yoghurt help reduce constipation and vaginal infection.</Text>
        <Text style={styles.textt}>5. Keeps you full and helps you sleep better at night (warm milk).</Text>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Remind Partner to Buy Milk →</Text>
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