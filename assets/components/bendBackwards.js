import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

export default function BendBack({navigation}) {
  const player = useVideoPlayer(require('../assets/videos/bendBackwards.mp4'), player => {
    player.loop = true;
  });

  const [isPlaying, setIsPlaying] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>BEND BACKWARDS</Text>
          <Text style={styles.subTitle}>Relieve lower back pain • 2 mins • 2nd trimester</Text>
        </View>

        {/* Video Card */}
        <View style={styles.videoCard}>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            contentFit="contain"
            nativeControls={false}
          />
        </View>

        {/* Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🙆‍♀️ How to do it</Text>
          <Text style={styles.infoText}>1. Stand straight, hands on lower back{"\n"}2. Feet firm on floor{"\n"}3. Gently arch back a little{"\n"}4. Breathe in, hold 3 secs{"\n"}5. Return slowly — repeat 4x</Text>
        </View>

        <View style={styles.benefitBox}>
          <Text style={styles.benefitText}>⚠️ Small bend only! Don't force. If you feel dizzy, stop. Best for back pain from standing or market work. Do NOT do in last month — do Stand & Stretch instead.</Text>
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
  backBtn: { backgroundColor: '#E3F2FD', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  backText: { color: '#219EBC', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#111', marginTop: 15 },
  subTitle: { fontSize: 12, color: '#888', marginTop: 4 },

  videoCard: { backgroundColor: '#000', borderRadius: 20, overflow: 'hidden', marginTop: 15, elevation: 5 },
  video: { width: '100%', height: 420, alignSelf: 'center' },

  infoCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginTop: 15, elevation: 2, borderLeftWidth: 4, borderLeftColor: '#219EBC' },
  infoTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20 },

  benefitBox: { backgroundColor: '#FFF3E0', borderRadius: 12, padding: 14, marginTop: 12 },
  benefitText: { fontSize: 13, color: '#E65100', lineHeight: 18 },

  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 12 },
  customButton: { flex: 1, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 3 },
  playBtn: { backgroundColor: '#111' },
  finishBtn: { backgroundColor: '#D90429' },
  buttonText: { fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 1 },

  footer: { textAlign: 'center', marginTop: 20, color: '#aaa', fontSize: 11 }
});