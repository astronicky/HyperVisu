import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import CommonModal from '../components/Common/CommonModal';
import ToggleButton from '../components/Common/ToggleButton';
import { landscape, portrait } from '../assets/styles/LightScreen/index';
import { useOrientation } from '../hooks/useOrientation';
import { LIGHT_DAMONROOM, LIGHT_BATHROOM } from "../Constant";

const LightScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

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
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <CommonModal index={modaIndex} isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CommonModal>
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
                        <View style={orientationStyle.lightContainer}>
                            <View style={portrait.lightTilte}>
                                <Text style={orientationStyle.categoryText}>Bathroom</Text>
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
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};


export default LightScreen;