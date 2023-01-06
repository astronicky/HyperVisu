import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LOCATION_SERVER } from "../../Constant";
import { useOrientation } from '../../hooks/useOrientation';
import config from '../../config/config';

const FavoriteCategory = ({ id, configDict, bgColor, textColor, imgUpUrl, imgDownUrl }) => {

	let icon = configDict[id].icon || configDict[id].default.icon;
	const name = configDict[id].name || configDict[id].default.name;

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

	if (typeof icon === 'string') {
		icon = JSON.parse(icon);
	}

    if (!icon) {
        icon = {};
    }

    // useEffect(() => {
        
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         changeScreenOrientation();
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    return (
        <View style={{ ...orientationStyle.container, backgroundColor: bgColor }}>
            { imgUpUrl !== undefined && <Image source={ imgUpUrl } style={ portrait.imgUp }></Image>}
            <Image 
                source={{ uri: icon.location === LOCATION_SERVER ? `${config.SERVER_URL}${icon.path}` : icon.path }}
                style={{ ...orientationStyle.image }}
            />
            <Text style={{ ...orientationStyle.baseText, color: textColor }}>{ name }</Text>
            {imgDownUrl !== undefined && <Image source={ imgDownUrl } style={ portrait.imgDown }></Image> }
        </View>
    )
}

const portrait = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 10,
        borderWidth: 1, 
        borderColor: 'transparent', 
        borderStyle: 'solid', 
        paddingLeft: 17,
        paddingRight: 10,
        paddingVertical: 9,
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
	image: {
		width: 38, 
		height: 38, 
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
        paddingRight: 10,
        paddingVertical: 9,
        justifyContent: 'center',
        width: '18%',
        height: 119,
    },
    baseText: {
        marginTop: 5,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17
    },
})

export default FavoriteCategory;