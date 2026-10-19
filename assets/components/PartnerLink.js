import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '../../UserContext'; // <-- ADDED

export const PartnerLink = ({ navigation }) => {
  const { userName } = useContext(UserContext); // Gets Phil, Chris, whatever typed at signup
  const displayName = userName || 'Phil'; // Fallback if no name yet

  const sendSMS = (msg) => {
    const phone = ""; // partner number from storage later
    Linking.openURL(`sms:${phone}?body=${encodeURIComponent(msg)}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>‹ Back</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Partner Support • Gyae Su</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.cardBlue}>
          <Text style={styles.cardLabel}>FOR PARTNER • Maame + Papa</Text>
          <Text style={styles.cardTitle}>Help {displayName} stay healthy this week</Text>
          <Text style={styles.cardSub}>Week 20 - Baby is Cocoa Pod size. 3 days to ANC.</Text>
        </View>

        <Text style={styles.section}>TAP TO SEND SMS • Free, no data</Text>

        <TouchableOpacity style={styles.card} onPress={() => sendSMS(`${displayName} needs kontomire + garden eggs today for blood. Can you buy from market? - Healthy Habits`)}>
          <View style={styles.icon}><Text>🥬</Text></View>
          <View style={{flex:1, marginLeft: 12}}>
            <Text style={styles.title}>Remind Partner to Buy Vegetables</Text>
            <Text style={styles.sub}>Kontomire, garden eggs - for {displayName}'s blood tonic</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => sendSMS(`Reminder: ${displayName}'s ANC is 24 Oct at Korle Bu 8am. Please remind her to bring Pink Book + urine. - Healthy Habits`)}>
          <View style={styles.icon}><Text>🏥</Text></View>
          <View style={{flex:1, marginLeft: 12}}>
            <Text style={styles.title}>Remind Partner About ANC</Text>
            <Text style={styles.sub}>{displayName}'s ANC • 24 Oct • Korle Bu • 8am • 3 days left</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => sendSMS(`${displayName} took blood tonic today - 5 days streak! Ayekoo to her. - Healthy Habits`)}>
          <View style={styles.icon}><Text>💊</Text></View>
          <View style={{flex:1, marginLeft: 12}}>
            <Text style={styles.title}>Share Blood Tonic Progress</Text>
            <Text style={styles.sub}>Ayekoo! {displayName} - 5 days streak - mogya aduru</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Works with any phone • No internet needed for partner • SMS opens automatically</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F5F2' },
  header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#eee' },
  back: { fontSize: 16, color: '#219EBC', fontWeight: '600' },
  headerTitle: { fontSize: 18, fontWeight: '800', marginTop: 8, color: '#111' },
  scroll: { padding: 16, paddingBottom: 100 },
  cardBlue: { backgroundColor: '#219EBC', borderRadius: 20, padding: 18, marginBottom: 16 },
  cardLabel: { fontSize: 9, fontWeight: '800', color: 'rgba(255,255,255,0.7)', letterSpacing: 0.6 },
  cardTitle: { fontSize: 16, fontWeight: '800', color: '#fff', marginTop: 6 },
  cardSub: { fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  section: { fontSize: 10, fontWeight: '800', color: '#aaa', letterSpacing: 1, marginBottom: 10, marginTop: 8 },
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 14, flexDirection: 'row', alignItems: 'center', marginBottom: 12, elevation: 3 },
  icon: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 13, fontWeight: '700', color: '#111' },
  sub: { fontSize: 11, color: '#777', marginTop: 2 },
  arrow: { fontSize: 18, color: '#ccc', marginLeft: 8 },
  footer: { textAlign: 'center', fontSize: 10, color: '#bbb', marginTop: 20 }
});