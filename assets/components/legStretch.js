import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function LegStretch({navigation}) {
  const player = useVideoPlayer(require('../videos/stretching-legs.mp4'), player => {
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
              <Text style={styles.title}>LEG STRETCH • NSU 🦵</Text>
              <Text style={styles.subTitle}>Reduce 2am cramps • Circulation • 3 mins</Text>
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
            <View style={styles.pill}><Text style={styles.pillText}>HOW TO • MAT NEEDED • 3 REPS</Text></View>
            <Text style={styles.infoTitle}>Sit on mat, flex feet towards you</Text>
            <Text style={styles.infoText}>1. Sit on mat, legs straight, back straight{"\n"}2. Flex feet towards you — toes up{"\n"}3. Reach towards toes gently, not force{"\n"}4. Hold 10 secs, breathe normally 4-6{"\n"}5. Repeat 3 times each leg — night best</Text>
          </View>

          <View style={styles.tipCard}>
            <Text style={styles.tipTitle}>💡 GHANA MUMS TIP • 2AM CRAMPS</Text>
            <Text style={styles.benefitText}>Very good at night! Helps prevent leg cramps that wake Ghanaian mothers at 2am. Do before sleeping, after fetching water. If cramp comes, flex foot up hard + massage with shea butter.</Text>
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
              <Text style={styles.btnSub}>Before sleep</Text>
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

          <Text style={styles.footer}>Week 20 • 2am cramps common • Stretch + banana helps • HEALTHY HABITS</Text>
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
  pill: { backgroundColor: '#FFB70315', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#FFB703', letterSpacing: 0.8 },
  infoTitle: { fontWeight: '800', fontSize: 15, color: '#111' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20, fontWeight: '500' },
  tipCard: { backgroundColor: '#FFFDF5', borderRadius: 16, padding: 14, marginTop: 12, borderWidth: 1, borderColor: '#FFF3CD', borderLeftWidth: 4, borderLeftColor: '#FFB703' },
  tipTitle: { fontSize: 10, fontWeight: '800', color: '#856404', letterSpacing: 1, marginBottom: 6 },
  benefitText: { fontSize: 12, color: '#856404', lineHeight: 18, fontWeight: '500' },
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