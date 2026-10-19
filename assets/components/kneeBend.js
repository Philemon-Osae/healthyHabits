import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function Knee({navigation}) {
  const player = useVideoPlayer(require('../videos/knees.mp4'), player => {
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
              <Text style={styles.title}>KNEE BEND • THIGHS 🦵</Text>
              <Text style={styles.subTitle}>Strengthen thighs • Ease delivery • 2 mins</Text>
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
            <View style={styles.pill}><Text style={styles.pillText}>HOW TO • CHAIR SUPPORT • 5 REPS</Text></View>
            <Text style={styles.infoTitle}>Stand with chair support — small bend</Text>
            <Text style={styles.infoText}>1. Stand with chair support, hold firm{"\n"}2. Feet shoulder-width apart, toes front{"\n"}3. Bend knees slightly, not deep squat{"\n"}4. Keep back straight, breathe in 4 out 6{"\n"}5. Hold 5 secs, stand up — repeat 5x</Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>⚠️ SAFETY • NO DEEP SQUATS</Text>
            <Text style={styles.benefitText}>Don't do deep squats! Small bend only 15cm. If you have pelvic pain, low baby, or waters broke, skip and do Walking instead. Ask midwife at ANC. Stop if dizzy.</Text>
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
              <Text style={styles.btnSub}>Chair needed</Text>
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

          <Text style={styles.footer}>Week 20 • Thighs strong = delivery easier • 5 reps only</Text>
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
  pill: { backgroundColor: '#9C27B015', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#9C27B0', letterSpacing: 0.8 },
  infoTitle: { fontWeight: '800', fontSize: 15, color: '#111' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20, fontWeight: '500' },
  warningCard: { backgroundColor: '#FCE4EC', borderRadius: 16, padding: 14, marginTop: 12, borderWidth: 1, borderColor: '#F8BBD0' },
  warningTitle: { fontSize: 10, fontWeight: '800', color: '#880E4F', letterSpacing: 1, marginBottom: 6 },
  benefitText: { fontSize: 12, color: '#880E4F', lineHeight: 18, fontWeight: '500' },
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