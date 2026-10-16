import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Vegetables() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>VEGETABLES 🥬</Text>
        <Text style={styles.subHeader}>Kontomire, carrots, tomatoes — everyday power</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester - 2.5 servings/day</Text>
          <Text style={styles.textt1}>Focus: Folate to prevent defects</Text>
          <Text style={styles.textt}>• Kontomire, aleefu, ayoyo, spinach - blend into stew or abom</Text>
          <Text style={styles.textt}>• Carrots - Vitamin A for baby's eyes, good for vision</Text>
          <Text style={styles.textt}>• Broccoli (if you find at Melcom) or replace with cabbage</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester - 3 servings/day</Text>
          <Text style={styles.textt1}>Focus: Iron + Vitamin C</Text>
          <Text style={styles.textt}>• Tomatoes - lycopene, makes stew rich</Text>
          <Text style={styles.textt}>• Bell peppers (kpakpo shito not too much), green peppers</Text>
          <Text style={styles.textt}>• Carrots + garden eggs - potassium for blood pressure</Text>
          <Text style={styles.textt}>Tip: Add small tomatoes + kontomire to every meal.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester - 3 servings/day</Text>
          <Text style={styles.textt1}>Focus: Fibre + water to stop constipation</Text>
          <Text style={styles.textt}>• Okro, garden eggs, cabbage, carrots</Text>
          <Text style={styles.textt}>• Cucumber + lettuce if you have heartburn - light at night</Text>
          <Text style={styles.textt}>Don't eat too much raw cabbage at night - causes gas.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Market Swap</Text>
          <Text style={styles.bullet}>• Kale / collard greens = Kontomire or aleefu - same folate, GH₵5 a bunch</Text>
          <Text style={styles.bullet}>• Asparagus (expensive) = Okro + ayoyo - same fibre</Text>
          <Text style={styles.bullet}>• Squash = Pumpkin / garden eggs</Text>
          <Text style={styles.bullet}>• Wash all vegetables with salt water - especially kontomire to remove sand/worms.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Freshly cooked vegetables, washed salad, kontomire stew.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Raw salad from street vendor, too much kpakpo shito (pepper), gari with raw cabbage left overnight.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Unwashed vegetables, vegetables with pesticide smell not washed, pre-cut kontomire kept 3+ days.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Remind Partner to Buy Vegetables →</Text>
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
  headerText2: { fontSize: 20, color: '#FB8500', fontWeight: 'bold', marginTop: 10, marginBottom: 8 },
  textt: { fontSize: 16, color: '#333', lineHeight: 23, marginBottom: 6 },
  textt1: { fontSize: 16, color: '#023E8A', fontWeight: '600', marginBottom: 6 },
  bullet: { fontSize: 15, color: '#333', lineHeight: 22, marginTop: 4 },
  light: { fontSize: 14, lineHeight: 20, marginBottom: 6, fontWeight: '500' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#CA6702' },
  red: { color: '#D90429', fontWeight: 'bold' },
  partnerBtn: { backgroundColor: '#D90429', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 15 },
  partnerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})