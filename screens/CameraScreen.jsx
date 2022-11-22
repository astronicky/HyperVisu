import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import { CAMERA_IMAGE, CAMERA_RED, CAMERA_GREEN } from '../Constant';

const CameraScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.categoryTitle}>
                <View style={styles.topTitle}>
                <Text style={styles.dateTitle}>Tues, 27 Sept 2022 | 10:59 Pm</Text>
                {/* <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/images/plusbackground.png')} style={{ width: 30, height: 30 }}></Image>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', position: 'absolute' }}>+</Text>
                </View>   */}
                </View>
                <Text style={styles.mainTitle}>Camera</Text>
                <Text style={styles.subTitle}>Control your house</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.cameraItem}>
                <View style={styles.cameraTitle}>
                    <Text style={styles.cameraText}>Dinning Room</Text>
                    <Image source={CAMERA_GREEN}></Image>
                </View>          
                <ImageBackground style={styles.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.cameraItem}>
                <View style={styles.cameraTitle}>
                    <Text style={styles.cameraText}>Kitchen</Text>
                    <Image source={CAMERA_RED}></Image>
                </View>          
                <ImageBackground style={styles.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
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
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    categoryTitle: {
        padding: 27,
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
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
    cameraItem: {
        borderRadius: 20,
        position: 'relative'
    },
    cameraTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 12,
        width: '100%', 
        backgroundColor: '#1C1C1E',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        zIndex: 1
    },
    cameraText: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    cameraBackground: {
        width: '100%',
        height: 261
    }
});

export default CameraScreen;