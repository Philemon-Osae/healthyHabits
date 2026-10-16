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
    }
});

export default styles;