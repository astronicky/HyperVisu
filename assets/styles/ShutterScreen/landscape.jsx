import { StyleSheet } from "react-native";

const landscape = StyleSheet.create({
    shutterContainerLand: {
        flexDirection: 'row',
    },
    shutterContainer: {
        padding: 27,
        paddingBottom: 0,
        flex: 6
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    shutterTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    shutterText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
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
    sliderValueText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF',
        alignSelf: 'center',
        marginRight: 11
    },
    controlContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    bottomControl: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    bottomSlider: {
        width: '80%', 
        height: 50, 
        borderWidth: 1, 
        borderColor: 'red'
    }
});

export default landscape;