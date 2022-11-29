import { StyleSheet } from 'react-native';
import { ACTION_TURN_ON, ACTION_TURN_OFF, ACTION_LAMP_STATUS, ACTION_SHUTTER_STATUS } from '../../../Constant';

const landscape = StyleSheet.create({
    controlContent: {
        flex: 6,
        padding: 20,
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    switchContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',   
        alignItems: 'flex-start'
    },
    switch: {
        width: 103,
        height: 285,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1580C',
        borderRadius: 16,
        padding: 20,
        marginRight: 15
    },
    [ACTION_TURN_ON]: {
        width: 7.5,
        height: 42.8,
        marginBottom: 47
    },
    [ACTION_TURN_OFF]: {
        width: 42.8,
        height: 42.8,    
    },
    [ACTION_LAMP_STATUS]: {
        width: 48.5,
        height: 48.5,
        marginBottom: 47
    },
    [ACTION_SHUTTER_STATUS]: {
        width: 48.5,
        height: 48.5,
    },
    infoContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 209, 
        height: 287,
        paddingTop: 27,
        paddingBottom: 51
    },
    infoTitle: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: -0.24
    }, 
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoirteList: {
        flex: 6
    },
    favoriteText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    addModal: {
        flex: 1,
        backgroundColor: '#000000',
        opacity: 0.8,
        paddingTop: '40%',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    buttonGroup: {
        borderRadius: 16, 
        backgroundColor: '#2F2F31', 
        paddingLeft: 15,
        paddingRight: 15
    },
    newSenceModal: {
        backgroundColor: '#1D1D1E',
        padding: 23,
        height: '100%',
    },
    newSenceLand: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newSenceLeft: {
        width: '48%'
    },
    newSenceRight: {
        width: '48%'
    },
    newSenceButton: {
        marginTop: 20, 
        marginBottom: 25,
        paddingLeft: '25%',
        paddingRight: '25%'
    },
    scheduleModal: {
        backgroundColor: '#2F2F31', 
        opacity: 0.9, 
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '5%',
        marginBottom: '5%',
        padding: 21
    }
});

export default landscape;