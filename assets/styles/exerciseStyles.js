import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F0',
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    color: '#111',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
  },
  warningBox: {
    backgroundColor: '#FFF3CD',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  warningText: {
    fontSize: 12,
    color: '#664D03',
    lineHeight: 18,
  },
  nutritionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 30,
  },
  optionSelect: {
    height: 165,
    width: '48%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  optionLogo: {
    width: 70,
    height: 70,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#222',
    marginTop: 10,
  },
  cardSub: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
})

export default styles;