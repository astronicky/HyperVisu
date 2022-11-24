import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import CheckBoxButton from '../components/Common/CheckBoxButton';
import { SHUTTER_AMAND, SHUTTER_DAMON } from '../Constant';

const ShutterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.categoryTitle}>
                    <DateBar flagButton={false}></DateBar>
                    <Text style={styles.mainTitle}>Shutter</Text>
                    <Text style={styles.subTitle}>Control your house</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryTilte}>
                        <Text style={styles.categoryText}>Amanda’s Room</Text>
                    </View>
                    {SHUTTER_AMAND?.map((data, index) => {
                        return (
                        <CheckBoxButton key={index} 
                                        flagButton={false}
                                        title={data.title} 
                                        bottomTitle={data.bottomTitle + "%"}
                                        imgMainUrl={data.imgMainUrl}
                                        imgCenterUrl={data.imgCenterUrl}></CheckBoxButton>
                        );
                    })}
                </View>
                <View style={styles.categoryContainer}>
                <View style={styles.categoryTilte}>
                    <Text style={styles.categoryText}>Damon’s Room</Text>
                </View>
                {SHUTTER_DAMON?.map((data, index) => {
                    return (
                    <CheckBoxButton key={index} 
                                    flagButton={false}
                                    title={data.title} 
                                    bottomTitle={data.bottomTitle + "%"}
                                    imgMainUrl={data.imgMainUrl}
                                    imgCenterUrl={data.imgCenterUrl}></CheckBoxButton>
                    );
                })}
                </View>
            </ScrollView>
        </Layout>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    categoryTitle: {
        padding: 25,
        paddingBottom: 0
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        paddingBottom: 0
    },
    categoryTilte: {
        display: 'flex',
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
});

export default ShutterScreen;