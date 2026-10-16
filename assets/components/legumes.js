import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Legumes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LEGUMES 🫘</Text>
        <Text style={styles.subHeader}>Beans, groundnuts for iron & folate</Text>
      </View>

      <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <Text style={styles.headerText1}>First Trimester (Week 1-12)</Text>
          <Text style={styles.textt1}>3-4 times per week, 1 cup cooked</Text>
          <Text style={styles.textt}>• Red beans / black-eyed peas (beans / red-red) - folate for baby's brain</Text>
          <Text style={styles.textt}>• Groundnuts - good for protein if eggs make you nauseous</Text>
          <Text style={styles.textt}>Always well cooked to avoid bacteria.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Second Trimester (Week 13-27)</Text>
          <Text style={styles.textt1}>4-5 times per week, 1-1.5 cups</Text>
          <Text style={styles.textt}>• Bambara beans (aboboi), cowpeas, kidney beans</Text>
          <Text style={styles.textt}>• Chickpeas if you find at Shoprite/Melcom, or use local alternative: nkatie (groundnut) soup</Text>
          <Text style={styles.textt}>Add kontomire or garden eggs to beans for iron + folate boost.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.headerText1}>Third Trimester (Week 28-40)</Text>
          <Text style={styles.textt1}>3 times per week, 1 cup - don't overdo</Text>
          <Text style={styles.textt}>• Beans can cause gas/bloating. Soak 6-8 hours, throw water, then cook fresh.</Text>
          <Text style={styles.textt}>• Better: Light soups with beans, not heavy gari + beans late at night.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 Ghana Market Swap</Text>
          <Text style={styles.bullet}>• Lentils (expensive) = Black-eyed peas - same folate, GH₵10/cup</Text>
          <Text style={styles.bullet}>• Hummus / Edamame (not in Ghana) = Boiled groundnuts + gari (yoo ke gari)</Text>
          <Text style={styles.bullet}>• Tofu / Tempeh = Soya kebab or soya beans powder in tom brown</Text>
          <Text style={styles.bullet}>• Tip: Add small dry fish to beans stew to add iron without meat cost.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 Safety Check</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Well-cooked beans, groundnuts freshly roasted, bambara beans.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Caution: Beans that give you severe bloating/heartburn - eat smaller portion + drink water. Old groundnuts with mould - throw away (aflatoxin).</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Raw / half-cooked beans, groundnuts with white/green mould, street beans kept 2+ days without fridge.</Text>
        </View>

        <Text style={styles.headerText2}>Extra Tip</Text>
        <Text style={styles.textt}>Combine legumes with Vitamin C (orange, tomatoes) to help iron absorption. Take your prenatal vitamins daily and ask your midwife about iron levels.</Text>

        <TouchableOpacity style={styles.partnerBtn}>
          <Text style={styles.partnerBtnText}>Remind Partner to Soak Beans →</Text>
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