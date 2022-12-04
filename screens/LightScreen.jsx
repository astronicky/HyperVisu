import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import OnOffSwitch from '../components/Widgets/OnOffSwitch';
import Dimmer from '../components/Widgets/Dimmer';
import PushButton from '../components/Widgets/PushButton';
import RGBDimmer from '../components/Widgets/RGBDimmer';
import { useOrientation } from '../hooks/useOrientation';

const LightScreen = () => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    useEffect(() => { 

    }, []);

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={orientationStyle.mainTitle}>Light</Text>
                        <Text style={portrait.subTitle}>Control your house</Text>
                    </View>
                    <View style={orientationStyle.ligthContainerLand}>
                        <View style={orientationStyle.lightContainer}>
                            <View style={portrait.lightTilte}>
                                <Text style={orientationStyle.categoryText}>Damon’s Room</Text>
                            </View>
                            <OnOffSwitch></OnOffSwitch>
                            <OnOffSwitch></OnOffSwitch>
                            <Dimmer></Dimmer>
                        </View>
                        <View style={orientationStyle.lightContainer}>
                            <View style={portrait.lightTilte}>
                                <Text style={orientationStyle.categoryText}>Bathroom</Text>
                            </View>
                            <PushButton></PushButton>
                            <PushButton></PushButton>
                            <RGBDimmer></RGBDimmer>
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    categoryTitle: {
        padding: 27,
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
        letterSpacing: -0.41
    },
    lightContainer: {
        padding: 27,
        paddingBottom: 0
    },
    lightTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    ligthContainerLand: {
        flexDirection: 'column'
    },
});

const landscape = StyleSheet.create({
    mainTitle: {
        color: 'white',
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
        letterSpacing: -0.41
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    ligthContainerLand: {
        flexDirection: 'row'
    },
    lightContainer: {
        padding: 27,
        paddingBottom: 0,
        flex: 6
    },
});

export default LightScreen;