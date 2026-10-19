import { Text, View, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'

const TIPS = [
  { 
    id: 1, 
    emoji: '💧', 
    title: 'Drink Water First', 
    myth: 'Myth: Cold water harms baby?',
    truth: 'False. Cold or warm, water is safe. Start day with 2 glasses before tea. Aim 2-3L daily. Your skin & baby will glow.',
    twi: 'Nsuo nom mfiase',
    color: '#F6FBFF', 
    border: '#219EBC' 
  },
  { 
    id: 2, 
    emoji: '🐌', 
    title: 'Snails & Eggs', 
    myth: 'Myth: Eating snails/eggs makes baby drool or steal?',
    truth: 'False! Snails give iron. Eggs give protein for baby brain. Eat 1 egg daily if you can afford GH₵2. Ayekoo!',
    twi: 'Nwa ne kosua ye ma mogya',
    color: '#F6FFFB', 
    border: '#2A9D8F' 
  },
  { 
    id: 3, 
    emoji: '🥗', 
    title: 'Eat Local, Eat Fresh', 
    myth: 'Myth: Need imported apples & berries GH₵80?',
    truth: 'False. Kontomire GH₵5 has more iron than kale GH₵60. Garden eggs, okro, beans, orange. Local cheaper & stronger. Mix kontomire + orange to absorb iron.',
    twi: 'Adidifoɔ pa',
    color: '#FFFDF5', 
    border: '#FFB703' 
  },
  { 
    id: 4, 
    emoji: '😴', 
    title: 'Sleep by 10pm', 
    myth: 'Myth: Sleep on back only?',
    truth: 'Sleep on left side best after 20 weeks. Put pillow between legs. Put phone away. Body repairs baby at night. 8 hours.',
    twi: 'Da anadwo',
    color: '#FDF6FF', 
    border: '#9C27B0' 
  },
  { 
    id: 5, 
    emoji: '🧂', 
    title: 'Less Salt, Less Maggi', 
    myth: 'Myth: Must eat a lot of salt for strength?',
    truth: 'Too much salt = swelling & high BP. Use more onions, ginger, dawadawa, prekese for taste. Check BP at ANC. 1 Maggi not 3.',
    twi: 'Nkyene kakra',
    color: '#FFFDF5', 
    border: '#F4A261' 
  },
  { 
    id: 6, 
    emoji: '🚶‍♀️', 
    title: 'Move Small', 
    myth: 'Myth: No exercise when pregnant?',
    truth: 'False. 10 min walk morning + evening safe. Helps sleep, reduces swelling, makes labor easier. Avoid heavy lifting buckets.',
    twi: 'Nantew kakra',
    color: '#F6FFFB', 
    border: '#2A9D8F' 
  },
];

export default function Tips() {
  const [openId, setOpenId] = useState(1);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerText}>DAILY AGOO • ADVICE 🎧</Text>
            <Text style={styles.subHeader}>Myth vs Truth • For Ghanaian mothers • Twi + English</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.featuredCard}>
          <View style={styles.featuredRow}>
            <Text style={styles.featuredEmoji}>🎧</Text>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.featuredTitle}>Agoo! Listen & Learn - 30 sec</Text>
              <Text style={styles.featuredText}>“Health is not one big thing, it’s small truths you do every day. We break myths with science, not fear.”</Text>
            </View>
          </View>
          <View style={styles.badge}><Text style={styles.badgeText}>NEW • MYTH BUSTING • TWI AUDIO SOON</Text></View>
        </View>

        <Text style={styles.sectionTitle}>6 MYTHS GHANA MUMS HEAR • TAP TO OPEN</Text>

        {TIPS.map((tip) => (
          <TouchableOpacity 
            key={tip.id} 
            style={[styles.tipCard, { backgroundColor: tip.color, borderLeftColor: tip.border }]} 
            onPress={() => setOpenId(openId === tip.id ? null : tip.id)}
            activeOpacity={0.85}
          >
            <View style={styles.tipTop}>
              <View style={[styles.emojiWrap, { backgroundColor: tip.border + '18' }]}>
                <Text style={styles.emoji}>{tip.emoji}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.twiText}>{tip.twi} • {tip.id}/6</Text>
              </View>
              <View style={styles.arrowWrap}>
                <Text style={styles.arrow}>{openId === tip.id ? '▲' : '▼'}</Text>
              </View>
            </View>
            
            {openId === tip.id && (
              <View style={styles.openContent}>
                <View style={styles.mythBox}>
                  <Text style={styles.mythLabel}>MYTH WE HEAR</Text>
                  <Text style={styles.mythText}>{tip.myth}</Text>
                </View>
                <View style={styles.truthBox}>
                  <Text style={styles.truthLabel}>✓ TRUTH • SCIENCE</Text>
                  <Text style={styles.tipDesc}>{tip.truth}</Text>
                </View>
                <View style={styles.audioBox}>
                  <Text style={styles.audioPlaceholder}>🔊 Audio coming next update • Twi + English • GH₵0 data</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • 6 myths busted • HEALTHY HABITS • Agoo!</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F5F2' },
  header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  headerText: { fontSize: 14, fontWeight: '800', color: '#111', letterSpacing: 0.5 },
  subHeader: { fontSize: 11, color: '#999', marginTop: 2, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 30, paddingTop: 12 },
  featuredCard: { backgroundColor: '#111', borderRadius: 20, padding: 16 },
  featuredRow: { flexDirection: 'row', alignItems: 'center' },
  featuredEmoji: { fontSize: 28 },
  featuredTitle: { color: '#fff', fontWeight: '800', fontSize: 14 },
  featuredText: { color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 4, lineHeight: 16, fontWeight: '500' },
  badge: { backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, marginTop: 12, alignSelf: 'flex-start' },
  badgeText: { fontSize: 9, fontWeight: '800', color: '#111', letterSpacing: 0.8 },
  sectionTitle: { fontSize: 10, fontWeight: '800', color: '#999', letterSpacing: 1, marginTop: 18, marginBottom: 4 },
  tipCard: { borderRadius: 16, padding: 14, marginTop: 8, borderLeftWidth: 4, borderWidth: 1, borderColor: '#f0f0f0' },
  tipTop: { flexDirection: 'row', alignItems: 'center' },
  emojiWrap: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  emoji: { fontSize: 18 },
  tipTitle: { fontWeight: '800', fontSize: 13, color: '#111' },
  twiText: { fontSize: 10, color: '#999', fontWeight: '600', marginTop: 2, fontStyle: 'italic' },
  arrowWrap: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  arrow: { fontSize: 10, color: '#999' },
  openContent: { marginTop: 12 },
  mythBox: { backgroundColor: '#fff', borderRadius: 12, padding: 10, borderWidth: 1, borderColor: '#fecaca', borderStyle: 'dashed' },
  mythLabel: { fontSize: 9, fontWeight: '800', color: '#991b1b', letterSpacing: 0.8, marginBottom: 2 },
  mythText: { fontSize: 12, color: '#991b1b', fontStyle: 'italic', fontWeight: '600' },
  truthBox: { marginTop: 8, backgroundColor: '#fff', borderRadius: 12, padding: 10, borderWidth: 1, borderColor: '#f0f0f0' },
  truthLabel: { fontSize: 9, fontWeight: '800', color: '#2A9D8F', letterSpacing: 0.8 },
  tipDesc: { marginTop: 4, fontSize: 12.5, color: '#333', lineHeight: 18, fontWeight: '500' },
  audioBox: { marginTop: 8, backgroundColor: '#111', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, alignSelf: 'flex-start' },
  audioPlaceholder: { fontSize: 10, color: '#fff', fontWeight: '700' },
  footer: { textAlign: 'center', marginTop: 20, color: '#bbb', fontSize: 10 }
});