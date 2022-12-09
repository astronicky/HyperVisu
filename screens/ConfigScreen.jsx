import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
// import WS from "react-native-websocket";
import SettingItem from "../components/Common/SettingItem";
import ConfigInfo from "../components/Common/ConfigInfo";
import MainButton from "../components/Common/MainButton";
import Layout from "../components/Layout/Layout";
import { DONE, LOGIN, CONFIGURATION, SERVER, CONFIG_DATA } from "../Constant";

const ConfigScreen = ({ navigation }) => {
    
    const ws = useRef(new WebSocket('ws://192.168.106.65:9000')).current;
    

    useEffect(() => {
        // ws.send("config");
    }, []);

    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.container}>
                        <Text style={styles.configTitle}>{CONFIGURATION}</Text>
                        <TouchableOpacity>          
                            <SettingItem {...{ title: SERVER, path: LOGIN, navigation }}></SettingItem>
                        </TouchableOpacity>
                    </View>
                    {CONFIG_DATA?.map((data, index) => {
                        return (
                            <ConfigInfo key={index} {...{ name: data.name, info: data.info}}></ConfigInfo>
                        )       
                    })}
                    <View style={{ padding: 25, marginTop: 60 }}>
                        <MainButton {...{ style: styles.ConfigButton, title: DONE, path: LOGIN, navigation }}></MainButton>
                    </View>        
                </ScrollView>
            </Layout>       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    container: {
        padding: 25, 
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)'
    },
    configTitle: {
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        color: 'white',
        marginBottom: 48
    }
});

export default ConfigScreen;

