import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useOrientation } from '../../hooks/useOrientation';

const FavoriteCategory = ({ title, imgMainUrl, bgColor, textColor, imgUpUrl, imgDownUrl }) => {

    const orientation = useOrientation();

    return (
        <View style={orientation === 'PORTRAIT' ? {...portrait.container, backgroundColor: bgColor} : {...landscape.container, backgroundColor: bgColor}}>
            {imgUpUrl !== undefined && <Image source={imgUpUrl} style={portrait.imgUp}></Image>}
            <Image source={imgMainUrl}></Image>
            <Text style={{...portrait.baseText, color: textColor}}>{title}</Text>
            {imgDownUrl !== undefined && <Image source={imgDownUrl} style={portrait.imgDown}></Image>}
        </View>
    )
}

const portrait = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 10,
        paddingLeft: 17,
        paddingTop: 9,
        paddingBottom: 9,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'center',
        width: '30%',
        height: 119,
        marginBottom: 20
    },
    baseText: {
        marginTop: 5,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17
    },
    imgUp: {
        position: 'absolute',
        left: '95%',
        top: '10%'
    },
    imgDown: {
        position: 'absolute',
        left: '95%',
        top: '95%'
    }
});

const landscape = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 10,
        paddingLeft: 17,
        paddingTop: 9,
        paddingBottom: 9,
        paddingRight: 10,
        display: 'flex',
        justifyContent: 'center',
        width: '18%',
        height: 119,
    },
})

export default FavoriteCategory;