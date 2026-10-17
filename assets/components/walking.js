import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'

export default function Walking({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>WALKING</Text>
          <Text style={styles.subTitle}>Safe & simple • 10-20 mins daily</Text>
        </View>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <Text style={styles.heroEmoji}>🚶‍♀️</Text>
          <Text style={styles.heroTitle}>Why Walk?</Text>
          <Text style={styles.heroText}>Helps blood flow, reduces swelling, improves sleep, makes delivery easier. Best exercise for Ghanaian mothers.</Text>
        </View>

        {/* How To */}
        <Text style={styles.sectionTitle}>How to Walk Safely</Text>

        <View style={styles.stepCard}>
          <View style={[styles.stepNum, { backgroundColor: '#2A9D8F' }]}><Text style={styles.stepNumText}>1</Text></View>
          <View style={styles.stepTextWrap}>
            <Text style={styles.stepTitle}>Time It Right</Text>
            <Text style={styles.stepDesc}>Walk early morning 6-7am or evening 5-6pm when sun is cool. Not afternoon hot sun.</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepNum, { backgroundColor: '#E76F51' }]}><Text style={styles.stepNumText}>2</Text></View>
          <View style={styles.stepTextWrap}>
            <Text style={styles.stepTitle}>Start Small</Text>
            <Text style={styles.stepDesc}>Week 1: 10 mins. Week 2: 15 mins. Week 3: 20 mins. No rushing. Wear flat slippers or sneakers.</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepNum, { backgroundColor: '#FFB703' }]}><Text style={styles.stepNumText}>3</Text></View>
          <View style={styles.stepTextWrap}>
            <Text style={styles.stepTitle}>Posture</Text>
            <Text style={styles.stepDesc}>Back straight, shoulders relaxed, look forward. Hold belly lightly if needed. Breathe in nose, out mouth.</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={[styles.stepNum, { backgroundColor: '#219EBC' }]}><Text style={styles.stepNumText}>4</Text></View>
          <View style={styles.stepTextWrap}>
            <Text style={styles.stepTitle}>Stop Signs 🛑</Text>
            <Text style={styles.stepDesc}>Stop walking if you feel dizzy, bleeding, strong contractions, headache, or baby not moving.</Text>
          </View>
        </View>

        {/* Benefits */}
        <View style={styles.benefitBox}>
          <Text style={styles.benefitTitle}>✨ Tip from Midwife</Text>
          <Text style={styles.benefitText}>Carry small water bottle. Walk with someone. Count 1000 steps ≈ 10 mins. After walk, sit, put legs up, drink water.</Text>
        </View>

        <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • HEALTHY HABITS</Text>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF9F0' },
    scrollContent: { paddingBottom: 30, paddingHorizontal: 20 },
    header: { marginTop: 50, marginBottom: 10 },
    backBtn: { backgroundColor: '#E0F2F1', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
    backText: { color: '#2A9D8F', fontWeight: '700' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#111', marginTop: 15 },
    subTitle: { fontSize: 13, color: '#888', marginTop: 4 },

    heroCard: { backgroundColor: '#2A9D8F', borderRadius: 20, padding: 20, alignItems: 'center', marginTop: 15, marginBottom: 10 },
    heroEmoji: { fontSize: 40 },
    heroTitle: { color: '#fff', fontWeight: 'bold', fontSize: 18, marginTop: 8 },
    heroText: { color: '#E0F2F1', fontSize: 13, textAlign: 'center', marginTop: 8, lineHeight: 19 },

    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },

    stepCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, flexDirection: 'row', marginTop: 12, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
    stepNum: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginRight: 12, marginTop: 2 },
    stepNumText: { color: '#fff', fontWeight: 'bold' },
    stepTextWrap: { flex: 1 },
    stepTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
    stepDesc: { fontSize: 13, color: '#666', marginTop: 4, lineHeight: 18 },

    benefitBox: { backgroundColor: '#FFF3CD', borderRadius: 16, padding: 16, marginTop: 20, borderLeftWidth: 4, borderLeftColor: '#FFB703' },
    benefitTitle: { fontWeight: 'bold', color: '#856404' },
    benefitText: { color: '#856404', fontSize: 13, marginTop: 6, lineHeight: 18 },

    footer: { textAlign: 'center', marginTop: 25, color: '#aaa', fontSize: 11 }
})