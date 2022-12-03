import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import ShutterBlind from '../components/Widgets/ShutterBlind';
import { useOrientation } from '../hooks/useOrientation';
import { portrait, landscape } from '../assets/styles/ShutterScreen/index';

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
})

export default ShutterScreen;