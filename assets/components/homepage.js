import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { useState } from "react";
import styles from "../styles/homepage";

export const Homepage = ({ navigation }) => {
  const [bloodTaken, setBloodTaken] = useState(false);
  const [streak] = useState(5);
  const currentWeek = 20;
  const babySize = { item: "Cocoa Pod", twi: "Aba", size: "~25cm", icon: "🫘" };
  const nextANC = { date: "24 Oct", week: "Contact 3 - 26 Weeks", facility: "Korle Bu", daysLeft: 3, done: 2 };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Image source={require('../images/daily-health-app.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>HEALTHY HABITS</Text>
          <Text style={styles.appSlogan}>Healthy living every day • Made for Ghana</Text>
        </View>

        <View style={styles.optionContainer}>

          {/* === NEW DAILY HABIT LOOP - 4 CARDS === */}
          
          {/* 1. Blood Tabs - Have you taken your blood tabs today? */}
          <TouchableOpacity 
            style={[styles.optionSelect, { borderLeftColor: '#10b981', backgroundColor: '#f0fdf4', height: 105 }]} 
            onPress={() => setBloodTaken(!bloodTaken)}
            activeOpacity={0.8}
          >
            <View style={[styles.iconCircle, { backgroundColor: '#10b98130' }]}>
              <Text style={{ fontSize: 28 }}>💊</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={[styles.cardTitle, { fontSize: 13 }]}>Have you taken your blood tabs today?</Text>
              <Text style={styles.cardSub}>{bloodTaken ? `✓ Ayekoo! ${streak} days streak` : 'Iron + Folic • Tap to confirm'}</Text>
              <View style={styles.badge}><Text style={styles.badgeText}>{bloodTaken ? 'DONE TODAY' : 'TAP YES'}</Text></View>
            </View>
            <View style={[styles.checkBtn, bloodTaken && styles.checkBtnDone]}>
              <Text style={styles.checkBtnText}>{bloodTaken ? '✓' : 'Yes'}</Text>
            </View>
          </TouchableOpacity>

          {/* 2. Baby Size Match - Garden Egg / Cocoa Pod */}
          <View style={[styles.optionSelect, { borderLeftColor: '#D90429', height: 105 }]}>
            <View style={[styles.iconCircle, { backgroundColor: '#D9042920' }]}>
              <Text style={{ fontSize: 32 }}>{babySize.icon}</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardSub}>WEEK {currentWeek} • LOCAL SIZE</Text>
              <Text style={styles.cardTitle}>Baby is size of a {babySize.item}</Text>
              <Text style={styles.cardSub}>{babySize.twi} • {babySize.size} • Not avocado</Text>
            </View>
          </View>

          {/* 3. Pink Book Replacement - ANC */}
          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#FFB703', backgroundColor: '#FFFBEB', height: 105 }]} onPress={() => navigation.navigate('AncTracker')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#FFB70330' }]}>
              <Text style={{ fontSize: 28 }}>📅</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>Next ANC: {nextANC.date}</Text>
              <Text style={styles.cardSub}>{nextANC.week} • {nextANC.facility}</Text>
              <View style={styles.progressBar}><View style={[styles.progressFill, { width: '25%' }]} /></View>
              <Text style={styles.progressText}>{nextANC.done} / 8 done • {nextANC.daysLeft} days left</Text>
            </View>
            <Text style={{ fontSize: 18 }}>›</Text>
          </TouchableOpacity>

          {/* 4. Daily Agoo - Educational Tip */}
          <View style={[styles.optionSelect, { borderLeftColor: '#219EBC', backgroundColor: '#F0F9FF', height: 110 }]}>
            <View style={[styles.iconCircle, { backgroundColor: '#219EBC20' }]}>
              <Text style={{ fontSize: 26 }}>🎧</Text>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardSub}>DAILY AGOO • 30 SEC TIP</Text>
              <Text style={[styles.cardTitle, { fontSize: 12, lineHeight: 16 }]}>Eat kontomire with orange to absorb iron</Text>
              <Text style={[styles.cardSub, { fontStyle: 'italic', color: '#9a3412' }]}>Myth: Snails cause drool? False.</Text>
            </View>
          </View>

          {/* === END NEW LOOP - YOUR OLD CARDS BELOW === */}

          <View style={styles.divider}><Text style={styles.dividerText}>YOUR HEALTH TOOLS</Text></View>

          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#2A9D8F' }]} onPress={() => navigation.navigate('Nutrition')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#2A9D8F20' }]}>
              <Image source={require('../images/nutrition.png')} style={styles.optionLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>NUTRITION</Text>
              <Text style={styles.cardSub}>What to eat - local Ghana foods</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#E76F51' }]} onPress={() => navigation.navigate('Exercise')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#E76F5120' }]}>
              <Image source={require('../images/stretch.png')} style={styles.optionLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>EXERCISES</Text>
              <Text style={styles.cardSub}>Safe walks & stretches</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#FFB703' }]} onPress={() => navigation.navigate('Tips')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#FFB70330' }]}>
              <Image source={require('../images/bulb.png')} style={styles.exerciseLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>TIPS</Text>
              <Text style={styles.cardSub}>Daily healthy habits</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#D90429', backgroundColor: '#FFF0F3' }]} onPress={() => navigation.navigate('ContractionTimer')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#D9042930' }]}>
              <Image source={require('../images/contract.png')} style={styles.exerciseLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={[styles.cardTitle, { color: '#D90429' }]}>CONTRACTION TIMER</Text>
              <Text style={styles.cardSub}>Track labor timing • Know when to go</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#D90429' }}>›</Text>
          </TouchableOpacity>

        </View>

        <Text style={{ textAlign: 'center', color: '#bbb', fontSize: 11, marginTop: 20 }}>Made with ❤️ for Ghanaian mothers • Solves pink book loss</Text>

      </ScrollView>
    </View>
  )
}