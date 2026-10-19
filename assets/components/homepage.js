import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../styles/homepage";

export const Homepage = ({ navigation }) => {
  const [bloodTaken, setBloodTaken] = useState(false);
  const [streak] = useState(5);
  const [userName, setUserName] = useState('Esi'); // default before login
  const currentWeek = 20;
  const babySize = { item: "Cocoa Pod", twi: "Aba Kɔkɔɔ", size: "~25cm • 300g", icon: "🫘" };
  const nextANC = { date: "24 Oct", week: "Contact 3 - 26 Weeks", facility: "Korle Bu Teaching Hospital", daysLeft: 3, done: 2 };

  // PLAY STORE LOGIC: Load saved name Mary / Rose
  useEffect(() => {
    const loadName = async () => {
      try {
        const savedName = await AsyncStorage.getItem('userName');
        if (savedName) {
          setUserName(savedName);
        }
      } catch (e) {
        console.log("No saved name");
      }
    };
    loadName();
    
    // Reload when you come back from signup
    const unsubscribe = navigation.addListener('focus', () => {
      loadName();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* REAL HEADER - DYNAMIC NAME */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Maakye, {userName}! ☀️</Text>
          <Text style={styles.greetingSub}>Week {currentWeek} • Agoo? Wo ho te sɛn?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PartnerLink')} style={styles.avatarWrap}>
          <Image source={require('../images/daily-health-app.png')} style={styles.avatar} />
          <View style={styles.onlineDot} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        <View style={styles.optionContainer}>

          {/* 1. BLOOD TABS - Premium card */}
          <TouchableOpacity 
            style={[styles.optionSelect, styles.cardGreen]} 
            onPress={() => setBloodTaken(!bloodTaken)}
            activeOpacity={0.9}
          >
            <View style={[styles.iconCircle, { backgroundColor: '#10b981' }]}>
              <Text style={styles.iconEmoji}>💊</Text>
            </View>
            <View style={styles.textWrap}>
              <View style={styles.rowBetween}>
                <Text style={styles.cardLabel}>MOGYA ADURU • BLOOD TONIC</Text>
                <View style={styles.streakPill}><Text style={styles.streakText}>🔥 {streak} days</Text></View>
              </View>
              <Text style={styles.cardTitle}>Have you taken today?</Text>
              <Text style={styles.cardSub}>{bloodTaken ? `Ayekoo, ${userName}! Streak continues` : 'Iron + Folic • Tap Yes'}</Text>
            </View>
            <View style={[styles.checkBtn, bloodTaken && styles.checkBtnDone]}>
              <Text style={styles.checkBtnText}>{bloodTaken ? '✓' : 'Yes'}</Text>
            </View>
          </TouchableOpacity>

          {/* 2. BABY SIZE */}
          <TouchableOpacity style={styles.optionSelect} onPress={() => navigation.navigate('Tips')} activeOpacity={0.9}>
            <Image source={require('../images/daily-health-app.png')} style={styles.babyImg} />
            <View style={styles.textWrap}>
              <Text style={styles.cardLabel}>BABY SIZE • WEEK {currentWeek}</Text>
              <Text style={styles.cardTitle}>Baby is size of {babySize.item}</Text>
              <Text style={styles.cardSubTwi}>{babySize.twi} • {babySize.size} • Aba, not avocado</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          {/* 3. ANC - Blue premium */}
          <TouchableOpacity style={[styles.optionSelect, styles.cardBlue]} onPress={() => navigation.navigate('AncTracker')} activeOpacity={0.9}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
              <Text style={styles.iconEmoji}>🏥</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardLabelLight}>NEXT ANC VISIT • 3 DAYS LEFT</Text>
              <Text style={[styles.cardTitle, { color: '#fff' }]}>{nextANC.date} • {nextANC.facility}</Text>
              <View style={styles.progressBarWhite}><View style={[styles.progressFillWhite, { width: '25%' }]} /></View>
              <Text style={styles.progressTextWhite}>{nextANC.done} / 8 Contacts done • Pink Book 25%</Text>
            </View>
            <View style={styles.daysBox}><Text style={styles.daysNum}>{nextANC.daysLeft}</Text><Text style={styles.daysLabel}>DAYS</Text></View>
          </TouchableOpacity>

          {/* 4. AGOO - Dark card */}
          <TouchableOpacity style={[styles.optionSelect, styles.cardDark]} onPress={() => navigation.navigate('Tips')} activeOpacity={0.9}>
            <View style={styles.textWrap}>
              <Text style={styles.cardLabelOrange}>🔊 DAILY AGOO • 30 SEC LISTEN</Text>
              <Text style={[styles.cardTitle, { color: '#fff', fontSize: 13, marginTop: 4 }]}>Eat kontomire with orange to absorb iron</Text>
              <Text style={styles.cardSubDark}>Myth: Snails cause baby drool? False. Twi: Nkosua pa</Text>
            </View>
            <View style={styles.playBtn}><Text style={{ color: '#fff' }}>▶</Text></View>
          </TouchableOpacity>

          <View style={styles.divider}><Text style={styles.dividerText}>YOUR HEALTH TOOLS • NKWASO</Text></View>

          <TouchableOpacity style={styles.optionSelect} onPress={() => navigation.navigate('Nutrition')} activeOpacity={0.9}>
            <View style={[styles.iconCircle, { backgroundColor: '#2A9D8F15' }]}><Image source={require('../images/nutrition.png')} style={styles.optionLogo} /></View>
            <View style={styles.textWrap}><Text style={styles.cardTitle}>NUTRITION • Aduane</Text><Text style={styles.cardSub}>What to eat - kontomire, garden eggs</Text></View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionSelect} onPress={() => navigation.navigate('Exercise')} activeOpacity={0.9}>
            <View style={[styles.iconCircle, { backgroundColor: '#E76F5115' }]}><Image source={require('../images/stretch.png')} style={styles.exerciseLogo} /></View>
            <View style={styles.textWrap}><Text style={styles.cardTitle}>EXERCISES • Apɔw-mu-te</Text><Text style={styles.cardSub}>Safe walks & stretches for Week 20</Text></View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionSelect, styles.cardRedOutline]} onPress={() => navigation.navigate('ContractionTimer')} activeOpacity={0.9}>
            <View style={[styles.iconCircle, { backgroundColor: '#D9042915' }]}><Image source={require('../images/contract.png')} style={styles.exerciseLogo} /></View>
            <View style={styles.textWrap}><Text style={[styles.cardTitle, { color: '#D90429' }]}>CONTRACTION TIMER</Text><Text style={styles.cardSub}>Track labour • Know when to go to hospital</Text></View>
            <Text style={[styles.arrow, { color: '#D90429' }]}>›</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>Made with ❤️ for {userName} • Korle Bu Approved • Ghanaian mothers</Text>
        </View>
      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}><Text style={styles.navIconActive}>●</Text><Text style={styles.navLabelActive}>Home</Text></View>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AncTracker')}><Text style={styles.navIcon}>📖</Text><Text style={styles.navLabel}>Pink Book</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ContractionTimer')}><Text style={styles.navIcon}>⏱️</Text><Text style={styles.navLabel}>Labour</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('PartnerLink')}><Text style={styles.navIcon}>👨</Text><Text style={styles.navLabel}>Partner</Text></TouchableOpacity>
      </View>
    </View>
  )
}