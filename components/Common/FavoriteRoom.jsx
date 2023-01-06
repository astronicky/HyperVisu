import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { LOCATION_SERVER } from "../../Constant";
import { useOrientation } from '../../hooks/useOrientation';
import config from '../../config/config';

const FavoriteRoom = ({ id, configDict, bgColor, textColor }) => {

	const [active, setActive] = useState(false);

	const icon = configDict[id].icon;
	const name = configDict[id].name;

	const orientation = useOrientation();
	const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

	// useEffect(() => {
        
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         changeScreenOrientation();
    //     });

    //     return unsubscribe;
    // }, [navigation]);

	return (
		<View style={{ ...orientationStyle.container, backgroundColor: bgColor }}>
			<Image 
				source={{ uri: icon.location === LOCATION_SERVER ? `${config.SERVER_URL}${icon.path}` : icon.path }}
				style={{ ...orientationStyle.image }}
			/>
			<Text style={{ ...orientationStyle.baseText, color: textColor }}>{ name }</Text>
		</View>
	)
}

const portrait = StyleSheet.create({
	container: {
		width: '30%',
		borderRadius: 10,
		borderWidth: 1, 
		borderColor: 'transparent', 
		borderStyle: 'solid', 
		height: 119,
		padding: 17,
		justifyContent: 'center',
	}, 
	activeContainer: {
		
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
});

const landscape = StyleSheet.create({
	container: {
		width: '18%',
		height: 119,
		borderRadius: 10,
		padding: 17,
		justifyContent: 'center', 
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
});

export default FavoriteRoom;