import { StyleSheet } from "react-native";

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
        marginBottom: 10,
    },
    headerText: {
        fontSize: 32,
        color: '#D90429',
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    nutritionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    optionSelect: {
        width: '45%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
        marginTop: 15,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        borderLeftWidth: 5,
        borderLeftColor: '#FFB703',
    },
    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionLogo: {
        width: 50,
        height: 50,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 4,
    },
    cardSub: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    tipCard: {
        backgroundColor: '#FFF3CD',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 25,
        borderLeftWidth: 4,
        borderLeftColor: '#FFB703',
    },
    tipTitle: {
        fontWeight: 'bold',
        color: '#6A040F',
        fontSize: 14,
        marginBottom: 5,
    },
    tipText: {
        color: '#333',
        fontSize: 13,
        lineHeight: 18,
    },
})

export default styles;