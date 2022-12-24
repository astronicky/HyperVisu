import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import { useOrientation } from '../hooks/useOrientation';
import { GRAPH, OVAL, OVAL_1, OVAL_2 } from '../Constant';

const PowerScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15}}>
                            <Text style={portrait.mainTitle}>Power</Text>
                            <Text style={{ backgroundColor: '#2F2F31', borderRadius: 10, paddingTop: 1, paddingBottom: 1, paddingLeft: 10, paddingRight: 10, color: '#FFFFFF' }}>Export</Text>
                        </View>
                        <Text style={portrait.subTitle}>Widget Description</Text>
                        <View style={ orientationStyle.textGroup }>
                            <Text style={{ ...orientationStyle.baseText, backgroundColor: '#636366' }}>Hour</Text>
                            <View style={portrait.verticleLine}></View>
                            <Text style={orientationStyle.baseText }>Day</Text>
                            <View style={portrait.verticleLine}></View>
                            <Text style={orientationStyle.baseText }>Month</Text>
                            <View style={portrait.verticleLine}></View>
                            <Text style={orientationStyle.baseText }>Year</Text>
                        </View>
                        <View style={orientationStyle.powerText}>
                            <Text style={orientationStyle.powerNum}>182</Text>
                            <Text style={orientationStyle.powerUnit}>kWh</Text>
                        </View>
                    </View>
                    <View style={orientationStyle.graphContainer}>
                        <ImageBackground style={{ height: '100%', width: '100%', position: 'relative' }} source={GRAPH} resizeMode='stretch'>
                            <View style={{...portrait.horizonLine, top: 30}} />
                            <View style={{...portrait.horizonLine, top: 70 }} />
                            <View style={{...portrait.horizonLine, top: 105 }} />
                            <View style={{...portrait.horizonLine, top: 117 }} />
                            <Image source={OVAL} style={{ position:'absolute', top: -10, left: 250 }}></Image>
                            <Image source={OVAL} style={{ position:'absolute', top: 30, left: 190 }}></Image>
                            <Image source={OVAL} style={{ position:'absolute', top: 65, left: 100 }}></Image>
                            <Image source={OVAL} style={{ position:'absolute', top: 80, left: 40 }}></Image>
                            <Image source={OVAL_1} style={{ position:'absolute', top: 79, left: 114 }}></Image>
                            <Image source={OVAL_2} style={{ position:'absolute', top: 65, left: 99 }}></Image>
                        </ImageBackground>
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
    textGroup: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 9,
    },
    graphContainer: {
        height: 350, 
        width: '100%',
    },
    baseText: {
        flex: 3,
        padding: 10,
        marginTop: 20,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 17,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#FFFFFF',
        borderRadius: 9
    },
    verticleLine: {
        height: '40%',
        width: 1,
        backgroundColor: '#636366',
        alignSelf: 'flex-end',
        marginBottom: 7
    },
    powerText: {
        paddingTop: 68,
        paddingBottom: 98,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    powerNum: {
        fontSize: 80, 
        fontWeight: '700', 
        lineHeight: 95, 
        color: '#F1580C', 
        letterSpacing: -1
    },
    powerUnit: {
        fontSize: 30, 
        fontWeight: '500', 
        lineHeight: 65,
        color: '#F1580C', 
        letterSpacing: -1,
        alignSelf: 'flex-end'
    }, 
    horizonLine: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        opacity: 0.5
    }
});

const landscape = StyleSheet.create({
    graphContainer: {
        height: 350,
        width: '100%'
    },
    textGroup: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 9,
    },
    baseText: {
        width: '10%',
        padding: 10,
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#FFFFFF',
        borderRadius: 9
    },
    powerText: {
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    powerNum: {
        fontSize: 80, 
        fontWeight: '700', 
        lineHeight: 95, 
        color: '#F1580C', 
        letterSpacing: -1
    },
    powerUnit: {
        fontSize: 30, 
        fontWeight: '500', 
        lineHeight: 65,
        color: '#F1580C', 
        letterSpacing: -1,
        alignSelf: 'flex-end'
    }, 
});

export default PowerScreen;