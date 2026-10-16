import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Fruits() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FRUITS 🍊</Text>
        <Text style={styles.subHeader}>Fresh, local & full of vitamins</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester</Text>
          <Text style={styles.textt1}>2 servings per day</Text>
          <Text style={styles.textt}>Helps with nausea and constipation. Sour fruits like orange and pineapple (small amount) help you feel better in the morning.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester</Text>
          <Text style={styles.textt1}>2-3 servings per day</Text>
          <Text style={styles.textt}>Baby needs Vitamin C for skin and iron absorption. This is the time to enjoy variety.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester</Text>
          <Text style={styles.textt1}>3-4 servings per day</Text>
          <Text style={styles.textt}>Helps with swelling and digestion, but don't juice everything — eat the whole fruit for fibre. Avoid too much banana at night if you have heartburn.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Market Swap - Best Choices</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Citrus:</Text> Oranges, tangerines - GH₵5 for 5 at Circle. Best for Vitamin C.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Local power:</Text> Pawpaw (rich in folate), Mango (Vitamin A), Watermelon (water + cooling)</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Banana:</Text> One a day for potassium — controls blood pressure.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Budget tip:</Text> Berries & apples are imported & expensive. Same nutrients: Use orange + pawpaw + banana.</Text>
          <Text style={styles.bullet}>• Eat fresh. Dried fruits are high sugar — small handful only.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Washed fresh fruits, whole fruits with skin removed.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Pineapple (1 slice ok), Fruit juice (max 1 cup, 100% juice, no added sugar), Grapes if not washed well.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Unwashed fruits from roadside, pre-cut fruits in open bowl, juice with added sugar/saccharine. Wash with salt water.</Text>
        </View>

        <Text style={styles.headerText2}>Quick Tip</Text>
        <Text style={styles.textt}>*Pregnant women should eat fresh fruits when possible. Limit juice to 1 cup per day. Wash all fruits with clean water + a little salt before eating.</Text>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Ask Partner to Buy Fruits Today →</Text>
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
  textt: { fontSize: 16, color: '#333', lineHeight: 23, marginBottom: 8 },
  textt1: { fontSize: 16, color: '#023E8A', fontWeight: '600', marginBottom: 6 },
  bullet: { fontSize: 15, color: '#333', lineHeight: 22, marginTop: 4 },
  bold: { fontWeight: 'bold', color: '#000' },
  light: { fontSize: 14, lineHeight: 20, marginBottom: 6, fontWeight: '500' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#CA6702' },
  red: { color: '#D90429', fontWeight: 'bold' },
  partnerBtn: { backgroundColor: '#D90429', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 15 },
  partnerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})