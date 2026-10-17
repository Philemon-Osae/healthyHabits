import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9F0',
    },
    scrollContent: {
        paddingBottom: 30,
    },
    header: {
        marginTop: 50,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    backBtn: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        elevation: 1,
    },
    backText: {
        color: '#D90429',
        fontWeight: '700',
        fontSize: 13,
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#111',
        marginTop: 15,
    },
    subHeader: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    warningBox: {
        backgroundColor: '#FFF3CD',
        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        marginTop: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#FFB703',
    },
    warningText: {
        fontSize: 12,
        color: '#856404',
        lineHeight: 16,
    },
    nutritionContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    optionSelect: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: 90,
        borderRadius: 16,
        marginTop: 15,
        alignItems: 'center',
        paddingHorizontal: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        borderLeftWidth: 5,
    },
    iconCircle: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionLogo: {
        width: 36,
        height: 36,
    },
    textWrap: {
        marginLeft: 14,
        flex: 1,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
    },
    cardSub: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    arrow: {
        fontSize: 22,
        color: '#ccc',
        fontWeight: 'bold',
    },
    footer: {
        textAlign: 'center',
        marginTop: 25,
        color: '#aaa',
        fontSize: 11,
    },
});

export default styles;