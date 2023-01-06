import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, ToastAndroid } from "react-native";
// import WS from "react-native-websocket";
import SettingItem from "../components/Common/SettingItem";
import ConfigInfo from "../components/Common/ConfigInfo";
import MainButton from "../components/Common/MainButton";
import Layout from "../components/Layout/Layout";
import { DONE, LOGIN, CONFIGURATION, SERVER, CONFIG_DATA } from "../Constant";
import { getServerConfiguration } from "../apis/configuration";
import useWebSocket from "../hooks/useWebSocket";

const ConfigScreen = ({ navigation }) => {

    const registerSocket = useWebSocket();

    const [configData, setConfigData] = useState({});
    const configKeys = Object.keys(configData);
    const configValues = Object.values(configData);
    console.log(configData);

    useEffect(() => {
        registerSocket('configuration-updated', setConfigData);

        getServerConfiguration()
        .then(data => { // then print response status
            setConfigData(data.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

    useEffect(() => { console.log(configData); }, [configData]);

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
                    {configKeys?.map((key, index) => {
                        return (
                            <ConfigInfo key={index} name={configKeys[index]} info={configValues[index]}></ConfigInfo>
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

