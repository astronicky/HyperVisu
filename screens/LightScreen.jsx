import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import CommonModal from '../components/Common/CommonModal';
import ToggleButton from '../components/Common/ToggleButton';
import { LIGHT_DAMONROOM, LIGHT_BATHROOM } from "../Constant";

const LightScreen = ({ navigation }) => {

    const [damonRoomValue, setDamonRoomValue] = useState();
    const [bathroomValue, setBathroomValue] = useState();
    const [isVisibleShowModal, setIsVisibleShowModal] = useState(false);
    const [modaIndex, setModalIndex] = useState("");

    const onShowModal = (index, isVisibleModal) => {
        setModalIndex(index);
        setIsVisibleShowModal(isVisibleModal);
    }

    const onDamonRoomValue = (value) => {
        setDamonRoomValue(value);
    };

    const onBathroomValue = (value) => {
        setBathroomValue(value);
    };

    useEffect(() => { 

    }, [isVisibleShowModal]);

    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <CommonModal index={modaIndex} isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CommonModal>
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
                                        index={index}
                                        title="On/Off Switch" 
                                        bottomTitle={damonRoomValue}
                                        imgMainUrl={data.imgMainUrl}
                                        flagButton={data.flagButton}
                                        flagSlider={data.flagSlider}
                                        changeSliderValue={onDamonRoomValue}
                                        onShowModal={onShowModal}></ToggleButton>
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
                                        index={index}
                                        title="On/Off Switch" 
                                        bottomTitle={bathroomValue}
                                        imgMainUrl={data.imgMainUrl}
                                        flagButton={data.flagButton}
                                        flagSlider={data.flagSlider}
                                        changeSliderValue={onBathroomValue}
                                        onShowModal={onShowModal}></ToggleButton>
                        );
                        })}
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

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