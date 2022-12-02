import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOrientation } from '../../hooks/useOrientation';

const RoomItem = ({title, imgUrl, path, navigation}) => {

    const orientation = useOrientation();
    const roomNameSave = async (roomName) => {
        console.log("Save : ", roomName);
        try {
            await AsyncStorage.setItem('room_name', roomName);
        } catch (e) {
            // saving error
        }
    }

    return (
        <View style={orientation === 'PORTRAIT' ? portrait.container : landscape.container}>
            <TouchableOpacity>
                <Pressable
                    style={portrait.baseButton}
                    onPress={() => { 
                        roomNameSave(title) 
                        navigation.navigate(path)
                        }
                    }
                >
                    <View><Image source={imgUrl}></Image></View>
                    <View><Text style={portrait.categoryText}>{title}</Text></View>
                </Pressable> 
            </TouchableOpacity>           
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
    }
});

const landscape = StyleSheet.create({
    container: {
        width: '48%',
        borderRadius: 10,
        padding: 11,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        marginLeft: 15
    }
});

export default RoomItem;