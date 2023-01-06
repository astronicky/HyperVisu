import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOrientation } from '../../hooks/useOrientation';
import { LOCATION_SERVER } from "../../Constant";
import config from "../../config/config";

const RoomItem = ({id, configDict, onClick}) => {

    const orientation = useOrientation();
	const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

	const icon = configDict[id].icon;
	const name = configDict[id].name;

    return (
        <View style={orientationStyle.container}>
            <Pressable
                style={orientationStyle.baseButton}
                onPress={onClick}
            >
                <View>
                    <Image 
                        source={{ uri: icon.location === LOCATION_SERVER ? `${config.SERVER_URL}${icon.path}` : icon.path }}
                        style={orientationStyle.image}
                    />
                </View>
                <View><Text style={orientationStyle.categoryText}>{name}</Text></View>
            </Pressable>       
        </View>
    )
}

const portrait = StyleSheet.create({
    container: {
        backgroundColor: '#2F2F31',
        borderRadius: 10,
        padding: 11,
        paddingLeft: 15,       
        marginBottom: 15
    },
    baseButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    categoryText: {
        marginLeft: 25,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    }, 
	image: {
		width: 38, 
		height: 38, 
	}, 
});

const landscape = StyleSheet.create({
    container: {
        width: '48%',
        borderRadius: 10,
        padding: 11,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        marginLeft: 15
    }, 
	image: {
		width: 38, 
		height: 38, 
	}, 
});

export default RoomItem;