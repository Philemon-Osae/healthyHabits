import { Image, TouchableOpacity, View, ScrollView, Text } from "react-native";
import styles from "../styles/homepage";

export const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <Image source={require('../images/daily-health-app.png')} style={styles.logo} resizeMode="contain" />
          <Text style={styles.appName}>HEALTHY HABITS</Text>
          <Text style={styles.appSlogan}>Healthy living every day • Made for Ghana</Text>
        </View>

        <View style={styles.optionContainer}>

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

          {/* NEW - ATTRACTIVE CONTRACTION TIMER - Different Color */}
          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#D90429', backgroundColor: '#FFF0F3' }]} onPress={() => navigation.navigate('ContractionTimer')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#D9042930' }]}>
              {/* If contract.png doesn't exist, this will fallback - create the image or use bulb */}
              <Image source={require('../images/contract.png')} style={styles.exerciseLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={[styles.cardTitle, { color: '#D90429' }]}>CONTRACTION TIMER</Text>
              <Text style={styles.cardSub}>Track labor timing • Know when to go</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#D90429' }}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionSelect, { borderLeftColor: '#219EBC' }]} onPress={() => navigation.navigate('OrderDrugs')} activeOpacity={0.8}>
            <View style={[styles.iconCircle, { backgroundColor: '#219EBC20' }]}>
              <Image source={require('../images/medicine.png')} style={styles.optionLogo} resizeMode="contain" />
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.cardTitle}>ORDER MEDICATIONS</Text>
              <Text style={styles.cardSub}>Pharmacy nearby</Text>
            </View>
          </TouchableOpacity> 

        </View>

        <Text style={{ textAlign: 'center', color: '#bbb', fontSize: 11, marginTop: 20 }}>Made with ❤️ for Ghanaian mothers</Text>

      </ScrollView>
    </View>
  )
}