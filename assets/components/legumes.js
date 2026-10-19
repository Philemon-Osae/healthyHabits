import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Legumes({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>LEGUMES • ABOBOI 🫘</Text>
            <Text style={styles.subHeader}>GH₵10/cup • Beans, groundnut, iron boost</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.pill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>Folate for Baby Brain</Text>
          <Text style={styles.textt1}>3-4x/week • 1 cup • Red beans / black-eyed peas</Text>
          <Text style={styles.textt}>• Red beans / black-eyed peas (red-red) - folate for baby's brain & spine</Text>
          <Text style={styles.textt}>• Groundnuts - protein if eggs make you nauseous. Roast fresh.</Text>
          <Text style={styles.tip}>Always well cooked to avoid bacteria. Boil till soft.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#F4A26115' }]}><Text style={[styles.pillText, { color: '#F4A261' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>Iron + Folate Boost</Text>
          <Text style={styles.textt1}>4-5x/week • 1-1.5 cups • Bambara beans</Text>
          <Text style={styles.textt}>• Bambara beans (aboboi), cowpeas, kidney beans - local & cheap</Text>
          <Text style={styles.textt}>• Chickpeas if you find at Shoprite/Melcom, or local alternative: nkatie (groundnut) soup</Text>
          <Text style={styles.tip}>Add kontomire or garden eggs to beans for iron + folate boost. Eat with orange.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>Gas? Soak Trick</Text>
          <Text style={styles.textt1}>3x/week • 1 cup max • Don't late night</Text>
          <Text style={styles.textt}>• Beans can cause gas/bloating. Soak 6-8 hours, throw water, then cook fresh water.</Text>
          <Text style={styles.textt}>• Better: Light soups with beans, not heavy gari + beans late at night — heartburn.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA MARKET SWAP • SAME NUTRIENTS</Text>
          <Text style={styles.bullet}>• Lentils (GH₵60 expensive) = <Text style={styles.price}>Black-eyed peas GH₵10/cup</Text> — same folate, local</Text>
          <Text style={styles.bullet}>• Hummus / Edamame (not in Ghana) = Boiled groundnuts + gari (yoo ke gari) — protein</Text>
          <Text style={styles.bullet}>• Tofu / Tempeh = Soya kebab or soya beans powder in tom brown — market</Text>
          <Text style={styles.bullet}>• Tip: Add <Text style={styles.bold}>small dry fish to beans stew</Text> to add iron without meat cost GH₵5.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK • AFLATOXIN ALERT</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Well-cooked beans, groundnuts freshly roasted same day, bambara beans.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Caution: Beans giving severe bloating/heartburn — eat small + water. Old groundnuts with mould — throw (aflatoxin causes harm).</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Raw/half-cooked beans, groundnuts with white/green mould, street beans kept 2+ days without fridge.</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.headerText2Light}>💡 IRON ABSORPTION TRICK</Text>
          <Text style={styles.tipText}>Combine legumes with Vitamin C (orange, tomatoes, kontomire) to help iron enter blood. Don't drink tea right after beans — tea blocks iron. Take prenatal vitamins daily.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Remind Partner to Soak Beans →</Text>
          <Text style={styles.partnerSub}>Soak tonight GH₵10 • Cook tomorrow • No gas</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Week 20 • GH₵10 = 1 cup • Aboboi best local superfood</Text>
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
  pill: { backgroundColor: '#F4A26115', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#F4A261', letterSpacing: 0.8 },
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