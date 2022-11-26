import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import ActionButton from '../components/Common/ActionButton';
import { CAMERA_RED, CAMERA_IMAGE, ACTION_SOUND_VOLUME, ACTION_CATEGORIES_BUTTON, ACTION_LOGOUT_BUTTON, ACTION_TALK_BUTTON } from '../Constant';

const VideophoneScreen = ({ navigation }) => {

    const handleClick = () => {

    }

    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15}}>
                            <Text style={styles.mainTitle}>Videophone</Text>                      
                        </View>
                        <Text style={styles.subTitle}>Widget Description</Text>
                        <View style={styles.videoTop}>
                            <View style={styles.videoTitle}>
                                <Image source={CAMERA_RED}></Image>
                                <Text style={styles.videoName}>Entrance door</Text>
                            </View>
                            <ActionButton name={ACTION_SOUND_VOLUME} style={styles[ACTION_SOUND_VOLUME]} onClick={handleClick} />
                        </View>
                        <View style={styles.videoMain}>
                            <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} source={CAMERA_IMAGE}></ImageBackground>
                        </View>
                        <View style={styles.videoBottom}>
                            <ActionButton name={ACTION_CATEGORIES_BUTTON} style={styles[ACTION_CATEGORIES_BUTTON]} onClick={handleClick} />
                            <ActionButton name={ACTION_TALK_BUTTON} style={styles[ACTION_TALK_BUTTON]} onClick={handleClick} />
                            <ActionButton name={ACTION_LOGOUT_BUTTON} style={styles[ACTION_LOGOUT_BUTTON]} onClick={handleClick} />    
                        </View>
                        <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>02:06:09 pm {"\n"} Today</Text>
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

export default VideophoneScreen;