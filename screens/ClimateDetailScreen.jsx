import React, {useState, useEffect} from 'react';
import * as Progress from 'react-native-progress';
import { MultiArcCircle } from 'react-native-circles';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import Temperature from '../components/Widgets/Temperature';
import { CLIMATE, ELLIPSE_BLACK, SNOW } from '../Constant';
import { useOrientation } from '../hooks/useOrientation';

const ClimateDetailScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const [clickButton, setClickButton] = useState("Comfort");
    const [roomName, setRoomName] = useState();
    const [temperature, setTemperature] = useState();
    const roomNameLoad = async () => {
        try {
            const savedRoomName = await AsyncStorage.getItem("room_name");
            setRoomName(savedRoomName);
        } catch (err) {
            console.log(err);
        }
    };
    const temperatureLoad = async () => {
        try {
            const savedTemperature = await AsyncStorage.getItem("temperature");
            setTemperature(Number(savedTemperature));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            roomNameLoad();
            temperatureLoad();
        });

        return unsubscribe;
    }, [navigation, temperature, clickButton]);

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={portrait.mainTitle}>{roomName}</Text>
                        <Text style={portrait.subTitle}>{CLIMATE}</Text>
                    </View>  
                    <View style={ orientation === 'PORTRAIT' ? portrait.progressConatiner : landscape.progressConatiner}>
                        <View style={orientation === 'LANDSCAPE' && { flex: 6, position: 'relative' }}>
                            <View style={orientation === 'PORTRAIT' ? portrait.startCircle : landscape.startCircle}>
                                <Image source={ELLIPSE_BLACK} style={{ width: 20, height: 20 }}></Image>
                                <Image source={SNOW} style={{ position: 'absolute' }}></Image>     
                            </View>
                            <View style={portrait.progressCircle}>
                                <View style={portrait.tempText}>
                                    <Text style={portrait.tempC}>C</Text>
                                    <Text style={portrait.tempNum}>{temperature}</Text>
                                    <Text style={portrait.tempStatus}>Cooling</Text>
                                </View>                       
                                <MultiArcCircle radius={125} intervals={[ { start: 0, end: 360 } ]} color='#2F2F31' width={25} style={portrait.topCircle} />
                                <Progress.Circle size={270} radius={30} strokeCap='round' progress={0.3} borderColor="#000000" color="#F1580C" thickness={24} />
                            </View>
                            <View style={{ padding: 15, alignSelf: 'center' }}>
                                <Text style={portrait.statusText}>{clickButton}</Text>
                            </View>
                            <View style={portrait.buttonGroup}>
                                <Pressable style={clickButton === "Comfort"?{...portrait.button, backgroundColor: '#F1580C'}:{...portrait.button, backgroundColor: '#979797'}} onPress={() => setClickButton("Comfort")}>
                                    <Text style={portrait.buttonCaption}>Comfort</Text>
                                </Pressable>
                                <Pressable style={clickButton === "Stand By"?{...portrait.button, backgroundColor: '#F1580C'}:{...portrait.button, backgroundColor: '#979797'}} onPress={() => setClickButton("Stand By")}>
                                    <Text style={portrait.buttonCaption}>Stand By</Text>
                                </Pressable>
                                <Pressable style={clickButton === "Night"?{...portrait.button, backgroundColor: '#F1580C'}:{...portrait.button, backgroundColor: '#979797'}} onPress={() => setClickButton("Night")}>
                                    <Text style={portrait.buttonCaption}>Night</Text>
                                </Pressable>
                            </View>
                        </View>
                        
                        <View style={orientation === 'PORTRAIT' ? portrait.temper : landscape.temper}>
                            <Text style={{ color: '#FFFFFF' }}>Temperature</Text>
                            <Temperature caption="Air Condition 01"></Temperature> 
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
        width: '100%',
    },
    categoryTitle: {
        padding: 20,
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
    progressConatiner: {
        position: 'relative',
    },
    progressCircle: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    startCircle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        left: 189,
        top: 4
    },
    tempText: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tempC: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    tempNum: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 40,
        lineHeight: 47,
    },
    tempStatus: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.7,
    },
    statusText: {
        color: '#FFFFFF',
        opacity: 0.7,
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 28.6
    },
    buttonGroup: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temper: {
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingBottom: 5
    },
    button: {
        width: '32%',
        borderRadius: 12
    },
    buttonCaption: {
        color: 'white',
        paddingTop: 13,
        paddingBottom: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF'
    },
});

const landscape = StyleSheet.create({
    progressConatiner: {
        flexDirection: 'row',
    },
    startCircle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        left: '49%',
        top: 4
    },
    temper: {
        flex: 6,
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingBottom: 5
    }
});

export default ClimateDetailScreen;