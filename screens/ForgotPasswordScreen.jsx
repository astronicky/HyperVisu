import React from "react";
import Layout from "../components/Layout/Layout";
import { Text, ScrollView, SafeAreaView, View, StyleSheet, Pressable } from "react-native";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import MainInput from "../components/Common/MainInput";
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
                            <MainInput placeholder={PLACEHOLDER_USERNAME} label={USER_LABEL} />
                            <MainInput placeholder={PLACEFOLDER_USEREMAIL} label={EMAIL} />
                        </View>
                        <MainButton {...{ style: styles.mainButton, title: SEND_EMAIL, path: LOGIN, navigation }} />
                    </View>
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        paddingTop: 10,
        paddingBottom: 10,
        height: '100%',
        backgroundColor: 'black'
    },
    scrollView: {
        backgroundColor: 'black'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    mainButton: {
        width: '100%',
        marginTop: 58,
        width: 375
    },
    forgotPasswordLabel: {
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 41,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30,
        paddingLeft: 100,
        paddingRight: 100
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8
    },
    forgotPasswordDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 8,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 38,
        color: '#ffffff'
    }
});