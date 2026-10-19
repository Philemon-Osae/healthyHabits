import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Water({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>WATER • NSU 💧</Text>
            <Text style={styles.subHeader}>Most important — 2.5L per day in Accra heat</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.pill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>Nausea Help • Sip Small</Text>
          <Text style={styles.textt1}>8 cups / 2 litres • Bottle by bed</Text>
          <Text style={styles.textt}>Helps with nausea, carries food to baby. Keep a bottle by your bed — sip small, don't gulp. Morning sickness needs small sips.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#219EBC15' }]}><Text style={[styles.pillText, { color: '#219EBC' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>Blood Increases • No Dizziness</Text>
          <Text style={styles.textt1}>10 cups / 2.5 litres • Accra heat</Text>
          <Text style={styles.textt}>Blood volume increases 50%. More water = better circulation, less dizziness in Accra heat. Trotro standing needs water.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>Swelling + Constipation Stop</Text>
          <Text style={styles.textt1}>10-12 cups / 2.5-3L • Don't 1L at once</Text>
          <Text style={styles.textt}>Reduces swelling, prevents constipation and early contractions. Don't drink 1 litre at once before sleeping — you will wake 5 times! Small small.</Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.headerText2Light}>✨ WHY WATER MATTERS • NSU</Text>
          <Text style={styles.benefit}>1. Carries nutrients to baby and helps placenta grow well — transport.</Text>
          <Text style={styles.benefit}>2. Controls body temperature — Ghana sun hot, you overheat faster pregnant.</Text>
          <Text style={styles.benefit}>3. More blood needs more water — helps deliver food to baby, no fainting.</Text>
          <Text style={styles.benefit}>4. Softens stool — stops constipation from iron tablets (red tablets).</Text>
          <Text style={styles.benefit}>5. Helps kidney wash waste — important when taking prenatal vitamins.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA PRACTICAL TIPS • REAL LIFE</Text>
          <Text style={styles.bullet}>• Pure water sachets OK, but better: Buy <Text style={styles.price}>Verna/Voltic bottle GH₵5 and refill</Text> — cheaper, less plastic.</Text>
          <Text style={styles.bullet}>• Don't wait thirsty — by then already dehydrated. Set phone alarm 3x day.</Text>
          <Text style={styles.bullet}>• Add slice of orange/lime if plain bores you. Avoid sugary drinks — Malta, Coke too much sugar.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Coconut water 1 cup = natural electrolytes</Text>, especially if vomiting or sweating in trotro.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Check urine:</Text> Light yellow = good 👍 Dark yellow/brown = drink more NOW + tell midwife.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK • NSU HO</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Treated water, boiled & cooled water, bottled water, coconut water fresh.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Cold water from open drum at market, ice from unknown source, sobolo with too much sugar.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Untreated well water, water with smell, drinking from same cup with many people when sick — infection.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Remind Partner: Fetch Water for Me →</Text>
          <Text style={styles.partnerSub}>Verna GH₵5 • Refill cheaper • Keep bottle by bed</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Week 20 • 2.5L = 5 Verna bottles • Light yellow urine = healthy</Text>
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
  pill: { backgroundColor: '#8ECAE615', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#219EBC', letterSpacing: 0.8 },
  benefitCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 12 },
  swapCard: { backgroundColor: '#FFFDF5', borderLeftWidth: 4, borderLeftColor: '#FFB703', borderColor: '#FFF3CD' },
  safetyCard: { backgroundColor: '#F6FBFF', borderLeftWidth: 4, borderLeftColor: '#219EBC', borderColor: '#E0F2FE' },
  headerText1: { fontSize: 16, color: '#111', fontWeight: '800', marginBottom: 4 },
  headerText2: { fontSize: 10, color: '#999', fontWeight: '800', marginBottom: 10, letterSpacing: 1 },
  headerText2Light: { fontSize: 10, color: '#aaa', fontWeight: '800', marginBottom: 8, letterSpacing: 1 },
  textt: { fontSize: 13, color: '#555', lineHeight: 19, marginBottom: 6, fontWeight: '500' },
  textt1: { fontSize: 13, color: '#111', fontWeight: '700', marginBottom: 6 },
  bullet: { fontSize: 12.5, color: '#444', lineHeight: 20, marginTop: 6 },
  bold: { fontWeight: '800', color: '#111' },
  price: { color: '#2A9D8F', fontWeight: '800', backgroundColor: '#2A9D8F15' },
  benefit: { fontSize: 12.5, color: '#fff', lineHeight: 19, marginBottom: 8, fontWeight: '500' },
  light: { fontSize: 12, lineHeight: 18, marginBottom: 8, fontWeight: '600' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#B45309' },
  red: { color: '#D90429', fontWeight: '700' },
  partnerBtn: { backgroundColor: '#219EBC', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 8 },
  partnerBtnText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  partnerSub: { color: 'rgba(255,255,255,0.7)', fontSize: 10, marginTop: 3, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#bbb', fontSize: 10, marginTop: 18 }
})