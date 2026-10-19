import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

export default function Fruits({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>FRUITS • ADUA 🍊</Text>
            <Text style={styles.subHeader}>GH₵5 for 5 oranges • Pawpaw + Mango local</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.card}>
          <View style={styles.pill}><Text style={styles.pillText}>1ST TRIMESTER • WEEKS 1-12</Text></View>
          <Text style={styles.headerText1}>Stop Nausea • Sour Helps</Text>
          <Text style={styles.textt1}>2 servings • Orange small slices</Text>
          <Text style={styles.textt}>Helps with nausea and constipation. Sour fruits like orange and pineapple (small amount) help you feel better in the morning. Eat before brushing.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#F4A26115' }]}><Text style={[styles.pillText, { color: '#F4A261' }]}>2ND TRIMESTER • WEEKS 13-27</Text></View>
          <Text style={styles.headerText1}>Vitamin C • Skin & Iron</Text>
          <Text style={styles.textt1}>2-3 servings • Variety time</Text>
          <Text style={styles.textt}>Baby needs Vitamin C for skin and iron absorption. This is the time to enjoy variety — mango season is your friend.</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.pill, { backgroundColor: '#2A9D8F15' }]}><Text style={[styles.pillText, { color: '#2A9D8F' }]}>3RD TRIMESTER • WEEKS 28-40</Text></View>
          <Text style={styles.headerText1}>Fibre • Whole Fruit, Not Juice</Text>
          <Text style={styles.textt1}>3-4 servings • Don't juice all</Text>
          <Text style={styles.textt}>Helps with swelling and digestion, but don't juice everything — eat whole fruit for fibre. Avoid too much banana at night if you have heartburn.</Text>
        </View>

        <View style={[styles.card, styles.swapCard]}>
          <Text style={styles.headerText2}>🇬🇭 GHANA MARKET SWAP • BEST CHOICES</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Citrus:</Text> Oranges, tangerines - <Text style={styles.price}>GH₵5 for 5 at Circle</Text>. Best for Vitamin C & cheap.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Local power:</Text> Pawpaw (rich folate), Mango (Vitamin A), Watermelon (water + cooling in hot season)</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Banana:</Text> One a day for potassium — controls blood pressure, stops leg cramps at night.</Text>
          <Text style={styles.bullet}>• <Text style={styles.bold}>Budget tip:</Text> Berries & apples imported & expensive GH₵30+. Same nutrients: Use orange + pawpaw + banana = GH₵15.</Text>
          <Text style={styles.bullet}>• Eat fresh. Dried fruits high sugar — small handful only, not everyday.</Text>
        </View>

        <View style={[styles.card, styles.safetyCard]}>
          <Text style={styles.headerText2}>🚦 SAFETY CHECK • WASH WELL</Text>
          <Text style={[styles.light, styles.green]}>🟢 GREEN - Safe: Washed fresh fruits, whole fruits with skin removed, peeled by you.</Text>
          <Text style={[styles.light, styles.yellow]}>🟡 YELLOW - Limit: Pineapple 1 slice ok (not whole), Juice max 1 cup 100%, Grapes if not washed well.</Text>
          <Text style={[styles.light, styles.red]}>🔴 RED - Avoid: Unwashed roadside fruits, pre-cut fruits in open bowl, juice with saccharine. Wash with salt water.</Text>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.headerText2Light}>💡 QUICK TIP • HOW TO WASH</Text>
          <Text style={styles.tipText}>Wash all fruits with clean water + small salt. Soak 5 mins. Pregnant women should eat fresh, not juice. Limit juice to 1 cup per day.</Text>
        </View>

        <TouchableOpacity style={styles.partnerBtn} activeOpacity={0.85}>
          <Text style={styles.partnerBtnText}>Ask Partner to Buy Fruits Today →</Text>
          <Text style={styles.partnerSub}>Circle GH₵5 • Pawpaw GH₵10 • Seasonal best</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Week 20 • 2 oranges = daily Vitamin C • Local better than imported</Text>
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
  pill: { backgroundColor: '#E76F5115', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#E76F51', letterSpacing: 0.8 },
  swapCard: { backgroundColor: '#FFFDF5', borderLeftWidth: 4, borderLeftColor: '#FFB703', borderColor: '#FFF3CD' },
  safetyCard: { backgroundColor: '#F6FBFF', borderLeftWidth: 4, borderLeftColor: '#219EBC', borderColor: '#E0F2FE' },
  tipCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 12 },
  headerText1: { fontSize: 16, color: '#111', fontWeight: '800', marginBottom: 4 },
  headerText2: { fontSize: 10, color: '#999', fontWeight: '800', marginBottom: 10, letterSpacing: 1 },
  headerText2Light: { fontSize: 10, color: '#aaa', fontWeight: '800', marginBottom: 8, letterSpacing: 1 },
  textt: { fontSize: 13, color: '#555', lineHeight: 19, marginBottom: 6, fontWeight: '500' },
  textt1: { fontSize: 13, color: '#111', fontWeight: '700', marginBottom: 6 },
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