import React, {useState} from 'react';
import { View, Image, ImageBackground, Pressable, StyleSheet, Text} from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import Icon from "react-native-vector-icons/FontAwesome";
import { CAMERA_RED, CAMERA_GREEN, CAMERA_IMAGE, TALK_LABEL } from '../../Constant';

const VideoPhone = ({ caption, status }) => {

    const orientation = useOrientation();
    const [soundFlag, setSoundFlag] = useState();
    const [categoryFlag, setCategoryFlag] = useState();
    const [talkFlag, setTalkFlag] = useState();
    const [logOutFlag, setLogoOutFlag] = useState();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;
    
    const statusImg = status === true?CAMERA_GREEN:CAMERA_RED;

    return (
        <View style={orientationStyle.screenContainer}>
            <View style={portrait.videoTop}>
                <View style={portrait.videoTitle}>
                    <Image source={statusImg}></Image>
                    <Text style={portrait.videoName}>{caption}</Text>
                </View>
                <Pressable onPressIn={() => setSoundFlag(true)} onPressOut={() => setSoundFlag(false)} onPress={() => { }} style={portrait.soundContainer}>
                    <View style={soundFlag ? { ...portrait.sound, backgroundColor: '#4CD964'} : { ...portrait.sound, backgroundColor: '#2F2F31'}}>
                        <Icon name="volume-down" size={20} color='#ffffff' />
                    </View>
                </Pressable>
            </View>
            <View style={orientationStyle.videoMain}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} source={CAMERA_IMAGE}></ImageBackground>
            </View>
            <View style={orientationStyle.videoBottom}>
                <Pressable onPress={() => {setCategoryFlag(!categoryFlag)}} style={portrait.soundContainer}>
                    <View style={categoryFlag ? { ...portrait.sound, backgroundColor: '#4CD964' } : { ...portrait.sound, backgroundColor: '#2F2F31'}}>
                        <Icon name="th-large" size={20} color={categoryFlag ? '#ffffff' : '#6A6A6B'} />
                    </View>
                </Pressable>
                <View style={portrait.talkContainer}>
                    <Pressable onPress={() => { setTalkFlag(!talkFlag) }}>
                        <View style={talkFlag ? {...portrait.talkBackground, backgroundColor: '#4CD964'} : {...portrait.talkBackground, backgroundColor: '#F1580C'}}>
                            <Icon name="microphone" size={15} color={talkFlag ? "#ffffff" : "#000000"} />
                            <Text style={talkFlag ? { ...portrait.talkText, color: '#ffffff' } : { ...portrait.talkText, color: '#000000'}}>{TALK_LABEL}</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={portrait.soundContainer}>
                    <Pressable onPressIn={() => setLogoOutFlag(true)} onPressOut={() => setLogoOutFlag(false)} onPress={() => {}}>
                        <View style={logOutFlag ? {...portrait.sound, backgroundColor: '#4CD964'} : {...portrait.sound, backgroundColor: '#2F2F31'}}>
                            <Icon name="sign-out" size={20} color={logOutFlag ? '#ffffff' : '#6A6A6B'} />
                        </View>
                    </Pressable>
                </View> 
            </View>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>02:06:09 pm {"\n"} Today</Text>
        </View>
    )
};

const portrait = StyleSheet.create({
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
        justifyContent: 'space-between',
    },
    soundContainer: {
        width: 43, 
        height: 43, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    sound: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20, 
        width: 43, 
        height: 43
    },
    talkContainer: {
        width: 73, 
        height: 38, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    talkBackground: {
        flexDirection: 'row', 
        paddingVertical: 9, 
        paddingHorizontal: 12,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 7
    },
    talkText: {
        fontSize: 15, 
        fontWeight: '600',
        lineHeight: 20, 
        marginLeft: 7
    }
});

const landscape = StyleSheet.create({
    screenContainer: {
        width: '48%'
    },
    videoBottom: {
        marginTop: 22,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    videoMain: {
        marginTop: 15,
        width: '100%',
        height: 375
    },
});

export default VideoPhone;