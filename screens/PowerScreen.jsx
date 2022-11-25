import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import { CAMERA_IMAGE, CAMERA_RED, CAMERA_GREEN } from '../Constant';

const PowerScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.categoryTitle}>
                    <DateBar flagButton={false}></DateBar>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15}}>
                        <Text style={styles.mainTitle}>Power</Text>
                        <Text style={{ backgroundColor: '#2F2F31', borderRadius: 5, paddingTop: 1, paddingBottom: 1, paddingLeft: 10, paddingRight: 10, color: '#FFFFFF' }}>Export</Text>
                    </View>
                    <Text style={styles.subTitle}>Widget Description</Text>
                    <View style={ styles.textGroup }>
                        <Text style={{ ...styles.baseText, backgroundColor: '#636366' }}>Hour</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={ styles.baseText }>Day</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={ styles.baseText }>Month</Text>
                        <View style={styles.verticleLine}></View>
                        <Text style={ styles.baseText }>Year</Text>
                    </View>
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
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 9,
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
    }
});

export default PowerScreen;