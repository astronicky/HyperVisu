import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import ActionButton from '../components/Common/ActionButton';
import { useOrientation } from '../hooks/useOrientation';
import { CAMERA_RED, CAMERA_IMAGE, ACTION_SOUND_VOLUME, ACTION_CATEGORIES_BUTTON, ACTION_LOGOUT_BUTTON, ACTION_TALK_BUTTON } from '../Constant';

const VideophoneScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const handleClick = () => {

    }

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
                            <View style={orientationStyle.screenContainer}>
                                <View style={portrait.videoTop}>
                                    <View style={portrait.videoTitle}>
                                        <Image source={CAMERA_RED}></Image>
                                        <Text style={portrait.videoName}>Entrance door</Text>
                                    </View>
                                    <ActionButton name={ACTION_SOUND_VOLUME} style={portrait[ACTION_SOUND_VOLUME]} onClick={handleClick} />
                                </View>
                                <View style={orientationStyle.videoMain}>
                                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} source={CAMERA_IMAGE}></ImageBackground>
                                </View>
                                <View style={portrait.videoBottom}>
                                    <ActionButton name={ACTION_CATEGORIES_BUTTON} style={portrait[ACTION_CATEGORIES_BUTTON]} onClick={handleClick} />
                                    <ActionButton name={ACTION_TALK_BUTTON} style={portrait[ACTION_TALK_BUTTON]} onClick={handleClick} />
                                    <ActionButton name={ACTION_LOGOUT_BUTTON} style={portrait[ACTION_LOGOUT_BUTTON]} onClick={handleClick} />    
                                </View>
                                <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>02:06:09 pm {"\n"} Today</Text>
                            </View>
                            <View style={orientationStyle.screenContainer}>
                                <View style={portrait.videoTop}>
                                    <View style={portrait.videoTitle}>
                                        <Image source={CAMERA_RED}></Image>
                                        <Text style={portrait.videoName}>Entrance door</Text>
                                    </View>
                                    <ActionButton name={ACTION_SOUND_VOLUME} style={portrait[ACTION_SOUND_VOLUME]} onClick={handleClick} />
                                </View>
                                <View style={orientationStyle.videoMain}>
                                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} source={CAMERA_IMAGE}></ImageBackground>
                                </View>
                                <View style={portrait.videoBottom}>
                                    <ActionButton name={ACTION_CATEGORIES_BUTTON} style={portrait[ACTION_CATEGORIES_BUTTON]} onClick={handleClick} />
                                    <ActionButton name={ACTION_TALK_BUTTON} style={portrait[ACTION_TALK_BUTTON]} onClick={handleClick} />
                                    <ActionButton name={ACTION_LOGOUT_BUTTON} style={portrait[ACTION_LOGOUT_BUTTON]} onClick={handleClick} />    
                                </View>
                                <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>02:06:09 pm {"\n"} Today</Text>
                            </View>
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
    [ACTION_SOUND_VOLUME]: {
        width: 43,
        height: 43
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