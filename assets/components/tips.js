import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TIPS = [
  { id: 1, emoji: '💧', title: 'Drink Water First', desc: 'Start your day with 2 glasses of water before tea. Aim 2-3L daily. Your skin & baby will glow.', color: '#E0F7FA', border: '#219EBC' },
  { id: 2, emoji: '🥗', title: 'Eat Local, Eat Fresh', desc: 'Kontomire, garden eggs, okro, beans. Local foods have more iron than imported ones.', color: '#E8F5E9', border: '#2A9D8F' },
  { id: 3, emoji: '🚶‍♀️', title: 'Move Small', desc: '10 min walk morning + evening. No need gym. Helps sleep & reduces swelling.', color: '#FFF3E0', border: '#F4A261' },
  { id: 4, emoji: '😴', title: 'Sleep by 10pm', desc: 'Body repairs at night. Put phone away, sleep on your left side with pillow between legs.', color: '#F3E5F5', border: '#9C27B0' },
  { id: 5, emoji: '🧘‍♀️', title: 'Breathe & Calm', desc: 'Stressed? Inhale 4 secs, hold 2, exhale 6. Do 3 times. Good for baby heartbeat.', color: '#FFE5EC', border: '#E76F51' },
  { id: 6, emoji: '🧂', title: 'Less Salt, Less Maggi', desc: 'Too much salt = swelling & high BP. Use more onions, ginger, dawadawa for taste.', color: '#FFF8E1', border: '#FFB703' },
  { id: 7, emoji: '🤝', title: 'Talk to Midwife', desc: 'Don’t google alone. Attend ANC regularly. Ask about folic acid & tetanus shots.', color: '#E0F2F1', border: '#00695C' },
];

export default function Tips() {
  const [openId, setOpenId] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DAILY TIPS</Text>
        <Text style={styles.subHeader}>HEALTHY HABITS • Small changes, big health</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.featuredCard}>
          <Text style={styles.featuredEmoji}>✨</Text>
          <Text style={styles.featuredTitle}>Tip of the Day</Text>
          <Text style={styles.featuredText}>“Health is not one big thing, it’s 10 small habits you do every day.”</Text>
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
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.arrow}>{openId === tip.id ? '▲' : '▼'}</Text>
            </View>
            {openId === tip.id && (
              <Text style={styles.tipDesc}>{tip.desc}</Text>
            )}
          </TouchableOpacity>
        ))}

        <Text style={styles.footer}>Made with ❤️ for Ghanaian mothers • HEALTHY HABITS</Text>
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
    backgroundColor: '#D90429',
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
    color: '#FFD1DC',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 18,
    fontStyle: 'italic',
  },
  tipCard: {
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
    borderLeftWidth: 5,
    elevation: 2,
    backgroundColor: '#fff',
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
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  arrow: {
    fontSize: 12,
    color: '#666',
  },
  tipDesc: {
    marginTop: 10,
    fontSize: 13,
    color: '#444',
    lineHeight: 19,
    marginLeft: 35,
  },
  footer: {
    textAlign: 'center',
    marginTop: 25,
    color: '#aaa',
    fontSize: 11,
  }
});