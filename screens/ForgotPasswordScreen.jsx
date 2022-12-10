import React from "react";
import Layout from "../components/Layout/Layout";
import { Text, ScrollView, SafeAreaView, View, StyleSheet, TextInput, Pressable } from "react-native";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import { PLACEHOLDER_USERNAME, USER_LABEL, LOGIN, FORGOT_PASSWORD_LABEL, FORGOT_PASSWORD_DESCRIPTION, SEND_EMAIL, EMAIL, PLACEFOLDER_USEREMAIL } from "../Constant";

export default function ForgotPasswordScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.containerScroll}>
            <ScrollView style={styles.scrollView}>
                <Layout>
                    <View style={styles.container}>
                        <Logo />
                        <Text style={styles.forgotPasswordLabel}>{FORGOT_PASSWORD_LABEL}</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.forgotPasswordDescription}>{FORGOT_PASSWORD_DESCRIPTION}</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{USER_LABEL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEHOLDER_USERNAME} placeholderTextColor={styles.input.placeholderTextColor} onChangeText={value => setUserName(value)} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.inputLabelStyle}>{EMAIL}</Text>
                                <TextInput style={styles.input} placeholder={PLACEFOLDER_USEREMAIL} placeholderTextColor={styles.input.placeholderTextColor} onChangeText={value => setUserPwd(value)} />
                            </View>
                        </View>
                        <Pressable style={styles.loginButton} onPress={() => {}}>
                            <Text style={styles.buttonText}>{SEND_EMAIL}</Text>
                        </Pressable>
                    </View>
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        paddingVertical: 10,
        height: '100%',
        backgroundColor: '#000000'
    },
    scrollView: {
        backgroundColor: '#000000'
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    forgotPasswordLabel: {
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 41,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 100
    },
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        marginTop: 16    
    },
    forgotPasswordDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 8,
        paddingHorizontal: 40,
        paddingBottom: 38,
        color: '#ffffff'
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