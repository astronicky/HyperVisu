import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import ToggleButton from '../components/Common/ToggleButton';
import { ROOMS, LIGHT_DAMONROOM, LIGHT_BATHROOM } from "../Constant";

const LightScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.categoryTitle}>
                    <DateBar flagButton={false}></DateBar>
                    <Text style={styles.mainTitle}>Light</Text>
                    <Text style={styles.subTitle}>Control your house</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryTilte}>
                    <Text style={styles.categoryText}>Damon’s Room</Text>
                    </View>
                    {LIGHT_DAMONROOM?.map((data, index) => {
                    return (
                        <ToggleButton key={index}
                                    title="On/Off Switch" 
                                    bottomTitle={data.bottomTitle}
                                    imgMainUrl={data.imgMainUrl}
                                    flagButton={data.flagButton}
                                    flagSlider={data.flagSlider}
                                    {...{ navigation, path: ROOMS }}></ToggleButton>
                    );
                    })}
                </View>
                <View style={styles.categoryContainer}>
                    <View style={styles.categoryTilte}>
                    <Text style={styles.categoryText}>Bathroom</Text>
                    </View>
                    {LIGHT_BATHROOM?.map((data, index) => {
                    return (
                        <ToggleButton key={index}
                                    title="On/Off Switch" 
                                    bottomTitle={data.bottomTitle}
                                    imgMainUrl={data.imgMainUrl}
                                    flagButton={data.flagButton}
                                    flagSlider={data.flagSlider}
                                    {...{ navigation, path: ROOMS }}></ToggleButton>
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
    container: {
        flex: 1,
        backgroundColor: '#000000'
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

export default LightScreen;