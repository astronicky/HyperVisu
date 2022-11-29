import { StyleSheet } from "react-native";
import { ACTION_SWITCH } from '../../../Constant';

const landscape = StyleSheet.create({
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '5%',
        marginBottom: '5%',
        padding: 20, 
        opacity: 0.9,
    },
    brightButton: {
        paddingLeft: '30%', 
        paddingRight: '30%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    colorButton: {
        paddingLeft: '30%', 
        paddingRight: '30%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    cameraBackground: {
        width: '100%',
        height: 350
    },
    [ACTION_SWITCH]: {
        marginTop: 10,
        width: 124,
        height: 325
    },
});

export default landscape;