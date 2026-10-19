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
    if (history.length === 0) return "💡 Press START when pain begins. This helps midwife know if true labour.";
    if (history.length < 3) return `Tracked ${history.length}/3 — Keep tracking to get advice`;
    const last = history.slice(0, 3);
    const avg = last.reduce((a,b) => a + b.duration, 0) / 3;
    if (avg > 40 && last.length >= 3) return "🔴 Strong & regular! Call Korle Bu / midwife NOW. Pack pink book!";
    if (avg > 25) return "🟡 Getting close — Prepare hospital bag, call partner";
    return "🟢 Early labor — Breathe in 4, out 6. Walk small. Drink nsu.";
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
      
      {/* Header - premium white like homepage */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>CONTRACTION TIMER • Labour</Text>
            <Text style={styles.headerSub}>Know when to go to hospital • Korle Bu</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Timer Card */}
        <View style={[styles.timerCard, isContracting && styles.timerCardActive]}>
          <View style={[styles.pulseCircle, isContracting && styles.pulseCircleActive]}>
            <Text style={[styles.timerText, isContracting && styles.timerTextActive]}>{format(elapsed)}</Text>
            <Text style={styles.timerLabel}>{isContracting ? 'CONTRACTING' : 'READY'}</Text>
          </View>
          <Text style={styles.statusText}>
            {isContracting ? '❤️ Wo bo pa - Breathe, mama. You are strong!' : 'Press START when pain begins'}
          </Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>COUNT</Text>
              <Text style={styles.statValue}>{history.length}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>AVG TIME</Text>
              <Text style={styles.statValue}>{getAvgDuration()}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>LAST</Text>
              <Text style={styles.statValue}>{history[0] ? format(history[0].duration) : '--:--'}</Text>
            </View>
          </View>

          <View style={styles.adviceBox}>
            <Text style={styles.adviceText}>{getAdvice()}</Text>
          </View>
        </View>

        {/* Big Button */}
        <TouchableOpacity onPress={handlePress} style={[styles.mainBtn, isContracting ? styles.btnStop : styles.btnStart]} activeOpacity={0.85}>
          <Text style={styles.btnText}>{isContracting ? 'STOP CONTRACTION' : 'START CONTRACTION'}</Text>
          <Text style={styles.btnSubText}>{isContracting ? 'Tap when pain stops • Gyae' : 'Tap when pain starts • Hyɛ ase'}</Text>
        </TouchableOpacity>

        {/* History */}
        <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>HISTORY • {history.length} TRACKED</Text>
          {history.length > 0 && (
            <TouchableOpacity onPress={() => setHistory([])} style={styles.clearPill}>
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.list}>
          {history.map((item, i) => (
            <View key={item.id} style={styles.historyCard}>
              <View style={styles.historyLeft}>
                <View style={styles.numBox}><Text style={styles.historyNum}>#{history.length - i}</Text></View>
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
              <View style={styles.emptyCircle}><Text style={styles.emptyEmoji}>⏱️</Text></View>
              <Text style={styles.emptyTitle}>No contractions yet</Text>
              <Text style={styles.emptyText}>Your history will appear here{"\n"}Midwife can use this to decide</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F5F2', paddingTop: 0 },
  header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  backText: { fontSize: 22, color: '#111', fontWeight: '300', marginTop: -2 },
  headerTitle: { fontSize: 14, fontWeight: '800', color: '#111', letterSpacing: 0.5 },
  headerSub: { fontSize: 11, color: '#999', marginTop: 2, fontWeight: '500' },
  
  timerCard: { backgroundColor: '#fff', marginHorizontal: 16, marginTop: 16, borderRadius: 24, padding: 22, alignItems: 'center', borderWidth: 1, borderColor: '#f2f2f2', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 12, shadowOffset: { width: 0, height: 4 } },
  timerCardActive: { borderColor: '#D90429', backgroundColor: '#FFF5F7' },
  pulseCircle: { width: 140, height: 140, borderRadius: 70, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#f0f0f0' },
  pulseCircleActive: { backgroundColor: '#FFF0F3', borderColor: '#FFD1DC' },
  timerText: { fontSize: 44, fontWeight: '800', color: '#111' },
  timerTextActive: { color: '#D90429' },
  timerLabel: { fontSize: 9, fontWeight: '800', color: '#999', letterSpacing: 1, marginTop: 2 },
  statusText: { marginTop: 14, color: '#666', fontSize: 12, textAlign: 'center', fontWeight: '500' },
  
  statsRow: { flexDirection: 'row', marginTop: 20, width: '100%', justifyContent: 'space-between', backgroundColor: '#F7F5F2', borderRadius: 14, paddingVertical: 12 },
  statBox: { alignItems: 'center', flex: 1 },
  statLabel: { fontSize: 9, color: '#999', letterSpacing: 0.8, fontWeight: '800' },
  statValue: { fontSize: 16, fontWeight: '800', color: '#111', marginTop: 3 },
  statDivider: { width: 1, backgroundColor: '#e8e8e8', marginHorizontal: 6 },
  
  adviceBox: { backgroundColor: '#111', paddingHorizontal: 14, paddingVertical: 12, borderRadius: 14, marginTop: 16, width: '100%' },
  adviceText: { fontSize: 12, color: '#fff', textAlign: 'center', fontWeight: '600', lineHeight: 18 },
  
  mainBtn: { marginHorizontal: 16, marginTop: 18, borderRadius: 20, paddingVertical: 18, alignItems: 'center', elevation: 0 },
  btnStart: { backgroundColor: '#D90429' },
  btnStop: { backgroundColor: '#111' },
  btnText: { color: '#fff', fontWeight: '800', fontSize: 14, letterSpacing: 0.8 },
  btnSubText: { color: 'rgba(255,255,255,0.6)', fontSize: 10, marginTop: 4, fontWeight: '600' },
  
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginTop: 24, marginBottom: 8 },
  historyTitle: { fontWeight: '800', fontSize: 10, color: '#999', letterSpacing: 1 },
  clearPill: { backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 12, borderWidth: 1, borderColor: '#eee' },
  clearText: { color: '#888', fontWeight: '700', fontSize: 11 },
  
  list: { paddingHorizontal: 16 },
  historyCard: { backgroundColor: '#fff', borderRadius: 16, padding: 14, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderWidth: 1, borderColor: '#f2f2f2' },
  historyLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  numBox: { backgroundColor: '#F7F5F2', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  historyNum: { fontWeight: '800', fontSize: 11, color: '#111' },
  historyTime: { color: '#555', fontSize: 12, marginLeft: 10, fontWeight: '600' },
  historyRight: { alignItems: 'flex-end' },
  historyDuration: { fontWeight: '800', fontSize: 15, color: '#D90429' },
  historyLabel: { fontSize: 9, color: '#aaa', fontWeight: '700', letterSpacing: 0.5 },
  
  emptyBox: { alignItems: 'center', marginTop: 30, backgroundColor: '#fff', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#f2f2f2' },
  emptyCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#F7F5F2', justifyContent: 'center', alignItems: 'center' },
  emptyEmoji: { fontSize: 28 },
  emptyTitle: { fontWeight: '800', color: '#111', marginTop: 12, fontSize: 14 },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 6, lineHeight: 18, fontSize: 12 }
});