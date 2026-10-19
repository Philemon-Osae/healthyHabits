import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native'

export default function Walking({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Text style={styles.backText}>‹</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>WALKING • NAMBA 🚶‍♀️</Text>
              <Text style={styles.subTitle}>Safe & simple • 10-20 mins daily • All trimesters</Text>
            </View>
          </View>
        </View>

        <View style={styles.innerPadding}>
          <View style={styles.heroCard}>
            <View style={styles.heroRow}>
              <Text style={styles.heroEmoji}>🚶‍♀️</Text>
              <View style={styles.heroTextWrap}>
                <Text style={styles.heroTitle}>Why Walk? Best for Ghana Mums</Text>
                <Text style={styles.heroText}>Blood flow, reduces swelling, improves sleep, makes delivery easier. No gym needed.</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>HOW TO WALK SAFELY • 4 STEPS</Text>

          <View style={styles.stepCard}>
            <View style={[styles.stepNum, { backgroundColor: '#111' }]}><Text style={styles.stepNumText}>1</Text></View>
            <View style={styles.stepTextWrap}>
              <Text style={styles.stepTitle}>Time It Right — Avoid Hot Sun</Text>
              <Text style={styles.stepDesc}>Walk early morning 6-7am or evening 5-6pm when sun cool. Not afternoon 12-3pm hot sun. Accra heat dangerous.</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={[styles.stepNum, { backgroundColor: '#2A9D8F' }]}><Text style={styles.stepNumText}>2</Text></View>
            <View style={styles.stepTextWrap}>
              <Text style={styles.stepTitle}>Start Small — 1000 Steps = 10 mins</Text>
              <Text style={styles.stepDesc}>Week 1: 10 mins. Week 2: 15 mins. Week 3: 20 mins. No rushing. Wear flat slippers or sneakers, not heels.</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={[styles.stepNum, { backgroundColor: '#FFB703' }]}><Text style={styles.stepNumText}>3</Text></View>
            <View style={styles.stepTextWrap}>
              <Text style={styles.stepTitle}>Posture — Back Straight</Text>
              <Text style={styles.stepDesc}>Back straight, shoulders relaxed, look forward. Hold belly lightly if needed. Breathe in nose, out mouth. Small steps.</Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={[styles.stepNum, { backgroundColor: '#D90429' }]}><Text style={styles.stepNumText}>4</Text></View>
            <View style={styles.stepTextWrap}>
              <Text style={styles.stepTitle}>Stop Signs 🛑 — Stop Immediately</Text>
              <Text style={styles.stepDesc}>Stop if dizzy, bleeding, strong contractions, headache, baby not moving, water break. Sit + call midwife.</Text>
            </View>
          </View>

          <View style={styles.benefitBox}>
            <Text style={styles.benefitTitle}>✨ MIDWIFE TIP • GHANA STYLE</Text>
            <Text style={styles.benefitText}>Carry small water bottle (Verna GH₵5). Walk with someone — husband or friend. Count 1000 steps ≈ 10 mins. After walk, sit, put legs up on stool, drink water. Shea butter on legs at night stops cramps.</Text>
          </View>

          <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • 20 mins daily = healthy baby • HEALTHY HABITS</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F5F2' },
    scrollContent: { paddingBottom: 30 },
    header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
    headerRow: { flexDirection: 'row', alignItems: 'center' },
    backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
    backText: { fontSize: 22, color: '#111', fontWeight: '300', marginTop: -2 },
    title: { fontSize: 14, fontWeight: '800', color: '#111', letterSpacing: 0.5 },
    subTitle: { fontSize: 11, color: '#999', marginTop: 2, fontWeight: '500' },
    innerPadding: { paddingHorizontal: 16, paddingTop: 16 },
    heroCard: { backgroundColor: '#111', borderRadius: 20, padding: 16, marginBottom: 6 },
    heroRow: { flexDirection: 'row', alignItems: 'center' },
    heroEmoji: { fontSize: 32, marginRight: 12 },
    heroTextWrap: { flex: 1 },
    heroTitle: { color: '#fff', fontWeight: '800', fontSize: 14 },
    heroText: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 4, lineHeight: 16, fontWeight: '500' },
    sectionTitle: { fontSize: 10, fontWeight: '800', marginTop: 18, marginBottom: 6, color: '#999', letterSpacing: 1 },
    stepCard: { backgroundColor: '#fff', borderRadius: 16, padding: 14, flexDirection: 'row', marginTop: 8, borderWidth: 1, borderColor: '#f2f2f2' },
    stepNum: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12, marginTop: 1 },
    stepNumText: { color: '#fff', fontWeight: '800', fontSize: 13 },
    stepTextWrap: { flex: 1 },
    stepTitle: { fontWeight: '800', fontSize: 13, color: '#111' },
    stepDesc: { fontSize: 12, color: '#666', marginTop: 3, lineHeight: 17, fontWeight: '500' },
    benefitBox: { backgroundColor: '#FFFDF5', borderRadius: 16, padding: 14, marginTop: 14, borderWidth: 1, borderColor: '#FFF3CD', borderLeftWidth: 4, borderLeftColor: '#FFB703' },
    benefitTitle: { fontWeight: '800', color: '#856404', fontSize: 10, letterSpacing: 1 },
    benefitText: { color: '#856404', fontSize: 12, marginTop: 6, lineHeight: 17, fontWeight: '500' },
    footer: { textAlign: 'center', marginTop: 20, color: '#bbb', fontSize: 10 }
})