import React from 'react';
import { View, StyleSheet, ScrollView, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import Camera from '../components/Widgets/Camera';
import { useOrientation } from '../hooks/useOrientation';
import { CAMERA_IMAGE, CAMERA_RED, CAMERA_GREEN } from '../Constant';

const CameraScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={orientationStyle.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={portrait.mainTitle}>Camera</Text>
                        <Text style={portrait.subTitle}>Control your house</Text>
                    </View>
                    <View style={orientationStyle.cameraContainerLand}>
                        <Camera caption="Dinning Room" onFlag={true}></Camera>
                        <Camera caption="Kitchen" onFlag={false}></Camera>
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
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    categoryTitle: {
        padding: 20,
        paddingBottom: 0
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
    cameraContainer: {
        padding: 20,
    },
    cameraContainerLand: {
        
    },
    videoMain: {
        marginTop: 15,
        width: '100%',
        height: 274
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
    }
});

const landscape = StyleSheet.create({
    cameraContainerLand: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 27
    },
    categoryTitle: {
        padding: 27,
    },
    cameraContainer: {
        marginRight: 30,
        width: '48%'
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
        fontSize: 24,
        lineHeight: 29,
    },
    videoMain: {
        marginTop: 15,
        height: 350
    },
});

export default CameraScreen;