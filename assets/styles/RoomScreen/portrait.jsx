import { StyleSheet } from 'react-native';
import { ACTION_TURN_ON, ACTION_TURN_OFF, ACTION_LAMP_STATUS, ACTION_SHUTTER_STATUS } from '../../../Constant';

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    smartHomeTitle: {
        padding: 20,
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    controlContent: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    switchContent: {
        flex: 5, 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    switch: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1580C',
        borderRadius: 16,
        padding: 20
    },
    infoContent: {
        flex: 5,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 147,
        paddingTop: 19,
        paddingBottom: 36.31
    },
    infoTitle: {
        marginTop: 8,
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24
    }, 
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteRooms: {
        padding: 20,
        paddingTop: 0
    },
    [ACTION_TURN_ON]: {
        width: 5.24,
        height: 30,
        marginBottom: 35
    },
    [ACTION_TURN_OFF]: {
        width: 30,
        height: 30
    },
    [ACTION_LAMP_STATUS]: {
        width: 34,
        height: 34,
        marginBottom: 35
    },
    [ACTION_SHUTTER_STATUS]: {
        width: 34,
        height: 34,
    },
    favoriteCategory: {
        width: '100%',
        padding: 20,
        paddingBottom: 0
    },
    favoriteTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    favoriteText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    roomItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addModal: {
        flex: 1,
        backgroundColor: '#000000',
        opacity: 0.8,
        paddingTop: 500,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 20
    },
    buttonGroup: {
        borderRadius: 16, 
        backgroundColor: '#2F2F31', 
        paddingLeft: 15
    },
    buttonSence: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        // borderRadius: 14, 
        padding: 10,
        paddingLeft: 20
    },
    buttonCancel: {
        backgroundColor: '#2F2F31',
        borderRadius: 14,
        padding: 17,
        color: '#F1580C',
        fontSize: 17, 
        fontWeight: '600', 
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 22
    },
    textPlus: { 
        borderWidth: 1, 
        borderColor: '#FFFFFF', 
        color: '#F1580C', 
        fontSize: 40, 
        fontWeight: '600', 
        lineHeight: 25,

    },
    textSence: {
        color: '#F1580C', 
        fontSize: 20, 
        fontWeight: '600', 
        lineHeight: 25, 
    },
    newSenceModal: {
        marginTop: 20,
        backgroundColor: '#1D1D1E',
        padding: 23,
        height: '100%',
    },
    newSenceName: {
        color: '#FFFFFF', 
        fontSize: 17, 
        fontWeight: '600', 
        lineHeight: 22, 
        letterSpacing: -0.41
    },
    newSenceTitle: {
        marginLeft: 50, 
        color: '#8E8E93', 
        fontSize: 17, 
        fontWeight: '600', 
        lineHeight: 22, 
        letterSpacing: -0.41
    },
    textNewScene: {
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 36,
        alignSelf: 'center'
    },
    textNewSceneTitle: {
        flexDirection: 'row',
        // marginLeft: -24,
        // marginRight: -24,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.92)',
        borderBottomColor: 'rgba(255, 255, 255, 0.92)',
        paddingTop: 14.5,
        paddingBottom: 14.5,
        paddingLeft: 16.5
    },
    newSenceLand: {

    },
    newSenceLeft: {

    },
    newSenceRight: {
        paddingTop: 30
    },
    newSenceButton: {
        marginTop: 20, 
        marginBottom: 25
    },
    scheduleModal: {
        backgroundColor: '#2F2F31', 
        opacity: 0.9, 
        marginTop: 140, 
        marginLeft: 36, 
        marginRight: 36, 
        padding: 21
    }
});

export default portrait;