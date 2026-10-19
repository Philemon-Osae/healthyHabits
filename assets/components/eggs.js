import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Eggs({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>EGGS • NKOSUA 🥚</Text>
            <Text style={styles.subHeader}>1 crate cheaper Saturday • Kaneshie price</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.pill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>Stop Nausea</Text>
          <Text style={styles.textt1}>1-2 eggs per day • Boiled easy</Text>
          <Text style={styles.textt}>Best for morning sickness: Boiled eggs are easy to digest and stop nausea. Avoid raw eggs in salad or mayonnaise from roadside.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#F4A26115' }]}><Text style={[styles.pillText, { color: '#F4A261' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>Brain Growth • Choline</Text>
          <Text style={styles.textt1}>1-2 eggs • Pair with kontomire</Text>
          <Text style={styles.textt}>Baby's brain is growing fast. Choline in egg yolk helps brain & spinal cord. Pair with kontomire or beans for iron. Most important weeks.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>Don't Overdo • Boiled {'>'} Fried</Text>
          <Text style={styles.textt1}>1 egg + beans / fish • Check cholesterol</Text>
          <Text style={styles.textt}>Don't overdo to avoid excess weight. Boiled {'>'} Fried. If you have high cholesterol or high BP, speak to your midwife at ANC.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA MARKET SWAP • SAME PROTEIN</Text>
          <Text style={styles.bullet}>• 1 crate cheaper Saturday at <Text style={styles.price}>Kaneshie GH₵90-110</Text> — share with neighbour</Text>
          <Text style={styles.bullet}>• No eggs today? 1 cup beans (GH₵10) + 1 small tilapia = same protein</Text>
          <Text style={styles.bullet}>• Budget hack: 2 boiled eggs = 1 groundnut sachet + 1 egg — keep you full till evening</Text>
          <Text style={styles.bullet}>• Madina tip: Buy boiled eggs 3 for GH₵10 from trusted seller only if hot & fresh.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Well-cooked, boiled or fried till hard yolk. Eat same day.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Ask Midwife: You have high BP or cholesterol, swelling too much.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Go to Clinic NOW if: Vomiting + rash after eggs, or severe stomach pain after eating.</Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.headerText2Light}>✨ WHY EGGS MATTERS • NKOSUA</Text>
          <Text style={styles.benefit}>1. High-quality protein for baby's cells and organs — build body.</Text>
          <Text style={styles.benefit}>2. Choline for baby's brain — one of best sources, better than import supplements.</Text>
          <Text style={styles.benefit}>3. Vitamin D, B12, Folate, Iron & Zinc for your blood — stop anaemia.</Text>
          <Text style={styles.benefit}>4. DHA (in enriched eggs) for baby's eyes and brain — ask for omega eggs.</Text>
          <Text style={styles.benefit}>5. Easy to digest when nausea or heartburn comes — morning safe food.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Share with Partner / Husband →</Text>
          <Text style={styles.partnerSub}>Crate GH₵90 • Kaneshie Saturday • 30 eggs</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Week 20 • 1 egg = 6g protein • Ghana Health Service approved</Text>
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
  pill: { backgroundColor: '#FFB70315', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#FFB703', letterSpacing: 0.8 },
  swapCard: { backgroundColor: '#FFFDF5', borderLeftWidth: 4, borderLeftColor: '#FFB703', borderColor: '#FFF3CD' },
  safetyCard: { backgroundColor: '#F6FBFF', borderLeftWidth: 4, borderLeftColor: '#219EBC', borderColor: '#E0F2FE' },
  benefitCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 12 },
  headerText1: { fontSize: 16, color: '#111', fontWeight: '800', marginBottom: 4 },
  headerText2: { fontSize: 10, color: '#999', fontWeight: '800', marginBottom: 10, letterSpacing: 1 },
  headerText2Light: { fontSize: 10, color: '#aaa', fontWeight: '800', marginBottom: 10, letterSpacing: 1 },
  textt: { fontSize: 13, color: '#555', lineHeight: 19, marginBottom: 6, fontWeight: '500' },
  textt1: { fontSize: 13, color: '#111', fontWeight: '700', marginBottom: 6 },
  bullet: { fontSize: 12.5, color: '#444', lineHeight: 20, marginTop: 6 },
  price: { color: '#2A9D8F', fontWeight: '800', backgroundColor: '#2A9D8F15' },
  benefit: { fontSize: 12.5, color: '#fff', lineHeight: 19, marginBottom: 8, fontWeight: '500' },
  light: { fontSize: 12, lineHeight: 18, marginBottom: 8, fontWeight: '600' },
  green: { color: '#2A9D8F' },
  yellow: { color: '#B45309' },
  red: { color: '#D90429', fontWeight: '700' },
  partnerBtn: { backgroundColor: '#111', paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 8 },
  partnerBtnText: { color: '#fff', fontWeight: '800', fontSize: 14 },
  partnerSub: { color: 'rgba(255,255,255,0.5)', fontSize: 10, marginTop: 3, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#bbb', fontSize: 10, marginTop: 18 }
})