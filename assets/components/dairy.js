import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Dairy({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>DAIRY • ME NUFOSUO 🥛</Text>
            <Text style={styles.subHeader}>Week-based • Calcium for bones • Ghana prices</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.trimesterPill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>Early Bones</Text>
          <Text style={styles.textt1}>1-2 cups per day • Kuruwa 1-2</Text>
          <Text style={styles.textt}>If morning sickness makes you hate milk smell, try cold yoghurt or brukina without too much sugar. Calcium now helps build baby's first bones.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.trimesterPill, { backgroundColor: '#F4A26115' }]}><Text style={[styles.pillText, { color: '#F4A261' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>Fast Growth</Text>
          <Text style={styles.textt1}>2-3 cups per day • FanYogo or milk + Milo</Text>
          <Text style={styles.textt}>Baby's bones and teeth are hardening fast. You need extra calcium. Try FanYogo (200ml) or 1 cup fresh milk with Milo in the evening.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.trimesterPill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>Heartburn Safe</Text>
          <Text style={styles.textt1}>2 cups max • Low-fat • Plain yoghurt</Text>
          <Text style={styles.textt}>Too much full-cream milk can cause heartburn. Switch to low-fat milk or plain yoghurt. Take with meals, not on empty stomach at night.</Text>
        </View>

        {/* GHANAIAN SWAP - PREMIUM */}
        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA MARKET SWAP • PRICE TODAY</Text>
          <Text style={styles.textt}>Can't afford or tolerate fresh milk?</Text>
          <Text style={styles.bullet}>• 1 cup milk = 1 cup brukina (millet + milk) - <Text style={styles.price}>GH₵15 at Circle</Text></Text>
          <Text style={styles.bullet}>• 1 cup yoghurt = 1 cup soya milk + 2 spoons groundnut paste</Text>
          <Text style={styles.bullet}>• Budget: Ideal / Peak powdered milk sachet — mix with warm water, not too light.</Text>
          <Text style={styles.bullet}>• Lactose issue? Use <Text style={styles.bold}>nkontomire + small dry fish</Text> for calcium — free if farm.</Text>
        </View>

        {/* TRAFFIC LIGHT */}
        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK • FOR BABY</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Pasteurized milk, boiled fresh cow milk, sealed yoghurt.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Ask Midwife: Unpasteurized brukina from roadside, soft wagashi left overnight.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Raw unboiled cow milk, expired yoghurt, sour smell. Go to clinic if diarrhea after dairy.</Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.headerText2}>✨ WHY DAIRY MATTERS</Text>
          <Text style={styles.benefit}><Text style={styles.bold}>1.</Text> Calcium for baby's bones & teeth + protects your bones (no back pain).</Text>
          <Text style={styles.benefit}><Text style={styles.bold}>2.</Text> Protein for baby's growth and your energy — stop tiredness.</Text>
          <Text style={styles.benefit}><Text style={styles.bold}>3.</Text> Vitamin D helps calcium enter body — sit in morning sun 10 mins.</Text>
          <Text style={styles.benefit}><Text style={styles.bold}>4.</Text> Probiotics in yoghurt help reduce constipation & vaginal infection.</Text>
          <Text style={styles.benefit}><Text style={styles.bold}>5.</Text> Warm milk at night = sleep better. Try with small honey.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Remind Partner to Buy Milk →</Text>
          <Text style={styles.partnerSub}>Share GH₵15 list • Circle, Kaneshie</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Trusted by Ghana Health Service • Pastuerized only • Week {20} tip</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 55,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  backText: { fontSize: 22, color: '#111', fontWeight: '300', marginTop: -2 },
  headerText: {
    fontSize: 14,
    color: '#111',
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  subHeader: {
    fontSize: 11,
    color: '#999',
    marginTop: 2,
    fontWeight: '500',
  },
  scrollContent: { padding: 16, paddingBottom: 40 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  trimesterPill: { backgroundColor: '#8ECAE615', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#8ECAE6', letterSpacing: 0.8 },
  swapCard: {
    backgroundColor: '#FFFDF5',
    borderLeftWidth: 4,
    borderLeftColor: '#FFB703',
    borderWidth: 1,
    borderColor: '#FFF3CD',
  },
  safetyCard: {
    backgroundColor: '#F6FBFF',
    borderLeftWidth: 4,
    borderLeftColor: '#219EBC',
    borderWidth: 1,
    borderColor: '#E0F2FE',
  },
  benefitCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 12 },
  headerText1: {
    fontSize: 16,
    color: '#111',
    fontWeight: '800',
    marginBottom: 4,
  },
  headerText2: {
    fontSize: 10,
    color: '#999',
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: 1,
  },
  textt: {
    fontSize: 13,
    color: '#555',
    lineHeight: 19,
    marginBottom: 6,
    fontWeight: '500',
  },
  textt1: {
    fontSize: 13,
    color: '#111',
    fontWeight: '700',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 12.5,
    color: '#444',
    lineHeight: 20,
    marginTop: 6,
  },
  price: { color: '#2A9D8F', fontWeight: '800', backgroundColor: '#2A9D8F15', paddingHorizontal: 4 },
  bold: { fontWeight: '800', color: '#111' },
  benefit: { fontSize: 12.5, color: '#fff', lineHeight: 19, marginBottom: 8, fontWeight: '500' },
  light: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  green: { color: '#2A9D8F' },
  yellow: { color: '#B45309' },
  red: { color: '#D90429', fontWeight: '700' },
  partnerBtn: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  partnerBtnText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
  },
  partnerSub: { color: 'rgba(255,255,255,0.5)', fontSize: 10, marginTop: 3, fontWeight: '600' },
  footer: { textAlign: 'center', color: '#bbb', fontSize: 10, marginTop: 18 }
})