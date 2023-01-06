import { StyleSheet } from "react-native";

const landscape = StyleSheet.create({
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
    categoryText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    ligthContainerLand: {
        flexDirection: 'row'
    },
    lightContainer: {
        padding: 27,
        paddingBottom: 0,
        flex: 6
    },
});

export default landscape;