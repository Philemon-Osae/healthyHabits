import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function BendBack({navigation}) {
  const player = useVideoPlayer(require('../videos/bendBackwards.mp4'), player => {
    player.loop = true;
  });

  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Header - premium white */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Text style={styles.backText}>‹</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>BEND BACKWARDS • STRETCH 🙆‍♀️</Text>
              <Text style={styles.subTitle}>2 mins • 2nd trimester • Back pain relief</Text>
            </View>
          </View>
        </View>

        <View style={styles.innerPadding}>
          {/* Video Card */}
          <View style={styles.videoCard}>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen
              contentFit="contain"
              nativeControls={false}
            />
            {!isPlaying && (
              <View style={styles.playOverlay}>
                <Text style={styles.overlayText}>Tap START below • 2 mins</Text>
              </View>
            )}
          </View>

          {/* Info - trimester pill style */}
          <View style={styles.infoCard}>
            <View style={styles.pill}><Text style={styles.pillText}>HOW TO • 4 REPS • SAFE</Text></View>
            <Text style={styles.infoTitle}>Stand straight, hands on lower back</Text>
            <Text style={styles.infoText}>1. Stand straight, hands on lower back support{"\n"}2. Feet firm on floor shoulder width{"\n"}3. Gently arch back small — not too much{"\n"}4. Breathe in, hold 3 secs, feel stretch{"\n"}5. Return slowly — repeat 4x only</Text>
          </View>

          <View style={styles.warningCard}>
            <Text style={styles.warningTitle}>⚠️ SAFETY • GHANA MUMS</Text>
            <Text style={styles.benefitText}>Small bend only! Don't force. If dizzy, stop & sit. Best for back pain from standing at market / cooking. Do NOT do in last month (week 36+) — do Stand & Stretch instead. Ask midwife at ANC if high BP.</Text>
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
              <Text style={styles.btnSub}>{isPlaying ? 'Breathe slowly' : '2 min exercise'}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.customButton, styles.finishBtn]}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Exercise')}
            >
              <Text style={styles.buttonText}>✓ DONE</Text>
              <Text style={styles.btnSubDark}>Back to list</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>Week 20 • Back pain common • Small bends help • HEALTHY HABITS</Text>
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
  videoCard: { backgroundColor: '#000', borderRadius: 24, overflow: 'hidden', elevation: 0, borderWidth: 1, borderColor: '#eee' },
  video: { width: '100%', height: 420, alignSelf: 'center' },
  playOverlay: { position: 'absolute', bottom: 12, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  overlayText: { color: '#fff', fontSize: 11, fontWeight: '700' },

  infoCard: { backgroundColor: '#fff', borderRadius: 20, padding: 16, marginTop: 14, borderWidth: 1, borderColor: '#f2f2f2' },
  pill: { backgroundColor: '#219EBC15', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, marginBottom: 8 },
  pillText: { fontSize: 9, fontWeight: '800', color: '#219EBC', letterSpacing: 0.8 },
  infoTitle: { fontWeight: '800', fontSize: 15, color: '#111' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20, fontWeight: '500' },

  warningCard: { backgroundColor: '#FFF3E0', borderRadius: 16, padding: 14, marginTop: 12, borderWidth: 1, borderColor: '#FFE0B2' },
  warningTitle: { fontSize: 10, fontWeight: '800', color: '#E65100', letterSpacing: 1, marginBottom: 6 },
  benefitText: { fontSize: 12, color: '#BF360C', lineHeight: 18, fontWeight: '500' },

  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18, gap: 12 },
  customButton: { flex: 1, height: 60, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  playBtn: { backgroundColor: '#111' },
  finishBtn: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee' },
  buttonText: { fontSize: 14, color: 'white', fontWeight: '800', letterSpacing: 0.8 },
  btnSub: { fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2, fontWeight: '600' },
  btnSubDark: { fontSize: 10, color: '#999', marginTop: 2, fontWeight: '600' },

  footer: { textAlign: 'center', marginTop: 20, color: '#bbb', fontSize: 10 }
});