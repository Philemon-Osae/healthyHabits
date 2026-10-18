import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import { AudioButton } from './AudioButton'; // UNCOMMENT WHEN AUDIO UPDATE COMES

const TIPS = [
  { 
    id: 1, 
    emoji: '💧', 
    title: 'Drink Water First', 
    myth: 'Myth: Cold water harms baby?',
    truth: 'False. Cold or warm, water is safe. Start day with 2 glasses before tea. Aim 2-3L daily. Your skin & baby will glow.',
    twi: 'Nsuo nom mfiase',
    color: '#E0F7FA', 
    border: '#219EBC' 
  },
  { 
    id: 2, 
    emoji: '🐌', 
    title: 'Snails & Eggs', 
    myth: 'Myth: Eating snails/eggs makes baby drool or steal?',
    truth: 'False! Snails give iron. Eggs give protein for baby brain. Eat 1 egg daily if you can afford. Ayekoo!',
    twi: 'Nwa ne kosua ye ma mogya',
    color: '#E8F5E9', 
    border: '#2A9D8F' 
  },
  { 
    id: 3, 
    emoji: '🥗', 
    title: 'Eat Local, Eat Fresh', 
    myth: 'Myth: Need imported apples & berries?',
    truth: 'False. Kontomire has more iron than kale. Garden eggs, okro, beans, orange. Local foods cheaper & stronger. Mix kontomire + orange to absorb iron.',
    twi: 'Adidifoɔ pa',
    color: '#FFF3E0', 
    border: '#F4A261' 
  },
  { 
    id: 4, 
    emoji: '😴', 
    title: 'Sleep by 10pm', 
    myth: 'Myth: Sleep on back only?',
    truth: 'Sleep on left side best after 20 weeks. Put pillow between legs. Put phone away. Body repairs baby at night.',
    twi: 'Da anadwo',
    color: '#F3E5F5', 
    border: '#9C27B0' 
  },
  { 
    id: 5, 
    emoji: '🧂', 
    title: 'Less Salt, Less Maggi', 
    myth: 'Myth: Must eat a lot of salt for strength?',
    truth: 'Too much salt = swelling & high BP. Use more onions, ginger, dawadawa, prekese for taste. Check BP at ANC.',
    twi: 'Nkyene kakra',
    color: '#FFF8E1', 
    border: '#FFB703' 
  },
  { 
    id: 6, 
    emoji: '🚶‍♀️', 
    title: 'Move Small', 
    myth: 'Myth: No exercise when pregnant?',
    truth: 'False. 10 min walk morning + evening safe. Helps sleep, reduces swelling, makes labor easier. Avoid heavy lifting.',
    twi: 'Nantew kakra',
    color: '#E0F2F1', 
    border: '#00695C' 
  },
];

export default function Tips() {
  const [openId, setOpenId] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DAILY AGOO</Text>
        <Text style={styles.subHeader}>Myth vs Truth • Made for Ghanaian mothers</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.featuredCard}>
          <Text style={styles.featuredEmoji}>🎧</Text>
          <Text style={styles.featuredTitle}>Agoo! Listen & Learn - 30 sec</Text>
          <Text style={styles.featuredText}>“Health is not one big thing, it’s small truths you do every day. We break myths with science.”</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>NEW • MYTH BUSTING</Text></View>
        </View>

        {TIPS.map((tip) => (
          <TouchableOpacity 
            key={tip.id} 
            style={[styles.tipCard, { backgroundColor: tip.color, borderLeftColor: tip.border }]} 
            onPress={() => setOpenId(openId === tip.id ? null : tip.id)}
            activeOpacity={0.8}
          >
            <View style={styles.tipTop}>
              <Text style={styles.emoji}>{tip.emoji}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.twiText}>{tip.twi}</Text>
              </View>
              <Text style={styles.arrow}>{openId === tip.id ? '▲' : '▼'}</Text>
            </View>
            
            {openId === tip.id && (
              <View style={{ marginTop: 10, marginLeft: 35 }}>
                <View style={styles.mythBox}>
                  <Text style={styles.mythText}>{tip.myth}</Text>
                </View>
                <View style={styles.truthBox}>
                  <Text style={styles.truthLabel}>TRUTH:</Text>
                  <Text style={styles.tipDesc}>{tip.truth}</Text>
                </View>
                {/* <AudioButton text={tip.truth} /> AUDIO FOR NEXT UPDATE */}
                <Text style={styles.audioPlaceholder}>🔊 Audio coming next update • Twi + English</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • HEALTHY HABITS • Agoo!</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },
  subHeader: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  featuredCard: {
    backgroundColor: '#219EBC',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  featuredEmoji: {
    fontSize: 24,
  },
  featuredTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 6,
  },
  featuredText: {
    color: '#E0F7FA',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  badge: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 10,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#219EBC',
  },
  tipCard: {
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
    borderLeftWidth: 5,
    elevation: 2,
  },
  tipTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 22,
    width: 35,
  },
  tipTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  twiText: {
    fontSize: 10,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 2,
  },
  arrow: {
    fontSize: 12,
    color: '#666',
  },
  mythBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#fecaca',
    borderStyle: 'dashed',
  },
  mythText: {
    fontSize: 12,
    color: '#991b1b',
    fontStyle: 'italic',
  },
  truthBox: {
    marginTop: 8,
  },
  truthLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#15803d',
  },
  tipDesc: {
    marginTop: 4,
    fontSize: 13,
    color: '#444',
    lineHeight: 19,
  },
  audioPlaceholder: {
    marginTop: 10,
    fontSize: 10,
    color: '#219EBC',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 25,
    color: '#aaa',
    fontSize: 11,
  }
});