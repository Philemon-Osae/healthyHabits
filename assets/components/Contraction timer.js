import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';

export default function ContractionTimer({ navigation }) {
  const [isContracting, setIsContracting] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [history, setHistory] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isContracting) {
      intervalRef.current = setInterval(() => setElapsed(p => p + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isContracting]);

  const format = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2,'0');
    const s = (sec % 60).toString().padStart(2,'0');
    return `${m}:${s}`;
  };

  const getAvgDuration = () => {
    if (history.length === 0) return '--';
    const avg = Math.round(history.reduce((a, b) => a + b.duration, 0) / history.length);
    return format(avg);
  };

  const getAdvice = () => {
    if (history.length < 3) return "Keep tracking 3-4 contractions";
    const last = history.slice(0, 3);
    const avg = last.reduce((a,b) => a + b.duration, 0) / 3;
    if (avg > 40) return "🔴 Strong contractions! Call your midwife now";
    if (avg > 25) return "🟡 Getting close — prepare hospital bag";
    return "🟢 Early labor — breathe, walk, hydrate";
  };

  const handlePress = () => {
    if (!isContracting) {
      setIsContracting(true);
      setElapsed(0);
    } else {
      setHistory(prev => [{
        id: Date.now().toString(),
        duration: elapsed,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }, ...prev]);
      setIsContracting(false);
      setElapsed(0);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contraction Timer</Text>
        <Text style={styles.headerSub}>HEALTHY HABITS • For Ghanaian Mothers</Text>
      </View>

      {/* Timer Card */}
      <View style={[styles.timerCard, isContracting && styles.timerCardActive]}>
        <View style={styles.pulseCircle}>
          <Text style={[styles.timerText, isContracting && styles.timerTextActive]}>{format(elapsed)}</Text>
        </View>
        <Text style={styles.statusText}>
          {isContracting ? '❤️ Contraction happening... Stay calm & breathe' : 'Press START when pain begins'}
        </Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>COUNT</Text>
            <Text style={styles.statValue}>{history.length}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>AVG DURATION</Text>
            <Text style={styles.statValue}>{getAvgDuration()}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>LAST</Text>
            <Text style={styles.statValue}>{history[0] ? format(history[0].duration) : '--:--'}</Text>
          </View>
        </View>

        {/* Advice */}
        <View style={styles.adviceBox}>
          <Text style={styles.adviceText}>{getAdvice()}</Text>
        </View>
      </View>

      {/* Big Button */}
      <TouchableOpacity onPress={handlePress} style={[styles.mainBtn, isContracting ? styles.btnStop : styles.btnStart]}>
        <Text style={styles.btnText}>{isContracting ? 'STOP CONTRACTION' : 'START CONTRACTION'}</Text>
        <Text style={styles.btnSubText}>{isContracting ? 'Tap when pain stops' : 'Tap when pain starts'}</Text>
      </TouchableOpacity>

      {/* History */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History</Text>
        {history.length > 0 && (
          <TouchableOpacity onPress={() => setHistory([])}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {history.map((item, i) => (
          <View key={item.id} style={styles.historyCard}>
            <View style={styles.historyLeft}>
              <Text style={styles.historyNum}>#{history.length - i}</Text>
              <Text style={styles.historyTime}>{item.time}</Text>
            </View>
            <View style={styles.historyRight}>
              <Text style={styles.historyDuration}>{format(item.duration)}</Text>
              <Text style={styles.historyLabel}>duration</Text>
            </View>
          </View>
        ))}
        {history.length === 0 && (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>⏱️</Text>
            <Text style={styles.emptyText}>No contractions tracked yet{"\n"}Your history will appear here</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F0', paddingTop: 40 },
  header: { paddingHorizontal: 20, marginBottom: 10 },
  backBtn: { backgroundColor: '#FFE0E6', alignSelf: 'flex-start', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  backText: { color: '#D90429', fontWeight: '700' },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#111', marginTop: 15 },
  headerSub: { fontSize: 12, color: '#888', marginTop: 4, letterSpacing: 1 },
  
  timerCard: { backgroundColor: '#fff', marginHorizontal: 20, borderRadius: 24, padding: 24, alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, borderWidth: 2, borderColor: '#fff' },
  timerCardActive: { borderColor: '#D90429', backgroundColor: '#FFF0F3' },
  pulseCircle: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#FFF5F7', justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#FFE0E6' },
  timerText: { fontSize: 48, fontWeight: '800', color: '#222' },
  timerTextActive: { color: '#D90429' },
  statusText: { marginTop: 14, color: '#666', fontSize: 13, textAlign: 'center' },
  
  statsRow: { flexDirection: 'row', marginTop: 20, width: '100%', justifyContent: 'space-between' },
  statBox: { alignItems: 'center', flex: 1 },
  statLabel: { fontSize: 10, color: '#999', letterSpacing: 1, fontWeight: '700' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#222', marginTop: 4 },
  statDivider: { width: 1, backgroundColor: '#eee', marginHorizontal: 10 },
  
  adviceBox: { backgroundColor: '#FFF3CD', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12, marginTop: 18, width: '100%' },
  adviceText: { fontSize: 13, color: '#856404', textAlign: 'center', fontWeight: '600' },
  
  mainBtn: { marginHorizontal: 20, marginTop: 20, borderRadius: 30, paddingVertical: 18, alignItems: 'center', elevation: 4 },
  btnStart: { backgroundColor: '#D90429' },
  btnStop: { backgroundColor: '#111' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18, letterSpacing: 1 },
  btnSubText: { color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 3 },
  
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 22, marginBottom: 8 },
  historyTitle: { fontWeight: 'bold', fontSize: 16 },
  clearText: { color: '#D90429', fontWeight: '600' },
  
  list: { paddingHorizontal: 20 },
  historyCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, elevation: 2, borderLeftWidth: 4, borderLeftColor: '#D90429' },
  historyLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  historyNum: { fontWeight: 'bold', backgroundColor: '#FFE0E6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, overflow: 'hidden' },
  historyTime: { color: '#555' },
  historyRight: { alignItems: 'flex-end' },
  historyDuration: { fontWeight: 'bold', fontSize: 16, color: '#D90429' },
  historyLabel: { fontSize: 10, color: '#999' },
  
  emptyBox: { alignItems: 'center', marginTop: 40 },
  emptyEmoji: { fontSize: 40 },
  emptyText: { textAlign: 'center', color: '#aaa', marginTop: 10, lineHeight: 20 }
});