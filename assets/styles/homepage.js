import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F5F2' },
    header: { backgroundColor: '#fff', paddingTop: 55, paddingBottom: 16, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#f0f0f0' },
    headerLeft: { flex: 1 },
    greeting: { fontSize: 20, fontWeight: '800', color: '#111' },
    greetingSub: { fontSize: 12, color: '#888', marginTop: 3, fontWeight: '500' },
    avatarWrap: { position: 'relative' },
    avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#F7F5F2' },
    onlineDot: { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: 6, backgroundColor: '#10b981', borderWidth: 2, borderColor: '#fff' },

    scroll: { flex: 1, width: '100%' },
    scrollContent: { alignItems: 'center', paddingBottom: 100 },
    optionContainer: { width: '100%', paddingHorizontal: 16, alignItems: 'center' },

    optionSelect: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        minHeight: 88,
        borderRadius: 20,
        marginTop: 12,
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 14,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
    },
    cardGreen: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e8f5e9' },
    cardBlue: { backgroundColor: '#219EBC', borderWidth: 0 },
    cardDark: { backgroundColor: '#111', borderWidth: 0 },
    cardRedOutline: { borderWidth: 1, borderColor: '#FFE4E6' },

    iconCircle: { width: 52, height: 52, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
    iconEmoji: { fontSize: 24 },
    babyImg: { width: 52, height: 52, borderRadius: 14, backgroundColor: '#FFF1F2' },
    optionLogo: { width: 32, height: 32 },
    exerciseLogo: { width: 28, height: 38 },
    textWrap: { marginLeft: 12, flex: 1 },
    
    rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    cardLabel: { fontSize: 9, fontWeight: '800', color: '#999', letterSpacing: 0.6 },
    cardLabelLight: { fontSize: 9, fontWeight: '800', color: 'rgba(255,255,255,0.7)', letterSpacing: 0.6 },
    cardLabelOrange: { fontSize: 9, fontWeight: '800', color: '#F4A261', letterSpacing: 0.6 },
    cardTitle: { fontSize: 14.5, fontWeight: '700', color: '#111', marginTop: 2 },
    cardSub: { fontSize: 11.5, color: '#777', marginTop: 3, fontWeight: '500' },
    cardSubTwi: { fontSize: 11, color: '#219EBC', marginTop: 3, fontWeight: '600' },
    cardSubDark: { fontSize: 11, color: '#aaa', marginTop: 4 },
    
    streakPill: { backgroundColor: '#FFF7ED', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12 },
    streakText: { fontSize: 10, fontWeight: '700', color: '#F4A261' },
    checkBtn: { backgroundColor: '#111', paddingHorizontal: 16, paddingVertical: 9, borderRadius: 20 },
    checkBtnDone: { backgroundColor: '#10b981' },
    checkBtnText: { color: '#fff', fontWeight: '800', fontSize: 12 },
    
    arrow: { fontSize: 20, color: '#ccc', marginLeft: 8 },
    playBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#219EBC', justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
    
    progressBarWhite: { height: 5, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 3, marginTop: 8, width: '100%' },
    progressFillWhite: { height: 5, backgroundColor: '#fff', borderRadius: 3 },
    progressTextWhite: { fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 5, fontWeight: '600' },
    daysBox: { backgroundColor: '#fff', width: 42, height: 42, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
    daysNum: { fontSize: 16, fontWeight: '800', color: '#219EBC' },
    daysLabel: { fontSize: 8, fontWeight: '700', color: '#219EBC' },

    divider: { width: '100%', marginTop: 24, marginBottom: 4, paddingBottom: 8, borderBottomWidth: 0 },
    dividerText: { fontSize: 10, color: '#aaa', fontWeight: '800', letterSpacing: 1 },

    footer: { textAlign: 'center', color: '#bbb', fontSize: 10, marginTop: 24, lineHeight: 14, paddingHorizontal: 20 },

    bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingTop: 10, paddingBottom: 28, borderTopWidth: 1, borderColor: '#eee', position: 'absolute', bottom: 0, left: 0, right: 0 },
    navItem: { alignItems: 'center', flex: 1 },
    navIcon: { fontSize: 18, opacity: 0.6 },
    navIconActive: { fontSize: 8, color: '#D90429', marginBottom: 4 },
    navLabel: { fontSize: 9, color: '#888', marginTop: 2, fontWeight: '600' },
    navLabelActive: { fontSize: 9, color: '#D90429', marginTop: 2, fontWeight: '800' }
});

export default styles;