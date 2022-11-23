import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import NormalButton from "../components/Common/NormalButton";
import MainButton from "../components/Common/MainButton";
import Layout from "../components/Layout/Layout";
import { DONE, OPEN_CONFIGURATION, LOGIN, CONFIG, SETTING, SETTING_DATA } from "../Constant";


const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.settingTitle}>{SETTING}</Text>
                    {SETTING_DATA?.map((data, index) => {
                    return (
                        <NormalButton key={index} {...{ title: data.name, navigation, path: LOGIN }}></NormalButton>
                    );
                    })}
                    <TouchableOpacity style={{ marginTop: 40 }}>          
                        <NormalButton {...{ title: OPEN_CONFIGURATION, path: CONFIG, navigation }}></NormalButton>
                    </TouchableOpacity>
                    <View>
                        <MainButton {...{ style: styles.mainButton, title: DONE, path: LOGIN, navigation }} />
                    </View>
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
    },
    settingTitle: {
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        color: '#FFFFFF',
        marginBottom: 48
    },
    mainButton: {
        marginTop: 40
    }
})

export default SettingScreen;