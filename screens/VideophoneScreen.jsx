import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import VideoPhone from '../components/Widgets/VideoPhone';
import { useOrientation } from '../hooks/useOrientation';

const VideophoneScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15}}>
                            <Text style={portrait.mainTitle}>Videophone</Text>                      
                        </View>
                        <Text style={portrait.subTitle}>Widget Description</Text>
                        <View style={orientationStyle.videoContainerLand}>
                            <VideoPhone caption="Entrance door" status={true}></VideoPhone>
                            <VideoPhone caption="Kitchen" status={false}></VideoPhone>
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
    categoryTitle: {
        padding: 27,
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
    categoryContainer: {
        padding: 27,
    },
    videoContainerLand: {
        
    },
    screenContainer: {

    },
    videoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoTitle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'      
    },
    videoName: {
        color: '#FFFFFF',
        marginLeft: 9
    },
    videoMain: {
        marginTop: 15,
        width: '100%',
        height: 274
    },
    videoBottom: {
        marginTop: 22,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const landscape = StyleSheet.create({
    videoContainerLand: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    screenContainer: {
        width: '48%'
    },
    videoMain: {
        marginTop: 15,
        width: '100%',
        height: 350
    },
});

export default VideophoneScreen;