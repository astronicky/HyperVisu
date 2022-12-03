import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { useOrientation } from '../../hooks/useOrientation';
import Icon from 'react-native-vector-icons/Fontisto';

const SettingItem = ({title, path, navigation}) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        
        <View style={orientationStyle.container}>
            <TouchableOpacity>
                <Pressable style={portrait.baseButton} onPress={() => (navigation) && navigation.navigate(path)}>
                    <Text style={portrait.titleText}>{title}</Text>
                    <Icon name="angle-right" size={15} color="#FF9500" />
                </Pressable> 
            </TouchableOpacity>           
        </View>
        
      
    )
}

const portrait = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 21,
        paddingTop: 19,
        paddingBottom: 18,
        paddingRight: 21,
        backgroundColor: '#2F2F31',
        marginBottom: 15
    },
    baseButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        lineHeight: 17
    }
});

const landscape = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 21,
        paddingTop: 19,
        paddingBottom: 18,
        paddingRight: 21,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        marginRight: 24
    },
});

export default SettingItem;