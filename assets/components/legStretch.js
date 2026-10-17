import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function LegStretch({navigation}) {
  const player = useVideoPlayer(require('../assets/videos/stretching-legs.mp4'), player => {
    player.loop = true;
  });
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>LEG STRETCH</Text>
          <Text style={styles.subTitle}>Reduce leg cramps • Improve circulation • 3 mins</Text>
        </View>

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
          <Text style={styles.infoTitle}>🦵 How to do it</Text>
          <Text style={styles.infoText}>1. Sit on mat, legs straight{"\n"}2. Flex feet towards you{"\n"}3. Reach towards toes gently{"\n"}4. Hold 10 secs, breathe normally{"\n"}5. Repeat 3 times each leg</Text>
        </View>

        <View style={styles.benefitBox}>
          <Text style={styles.benefitText}>💡 Very good at night! Helps prevent leg cramps that wake Ghanaian mothers at 2am. Do before sleeping.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.customButton, styles.playBtn]}
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
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.customButton, styles.finishBtn]}
            onPress={() => navigation.navigate('Exercise')}
          >
            <Text style={styles.buttonText}>✓ FINISH</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Made with ❤️ • HEALTHY HABITS</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F0' },
  scrollContent: { paddingBottom: 30, paddingHorizontal: 20 },
  header: { marginTop: 50, marginBottom: 10 },
  backBtn: { backgroundColor: '#E8F5E9', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  backText: { color: '#2A9D8F', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#111', marginTop: 15 },
  subTitle: { fontSize: 12, color: '#888', marginTop: 4 },
  videoCard: { backgroundColor: '#000', borderRadius: 20, overflow: 'hidden', marginTop: 15, elevation: 5 },
  video: { width: '100%', height: 420, alignSelf: 'center' },
  infoCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginTop: 15, elevation: 2, borderLeftWidth: 4, borderLeftColor: '#FFB703' },
  infoTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20 },
  benefitBox: { backgroundColor: '#FFF8E1', borderRadius: 12, padding: 14, marginTop: 12, borderLeftWidth: 4, borderLeftColor: '#FFB703' },
  benefitText: { fontSize: 13, color: '#856404', lineHeight: 18 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 12 },
  customButton: { flex: 1, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 3 },
  playBtn: { backgroundColor: '#111' },
  finishBtn: { backgroundColor: '#D90429' },
  buttonText: { fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 1 },
  footer: { textAlign: 'center', marginTop: 20, color: '#aaa', fontSize: 11 }
});