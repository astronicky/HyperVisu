import { StyleSheet } from "react-native";
import { ACTION_SWITCH } from '../../../Constant';

const portrait = StyleSheet.create({
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '20%',
        marginBottom: '20%',
        padding: 18, 
        opacity: 0.9,
    },
    textCaption: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
    },
    brightButton: {
        padding: '20%', 
    },
    colorButton: {
        padding: '20%'
    },
    [ACTION_SWITCH]: {
        width: 124,
        height: 270
    },
    tempText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    cameraContainer: {
        // 
    },
    cameraItem: {
        borderRadius: 20,
        position: 'relative'
    },
    cameraTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 12,
        width: '100%', 
        backgroundColor: '#1C1C1E',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        zIndex: 1
    },
    cameraText: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    cameraBackground: {
        width: '100%',
        height: 261
    }
});

export default portrait;