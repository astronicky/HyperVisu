import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useOrientation } from '../../hooks/useOrientation';

const FavoriteItem = ({ room, imgUrl, bgColor, textColor }) => {

    const orientation = useOrientation();

    return (
        <View style={orientation === 'PORTRAIT' ? {...portrait.container, backgroundColor: bgColor}:{...landscape.container, backgroundColor: bgColor}}>
            <Image source={imgUrl}></Image>
            <Text style={{...portrait.baseText, color: textColor}}>{room}</Text>
        </View>
    )
}

const portrait = StyleSheet.create({
    container: {
        width: '30%',
        height: 119,
        borderRadius: 10,
        padding: 17,
        justifyContent: 'center'    
    },
    baseText: {
        marginTop: 5,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17
    }
});

const landscape = StyleSheet.create({
    container: {
        width: '18%',
        height: 119,
        borderRadius: 10,
        padding: 17,
        display: 'flex',
        justifyContent: 'center',
    },
});

export default FavoriteItem;