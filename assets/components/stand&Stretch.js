import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function Stand({navigation}) {
  const player = useVideoPlayer(require('../videos/standAndStretch.mp4'), player => {
    player.loop = true;
  });
  const [isPlaying, setIsPlaying] = React.useState(false);
  
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
              <Text style={styles.title}>STAND & STRETCH • WAIST 🧘‍♀️</Text>
              <Text style={styles.subTitle}>All trimesters safe • Every 2 hours • 2 mins</Text>
            </View>
          </View>
        </View>

        <View style={styles.innerPadding}>
          <View style={styles.videoCard}>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen
              contentFit="contain"
              nativeControls={false}
            />
          </View>

          <View style={styles.infoCard}>
            <View style={styles.pill}><Text style={styles.pillText}>HOW TO • CHAIR BALANCE • 5 REPS</Text></View>
            <Text style={styles.infoTitle}>Stand behind chair, raise arms slowly</Text>
            <Text style={styles.infoText}>1. Stand behind chair for balance, hold{"\n"}2. Raise arms slowly overhead, straight{"\n"}3. Stretch up tall, breathe in 4 secs{"\n"}4. Exhale and lower arms slowly{"\n"}5. Repeat 5 times — every 2 hours</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>💡 EVERY 2 HOURS • MARKET & OFFICE</Text>
            <Text style={styles.benefitText}>Do this every 2 hours if you sit long at office, market, or sewing. Helps reduce waist pain and swelling — very common in Ghanaian mothers who stand/sit long. Safe till delivery day.</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.customButton, styles.playBtn]}
              activeOpacity={0.85}
              onPress={() => {
                if (player.playing) {
                  player.pause();
                  setIsPlaying(false);
                } else {
                  player.play();
                  setIsPlaying(true);
                }
              }}
            >
              <Text style={styles.buttonText}>{isPlaying ? '⏸ PAUSE' : '▶ START'}</Text>
              <Text style={styles.btnSub}>Safe always</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.customButton, styles.finishBtn]}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Exercise')}
            >
              <Text style={styles.buttonTextDark}>✓ DONE</Text>
              <Text style={styles.btnSubDark}>Back to list</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>All trimesters • Last month safe • Do every 2 hours • HEALTHY HABITS</Text>
        </View>
      </ScrollView>
    </View>
  );
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
  videoCard: { backgroundColor: '#000', borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: '#eee' },
  video: { width: '100%', height: 420, alignSelf: 'center' },
  infoCard: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginTop: 14, borderWidth: 1, borderColor: '#f2f2f2' },
  pill: { backgroundColor: '#2A9D8F15', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#2A9D8F', letterSpacing: 0.8 },
  infoTitle: { fontWeight: '800', fontSize: 15, color: '#111' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20, fontWeight: '500' },
  tipCard: { backgroundColor: '#E8F5E9', borderRadius: 16, padding: 14, marginTop: 12, borderWidth: 1, borderColor: '#C8E6C9' },
  tipTitle: { fontSize: 10, fontWeight: '800', color: '#2A6B4F', letterSpacing: 1, marginBottom: 6 },
  benefitText: { fontSize: 12, color: '#2A6B4F', lineHeight: 18, fontWeight: '500' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, gap: 12 },
  customButton: { flex: 1, height: 60, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  playBtn: { backgroundColor: '#111' },
  finishBtn: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' },
  buttonText: { fontSize: 14, color: 'white', fontWeight: '800', letterSpacing: 0.8 },
  buttonTextDark: { fontSize: 14, color: '#111', fontWeight: '800', letterSpacing: 0.8 },
  btnSub: { fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2, fontWeight: '600' },
  btnSubDark: { fontSize: 10, color: '#999', marginTop: 2, fontWeight: '600' },
  footer: { textAlign: 'center', marginTop: 20, color: '#bbb', fontSize: 10 }
});