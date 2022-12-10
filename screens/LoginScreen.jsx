import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Text, View, StyleSheet, Pressable, ScrollView, SafeAreaView, TextInput, ToastAndroid } from "react-native";
import axios from 'axios';
import Logo from "../components/Common/Logo";
import { CONNECT, HOME, PLACEHOLDER_USERNAME, PLACEFOLDER_PASSWORD, USER_LABEL, PASSWORD_LABEL, SINGIN_DESCIPTION, SINGIN_LABEL, PASSWORD_FORGOTTEN, LOGIN, FORGOT_PASSWORD } from "../Constant";

export default function LoginScreen({ navigation }) {

    // const changeScreenOrientation = async () => {
    //     await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    // }; 

    // useEffect(() => {
        
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         changeScreenOrientation();
    //     });

    //     return unsubscribe;
    // }, [navigation]);
    const [userName, setUserName] = useState();
    const [userPwd, setUserPwd] = useState();

    const loginClick = async () => {
        console.log("login", userName, userPwd);
        const res = await axios.post('http://192.168.106.65:9000/api/mobile/login',
                        {
                            "userName": userName,
                            "userPwd": userPwd   
                        },
                        {
                            "headers": {
                                'accept': 'text/plain',
                                'Content-Type': 'application/json'
                            }
                        }).then((res) => {
                            const msg = "Login success";
                            ToastAndroid.show(msg, ToastAndroid.SHORT);
                            navigation.navigate(HOME);
                        }).catch((error) => {
                            const msg = "Network error";
                            ToastAndroid.show(msg, ToastAndroid.SHORT);
                        });
    }

    return (
        <SafeAreaView style={styles.containerScroll}>
            <ScrollView style={styles.scrollView}>
                <Layout>
                    <View style={styles.container}>
                        <Logo />
                        <Text style={styles.signinLabel}>{SINGIN_LABEL}</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.signinDescription}>{SINGIN_DESCIPTION}</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{USER_LABEL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEHOLDER_USERNAME} placeholderTextColor={styles.input.placeholderTextColor} onChangeText={value => setUserName(value)} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{PASSWORD_LABEL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEFOLDER_PASSWORD} placeholderTextColor={styles.input.placeholderTextColor} secureTextEntry={true} onChangeText={value => setUserPwd(value)} />
                            </View>
                        </View>
                        <Pressable onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
                            <Text style={styles.passwordForgotten}>{PASSWORD_FORGOTTEN}</Text>
                        </Pressable>
                        <Pressable style={styles.loginButton} onPress={() => {loginClick()}}>
                            <Text style={styles.buttonText}>{LOGIN}</Text>
                        </Pressable>
                    </View>
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        height: '100%',
        paddingVertical: 10,
        backgroundColor: 'black'
    },
    scrollView: {
        backgroundColor: 'black'
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    signinLabel: {
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 41,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        marginTop: 16
    },
    signinDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 8,
        paddingHorizontal: 75,
        paddingBottom: 38,
        color: '#ffffff'
    },
    passwordForgotten: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 30
    },
    inputContainer: {
        padding: 16,
        backgroundColor: '#2F2F31',
        placeholderTextColor: '#8E8E93',
        borderColor: '#8E8E93',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputLabelStyle: {
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        marginRight: 8,
        flex: 0.5
    },
    input: {
        backgroundColor: '#2F2F31',
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        placeholderTextColor: '#8E8E93',
        flex: 1
    },
    loginButton: {
        width: '100%',
        marginTop: 50,
        borderRadius: 12,
        backgroundColor: '#F1580C'
    },
    buttonText: {
        paddingVertical: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF'
    }
});