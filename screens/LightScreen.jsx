import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import OnOffSwitch from '../components/Widgets/OnOffSwitch';
import Dimmer from '../components/Widgets/Dimmer';
import PushButton from '../components/Widgets/PushButton';
import RGBDimmer from '../components/Widgets/RGBDimmer';
import { landscape, portrait } from '../assets/styles/LightScreen/index';
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


export default LightScreen;