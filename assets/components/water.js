import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Water() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WATER 💧</Text>
        <Text style={styles.subHeader}>Most important drink in pregnancy</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester (Week 1-12)</Text>
          <Text style={styles.textt1}>8 cups / 2 litres per day</Text>
          <Text style={styles.textt}>Helps with nausea, carries food to baby. Keep a bottle by your bed — sip small, don't gulp.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester (Week 13-27)</Text>
          <Text style={styles.textt1}>10 cups / 2.5 litres per day</Text>
          <Text style={styles.textt}>Blood volume increases. More water = better circulation, less dizziness in Accra heat.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester (Week 28-40)</Text>
          <Text style={styles.textt1}>10-12 cups / 2.5-3 litres per day</Text>
          <Text style={styles.textt}>Reduces swelling, prevents constipation and early contractions. Don't drink 1 litre at once before sleeping — you will wake 5 times!</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText2}>Benefits of Water</Text>
          <Text style={styles.bullet}>1. Carries nutrients to baby and helps placenta grow well.</Text>
          <Text style={styles.bullet}>2. Controls body temperature — Ghana sun is hot, you overheat faster when pregnant.</Text>
          <Text style={styles.bullet}>3. More blood needs more water — helps deliver food to baby.</Text>
          <Text style={styles.bullet}>4. Softens stool — stops constipation from iron tablets.</Text>
          <Text style={styles.bullet}>5. Helps kidney wash waste — very important when taking prenatal vitamins.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Practical Tips</Text>
          <Text style={styles.bullet}>• Pure water sachets OK, but better: Buy Verna/Voltic bottle and refill. Cheaper.</Text>
          <Text style={styles.bullet}>• Don't wait to be thirsty — by then you are already dehydrated.</Text>
          <Text style={styles.bullet}>• Add slice of orange/lime if plain water bores you. Avoid sugary drinks.</Text>
          <Text style={styles.bullet}>• Coconut water (1 cup) = natural electrolytes, especially if vomiting or sweating.</Text>
          <Text style={styles.bullet}>• Check urine: Light yellow = good. Dark yellow/brown = drink more now.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Treated water, boiled & cooled water, bottled water, coconut water.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Cold water from open drum at market, ice from unknown source, sugary sobolo with too much sugar.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Untreated well water, water with smell, drinking from same cup with many people when sick.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Remind Partner: Fetch Water for Me →</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F0', padding: 12 },
  header: { marginTop: 40, marginBottom: 10, width: '100%' },
  headerText: { fontSize: 32, color: '#D90429', fontWeight: 'bold' },
  subHeader: { fontSize: 14, color: '#666', marginTop: 4 },
  textContainer: { flex: 1 },
  card: {
    backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 12,
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4,
  },
  swapCard: { backgroundColor: '#FFF3CD', borderLeftWidth: 5, borderLeftColor: '#FFB703' },
  safetyCard: { backgroundColor: '#F0F8FF', borderLeftWidth: 5, borderLeftColor: '#219EBC' },
  headerText1: { fontSize: 18, color: '#6A040F', fontWeight: 'bold', marginBottom: 6 },
  headerText2: { fontSize: 20, color: '#219EBC', fontWeight: 'bold', marginTop: 5, marginBottom: 8 },
  textt: { fontSize: 16, color: '#333', lineHeight: 23, marginBottom: 8 },
  textt1: { fontSize: 16, color: '#023E8A', fontWeight: '600', marginBottom: 6 },
  bullet: { fontSize: 15, color: '#333', lineHeight: 22, marginTop: 4 },
  light: { fontSize: 14, lineHeight: 20, marginBottom: 6, fontWeight: '500' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#CA6702' },
  red: { color: '#D90429', fontWeight: 'bold' },
  partnerBtn: { backgroundColor: '#219EBC', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 15 },
  partnerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})