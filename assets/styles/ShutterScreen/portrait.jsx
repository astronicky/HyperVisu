import { StyleSheet } from "react-native";

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shutterContainerLand: {
        // flexDirection: 'row',
    },
    shutterContainer: {
        padding: 27,
        paddingBottom: 0
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
    shutterTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    shutterText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: 35,
        marginRight: 35,
        marginTop: 50,
        marginBottom: 50,
        padding: 18, 
        opacity: 0.9,
    },
    controlContainer: { 
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    sliderValueText: {
        width: 31,
        height: 41,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    textCaption: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
    },
    bottomControl: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    bottomSliderValue: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 41,
        letterSpacing: 0.41
    },
    bottomSlider: {
        width: '100%', 
        height: 40, 
        borderWidth: 1, 
        borderColor: 'red'
    }
});

export default portrait;