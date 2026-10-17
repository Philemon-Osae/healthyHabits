import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-video';

export default function Stand({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>STAND & STRETCH</Text>
          <Text style={styles.subTitle}>Relieve back pain • 2 mins • Safe in all trimesters</Text>
        </View>

        {/* Video Card */}
        <View style={styles.videoCard}>
          <Video
            ref={video}
            style={styles.video}
            source={require('../videos/standAndStretch.mp4')}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>

        {/* Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🧘‍♀️ How to do it</Text>
          <Text style={styles.infoText}>1. Stand behind chair for balance{"\n"}2. Raise arms slowly overhead{"\n"}3. Stretch up, breathe in 4 secs{"\n"}4. Exhale and lower arms{"\n"}5. Repeat 5 times</Text>
        </View>

        <View style={styles.benefitBox}>
          <Text style={styles.benefitText}>💡 Do this every 2 hours if you sit long. Helps reduce waist pain and swelling — common in Ghanaian mothers.</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.customButton, styles.playBtn]}
            onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
          >
            <Text style={styles.buttonText}>{status.isPlaying ? '⏸ PAUSE' : '▶ START'}</Text>
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
  backBtn: { backgroundColor: '#FFE0E6', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  backText: { color: '#D90429', fontWeight: '700' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#111', marginTop: 15 },
  subTitle: { fontSize: 12, color: '#888', marginTop: 4 },

  videoCard: { backgroundColor: '#000', borderRadius: 20, overflow: 'hidden', marginTop: 15, elevation: 5 },
  video: { width: '100%', height: 420, alignSelf: 'center' },

  infoCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginTop: 15, elevation: 2, borderLeftWidth: 4, borderLeftColor: '#2A9D8F' },
  infoTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  infoText: { fontSize: 13, color: '#555', marginTop: 8, lineHeight: 20 },

  benefitBox: { backgroundColor: '#E8F5E9', borderRadius: 12, padding: 14, marginTop: 12 },
  benefitText: { fontSize: 13, color: '#2A6B4F', lineHeight: 18 },

  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 12 },
  customButton: { flex: 1, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 3 },
  playBtn: { backgroundColor: '#111' },
  finishBtn: { backgroundColor: '#D90429' },
  buttonText: { fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 1 },

  footer: { textAlign: 'center', marginTop: 20, color: '#aaa', fontSize: 11 }
});