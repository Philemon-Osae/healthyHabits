import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'

export default function ContractionTimer() {
  const [isTiming, setIsTiming] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startTimer = () => {
    setIsTiming(true);
    setSeconds(0);
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    const duration = seconds;
    const last = history[0];
    const frequency = last? Math.round((startTimeRef.current - last.startTimestamp) / 1000 / 60) : 0;

    const newEntry = {
      id: Date.now().toString(),
      duration: duration,
      frequency: frequency,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      startTimestamp: startTimeRef.current,
    };

    setHistory([newEntry,...history]);
    setIsTiming(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const getAdvice = () => {
    if (history.length < 2) return "Keep tracking. Need 3+ contractions to see pattern.";
    const avgFreq = history.slice(0,3).reduce((a,b) => a + b.frequency, 0) / 3;
    if (avgFreq <= 5 && history[0].duration >= 60) return "⚠️ Every 5 mins, 60 secs long — Call your midwife / Go to hospital!";
    if (avgFreq <= 10) return "⏰ Getting close! Pack your bag, keep timing.";
    return "💚 Early labor. Breathe, hydrate, rest.";
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTRACTION TIMER</Text>
        <Text style={styles.subHeader}>HEALTHY HABITS • Tap to time</Text>
      </View>

      <View style={styles.timerCircle}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        <Text style={styles.timerLabel}>{isTiming? 'Timing contraction...' : 'Ready'}</Text>
      </View>

      {!isTiming? (
        <TouchableOpacity style={styles.startButton} onPress={startTimer} activeOpacity={0.8}>
          <Text style={styles.startText}>START CONTRACTION</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.stopButton} onPress={stopTimer} activeOpacity={0.8}>
          <Text style={styles.stopText}>STOP</Text>
        </TouchableOpacity>
      )}

      {history.length > 0 && (
        <View style={styles.adviceBox}>
          <Text style={styles.adviceText}>{getAdvice()}</Text>
        </View>
      )}

      <ScrollView style={styles.historyWrap} showsVerticalScrollIndicator={false}>
        <Text style={styles.historyTitle}>History ({history.length})</Text>
        {history.map((item, index) => (
          <View key={item.id} style={styles.historyCard}>
            <Text style={styles.historyIndex}>#{history.length - index}</Text>
            <View style={styles.historyRow}>
              <Text style={styles.historyTime}>{item.time}</Text>
              <Text style={styles.historyDot}>•</Text>
              <Text style={styles.historyDuration}>{item.duration}s long</Text>
              {item.frequency > 0 && (
                <>
                  <Text style={styles.historyDot}>•</Text>
                  <Text style={styles.historyFreq}>{item.frequency}m apart</Text>
                </>
              )}
            </View>
          </View>
        ))}
        {history.length === 0 && <Text style={styles.emptyText}>No contractions yet. Tap START when one begins.</Text>}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111',
  },
  subHeader: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  timerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 5,
    borderWidth: 4,
    borderColor: '#FFD1DC',
  },
  timerText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#D90429',
  },
  timerLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  // BUTTON STYLES JOINED HERE
  startButton: {
    backgroundColor: '#2A9D8F',
    width: '85%',
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 4,
  },
  startText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  stopButton: {
    backgroundColor: '#D90429',
    width: '85%',
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    elevation: 4,
  },
  stopText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
  adviceBox: {
    backgroundColor: '#FFF3CD',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB703',
    width: '90%',
  },
  adviceText: {
    fontSize: 13,
    color: '#664D03',
    lineHeight: 18,
    fontWeight: '600',
  },
  historyWrap: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  historyTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginBottom: 10,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  historyIndex: {
    fontWeight: 'bold',
    color: '#D90429',
    width: 30,
  },
  historyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  historyTime: {
    fontSize: 13,
    color: '#333',
    fontWeight: '600',
  },
  historyDot: {
    marginHorizontal: 6,
    color: '#aaa',
  },
  historyDuration: {
    fontSize: 13,
    color: '#555',
  },
  historyFreq: {
    fontSize: 13,
    color: '#2A9D8F',
    fontWeight: '600',
  },
  emptyText: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  }
});