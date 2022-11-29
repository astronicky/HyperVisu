import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import DateBar from '../components/Common/DateBar';
import NormalButton from "../components/Common/NormalButton";
import MainButton from "../components/Common/MainButton";
import Layout from "../components/Layout/Layout";
import { useOrientation } from '../hooks/useOrientation';
import { DONE, LOGIN, SETTING, SETTING_DATA } from "../Constant";


const SettingScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.container}>
                        <View style={portrait.settingTitle}>
                            <DateBar flagButton={false}></DateBar>
                            <Text style={orientationStyle.mainTitle}>{SETTING}</Text>
                            <Text style={orientationStyle.subTitle}>Control your house</Text>
                        </View>
                        <View style={orientationStyle.settingContainerLand}>
                            {SETTING_DATA?.map((data, index) => {
                            return (<View key={index} style={orientation === 'LANDSCAPE' && {width: '48%', marginRight: 24}}>
                                <NormalButton {...{ title: data.name, navigation, path: data.path }}></NormalButton>
                            </View>);
                            })}
                        </View>
                        <View>
                            <MainButton {...{ style: orientationStyle.mainButton, title: DONE, path: LOGIN, navigation }} />
                        </View>
                    </View>                  
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
}

const portrait = StyleSheet.create({
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
        paddingBottom: 0
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41,
        marginBottom: 20
    },
    mainButton: {
        marginTop: 40
    }
});

const landscape = StyleSheet.create({
    mainTitle: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.41,
        marginBottom: 20
    },
    settingContainerLand: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mainButton: {
        marginTop: 40,
        paddingLeft: '25%',
        paddingRight: '25%',
    }
});

export default SettingScreen;