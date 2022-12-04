import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import ShutterBlind from '../components/Widgets/ShutterBlind';
import { useOrientation } from '../hooks/useOrientation';

const ShutterScreen = () => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>              
                    <View style={styles.shutterTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={orientationStyle.mainTitle}>Shutter</Text>
                        <Text style={orientationStyle.subTitle}>Control your house</Text>
                    </View>
                    <View style={orientationStyle.shutterContainerLand}>
                        <View style={orientationStyle.shutterContainer}>
                            <View style={orientationStyle.shutterTilte}>
                                <Text style={orientationStyle.shutterText}>Amanda’s Room</Text>
                            </View>
                            <ShutterBlind></ShutterBlind>
                            <ShutterBlind></ShutterBlind>
                        </View>
                        <View style={orientationStyle.shutterContainer}>
                            <View style={portrait.shutterTilte}>
                                <Text style={portrait.shutterText}>Damon’s Room</Text>
                            </View>
                            <ShutterBlind></ShutterBlind>
                            <ShutterBlind></ShutterBlind>
                            <ShutterBlind></ShutterBlind>
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
      )
};

const styles = StyleSheet.create({
    shutterTitle: {
        padding: 25,
        paddingBottom: 0
    },
});

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shutterContainerLand: {
        // flexDirection: 'row',
    },
    shutterContainer: {
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
    shutterTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    shutterText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
});

const landscape = StyleSheet.create({
    shutterContainerLand: {
        flexDirection: 'row',
    },
    shutterContainer: {
        padding: 27,
        paddingBottom: 0,
        flex: 6
    },
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
    shutterTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    shutterText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
});

export default ShutterScreen;