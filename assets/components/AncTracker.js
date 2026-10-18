import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import styles from "../styles/homepage";

const ANC_DATA = [
  { id: 1, title: "Contact 1 - 12 Weeks", date: "10 Aug", status: "done", facility: "Korle Bu", what: "Booking: BP, weight, blood group, Hb, urine, HIV/Syphilis, TT1, history" },
  { id: 2, title: "Contact 2 - 20 Weeks", date: "05 Oct", status: "done", facility: "Korle Bu", what: "BP, weight, fetal heartbeat, fundal height, blood tabs refill, TT2" },
  { id: 3, title: "Contact 3 - 26 Weeks", date: "24 Oct", status: "next", facility: "Korle Bu", what: "BP, weight, urine, Hb check, baby position, swelling check", daysLeft: 3 },
  { id: 4, title: "Contact 4 - 30 Weeks", date: "15 Nov", status: "upcoming", facility: "Korle Bu", what: "BP, weight, fetal growth scan talk, birth plan start" },
  { id: 5, title: "Contact 5 - 34 Weeks", date: "05 Dec", status: "upcoming", facility: "Korle Bu", what: "BP, weight, baby presentation (head down?), birth preparedness" },
  { id: 6, title: "Contact 6 - 36 Weeks", date: "19 Dec", status: "upcoming", facility: "Korle Bu", what: "BP, weight, birth plan final, what to pack for delivery" },
  { id: 7, title: "Contact 7 - 38 Weeks", date: "02 Jan", status: "upcoming", facility: "Korle Bu", what: "BP, weight, check if baby engaged, danger signs review" },
  { id: 8, title: "Contact 8 - 40 Weeks", date: "16 Jan", status: "upcoming", facility: "Korle Bu", what: "BP, weight, delivery date talk, danger signs, go bag ready" },
];

export const AncTracker = ({ navigation }) => {
  const [contacts, setContacts] = useState(ANC_DATA);

  const doneCount = contacts.filter(c => c.status === 'done').length;
  const percent = Math.round((doneCount / 8) * 100);

  const markDone = (id) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status: 'done' } : c));
  };

  const getBorderColor = (status) => {
    if (status === 'done') return '#10b981';
    if (status === 'next') return '#FFB703';
    return '#E5E7EB';
  };

  const getStatusBadge = (status, daysLeft) => {
    if (status === 'done') return { text: '✓ DONE', bg: '#10b98120', color: '#10b981' };
    if (status === 'next') return { text: `IN ${daysLeft} DAYS - GO!`, bg: '#FFB70330', color: '#92400e' };
    return { text: 'UPCOMING', bg: '#f3f4f6', color: '#6b7280' };
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={[styles.scrollContent, { paddingTop: 10 }]} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={[styles.topSection, { marginTop: 20 }]}>
          <Text style={styles.appName}>YOUR PINK BOOK</Text>
          <Text style={styles.appSlogan}>Digital • Cannot be lost • Works offline</Text>
        </View>

        {/* Progress Card */}
        <View style={[styles.optionSelect, { borderLeftColor: '#D90429', height: 110, backgroundColor: '#FFF0F3' }]}>
          <View style={[styles.iconCircle, { backgroundColor: '#D9042920', width: 70, height: 70, borderRadius: 35 }]}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#D90429' }}>{percent}%</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.cardTitle}>{doneCount} of 8 Contacts Done</Text>
            <Text style={styles.cardSub}>GHS recommends 8 contacts. You are on track!</Text>
            <View style={styles.progressBar}><View style={[styles.progressFill, { width: `${percent}%`, backgroundColor: '#D90429' }]} /></View>
            <Text style={[styles.progressText, { color: '#D90429' }]}>Ayekoo! Keep going</Text>
          </View>
        </View>

        <View style={styles.optionContainer}>
          {/* Reminder Banner */}
          <View style={{ backgroundColor: '#FFFBEB', width: '100%', borderRadius: 12, padding: 12, marginTop: 15, borderWidth: 1, borderColor: '#FFB703' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#92400e' }}>📅 NEXT: Contact 3 - 26 Weeks</Text>
            <Text style={{ fontSize: 11, color: '#78350f', marginTop: 3 }}>24 Oct • Korle Bu • 3 days left • Carry: NHIS card, labs</Text>
          </View>

          {contacts.map((item) => {
            const badge = getStatusBadge(item.status, item.daysLeft);
            return (
              <TouchableOpacity key={item.id} style={[styles.optionSelect, { borderLeftColor: getBorderColor(item.status), height: 'auto', minHeight: 110, paddingVertical: 12 }]} activeOpacity={0.8} onPress={() => item.status === 'next' && markDone(item.id)}>
                <View style={[styles.iconCircle, { backgroundColor: item.status === 'done' ? '#10b98120' : item.status === 'next' ? '#FFB70330' : '#f3f4f6' }]}>
                  <Text style={{ fontSize: 20 }}>{item.status === 'done' ? '✓' : item.status === 'next' ? '→' : item.id}</Text>
                </View>
                <View style={styles.textWrap}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSub}>{item.date} • {item.facility}</Text>
                  <Text style={{ fontSize: 11, color: '#555', marginTop: 4, lineHeight: 14 }}>{item.what}</Text>
                  <View style={{ backgroundColor: badge.bg, alignSelf: 'flex-start', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4, marginTop: 6 }}>
                    <Text style={{ fontSize: 9, fontWeight: 'bold', color: badge.color }}>{badge.text}</Text>
                  </View>
                  {item.status === 'next' && <Text style={{ fontSize: 10, color: '#D90429', marginTop: 5, fontWeight: 'bold' }}>Tap to mark as DONE after visit</Text>}
                </View>
              </TouchableOpacity>
            );
          })}

          {/* Danger Signs */}
          <View style={[styles.optionSelect, { borderLeftColor: '#D90429', height: 'auto', paddingVertical: 14, backgroundColor: '#fff' }]}>
            <View style={[styles.iconCircle, { backgroundColor: '#D9042930' }]}>
              <Text style={{ fontSize: 20 }}>⚠️</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={[styles.cardTitle, { color: '#D90429', fontSize: 13 }]}>Go Immediately If:</Text>
              <Text style={{ fontSize: 11, color: '#555', marginTop: 3, lineHeight: 14 }}>• Heavy bleeding • Severe headache + swollen face • No baby movement • Water breaks</Text>
            </View>
          </View>

        </View>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, padding: 10 }}>
          <Text style={{ color: '#D90429', fontWeight: 'bold' }}>← Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};