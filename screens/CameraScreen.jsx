import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import { CAMERA_IMAGE, CAMERA_RED, CAMERA_GREEN } from '../Constant';

const CameraScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.categoryTitle}>
                <DateBar flagButton={false}></DateBar>
                <Text style={styles.mainTitle}>Camera</Text>
                <Text style={styles.subTitle}>Control your house</Text>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.cameraItem}>
                <View style={styles.cameraTitle}>
                    <Text style={styles.cameraText}>Dinning Room</Text>
                    <Image source={CAMERA_GREEN}></Image>
                </View>          
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                <View style={styles.cameraItem}>
                    <View style={styles.cameraTitle}>
                        <Text style={styles.cameraText}>Kitchen</Text>
                        <Image source={CAMERA_RED}></Image>
                    </View>          
                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
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
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    categoryContainer: {
        padding: 27,
    },
    cameraItem: {
        borderRadius: 20,
        position: 'relative'
    },
    cameraTitle: {
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