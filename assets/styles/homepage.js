import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9F0',
    },
    scroll: {
        flex: 1,
        width: '100%',
    },
    scrollContent: {
        alignItems: 'center',
        paddingBottom: 30,
    },
    topSection: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    appName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#D90429',
        marginTop: 10,
    },
    appSlogan: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },
    optionContainer: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    optionSelect: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        height: 95,
        borderRadius: 16,
        marginTop: 15,
        alignItems: 'center',
        paddingHorizontal: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        borderLeftWidth: 5,
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionLogo: {
        width: 40,
        height: 40,
    },
    exerciseLogo: {
        width: 35,
        height: 50,
    },
    textWrap: {
        marginLeft: 15,
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    cardSub: {
        fontSize: 12,
        color: '#777',
        marginTop: 3,
    },
    footer: {
        marginTop: 30,
        fontSize: 12,
        color: '#aaa',
    },
    // === NEW STYLES FOR DAILY LOOP ===
    checkBtn: {
        backgroundColor: '#222',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    checkBtnDone: {
        backgroundColor: '#10b981',
    },
    checkBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    badge: {
        backgroundColor: '#10b98120',
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginTop: 4,
    },
    badgeText: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#10b981',
    },
    progressBar: {
        height: 5,
        backgroundColor: '#e5e7eb',
        borderRadius: 3,
        marginTop: 6,
        width: '90%',
    },
    progressFill: {
        height: 5,
        backgroundColor: '#ec4899',
        borderRadius: 3,
    },
    progressText: {
        fontSize: 10,
        color: '#be185d',
        marginTop: 3,
    },
    divider: {
        width: '100%',
        marginTop: 25,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 8,
    },
    dividerText: {
        fontSize: 11,
        color: '#aaa',
        fontWeight: 'bold',
        letterSpacing: 1,
    }
});

export default styles;