import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Vegetables({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>VEGETABLES • NKOSUA 🥬</Text>
            <Text style={styles.subHeader}>Kontomire GH₵5 • Everyday power</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.pill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>2.5 Servings • Folate First</Text>
          <Text style={styles.textt1}>Focus: Folate to prevent defects</Text>
          <Text style={styles.textt}>• Kontomire, aleefu, ayoyo, spinach - blend into stew or abom</Text>
          <Text style={styles.textt}>• Carrots - Vitamin A for baby's eyes</Text>
          <Text style={styles.textt}>• Broccoli (Melcom) or replace with cabbage - same nutrients, cheaper</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#F4A26115' }]}><Text style={[styles.pillText, { color: '#F4A261' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>3 Servings • Iron + Vitamin C</Text>
          <Text style={styles.textt1}>Focus: Iron + Vitamin C combo</Text>
          <Text style={styles.textt}>• Tomatoes - lycopene, makes stew rich + iron absorb</Text>
          <Text style={styles.textt}>• Bell peppers (kpakpo shito not too much), green peppers</Text>
          <Text style={styles.textt}>• Carrots + garden eggs - potassium for BP control</Text>
          <Text style={styles.tip}>Add small tomatoes + kontomire to every meal. Vitamin C helps iron.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>3 Servings • Fibre to Stop Constipation</Text>
          <Text style={styles.textt1}>Focus: Fibre + water</Text>
          <Text style={styles.textt}>• Okro, garden eggs, cabbage, carrots - soft stool</Text>
          <Text style={styles.textt}>• Cucumber + lettuce if heartburn - light at night, not heavy</Text>
          <Text style={styles.textt}>Don't eat too much raw cabbage at night - gas at midnight.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA MARKET SWAP • GH₵5 BUNCH</Text>
          <Text style={styles.bullet}>• Kale / collard greens = <Text style={styles.price}>Kontomire or aleefu GH₵5 bunch</Text> — same folate, Madina/Makola</Text>
          <Text style={styles.bullet}>• Asparagus (expensive GH₵80) = Okro + ayoyo — same fibre, local & cheap</Text>
          <Text style={styles.bullet}>• Squash = Pumpkin / garden eggs — full Vitamin A</Text>
          <Text style={styles.bullet}>• Wash all vegetables with <Text style={styles.bold}>salt water</Text> — especially kontomire to remove sand/worms. Soak 10 mins.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Freshly cooked veg, washed salad, kontomire stew same day.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Raw salad from street vendor, too much kpakpo shito, gari with raw cabbage left overnight.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Unwashed veg, pesticide smell not washed, pre-cut kontomire kept 3+ days in open.</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.headerText2Light}>💡 WASH TRICK • NSU + NKYENE</Text>
          <Text style={styles.tipText}>Kontomire: Wash 3 times. 1st water throw, 2nd with salt 10 mins, 3rd clean water. Kills worms. Carrots: Peel if buying from roadside.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Remind Partner to Buy Vegetables →</Text>
          <Text style={styles.partnerSub}>Kontomire GH₵5 • Tomatoes GH₵20 • Madina morning</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Week 20 • Kontomire = #1 Ghana superfood • Wash with salt</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F5F2' },
  header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  backText: { fontSize: 22, color: '#111', fontWeight: '300', marginTop: -2 },
  headerText: { fontSize: 14, color: '#111', fontWeight: '800', letterSpacing: 0.5 },
  subHeader: { fontSize: 11, color: '#999', marginTop: 2, fontWeight: '500' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#f2f2f2' },
  pill: { backgroundColor: '#2A9D8F15', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#2A9D8F', letterSpacing: 0.8 },
  swapCard: { backgroundColor: '#FFFDF5', borderLeftWidth: 4, borderLeftColor: '#FFB703', borderColor: '#FFF3CD' },
  safetyCard: { backgroundColor: '#F6FBFF', borderLeftWidth: 4, borderLeftColor: '#219EBC', borderColor: '#E0F2FE' },
  tipCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 12 },
  headerText1: { fontSize: 16, color: '#111', fontWeight: '800', marginBottom: 4 },
  headerText2: { fontSize: 10, color: '#999', fontWeight: '800', marginBottom: 10, letterSpacing: 1 },
  headerText2Light: { fontSize: 10, color: '#aaa', fontWeight: '800', marginBottom: 8, letterSpacing: 1 },
  textt: { fontSize: 13, color: '#555', lineHeight: 19, marginBottom: 4, fontWeight: '500' },
  textt1: { fontSize: 13, color: '#111', fontWeight: '700', marginBottom: 6 },
  tip: { fontSize: 11.5, color: '#888', fontStyle: 'italic', marginTop: 4, lineHeight: 16 },
  bullet: { fontSize: 12.5, color: '#444', lineHeight: 20, marginTop: 6 },
  bold: { fontWeight: '800', color: '#111' },
  price: { color: '#2A9D8F', fontWeight: '800', backgroundColor: '#2A9D8F15' },
  tipText: { fontSize: 12.5, color: '#fff', lineHeight: 18, fontWeight: '500' },
  light: { fontSize: 12, lineHeight: 18, marginBottom: 8, fontWeight: '600' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#B45309' },
  red: { color: '#D90429', fontWeight: '700' },
  partnerBtn: { backgroundColor: '#111', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 8 },
  partnerBtnText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  partnerSub: { color: 'rgba(255,255,255,0.5)', fontSize: 10, marginTop: 3, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#bbb', fontSize: 10, marginTop: 18 }
})