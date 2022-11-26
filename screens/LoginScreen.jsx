import React from "react";
import Layout from "../components/Layout/Layout";
import { Text, View, StyleSheet, Pressable, ScrollView, SafeAreaView } from "react-native";
import Logo from "../components/Common/Logo";
import MainButton from "../components/Common/MainButton";
import MainInput from "../components/Common/MainInput";
import { CONNECT, HOME, PLACEHOLDER_USERNAME, PLACEFOLDER_PASSWORD, USER_LABEL, PASSWORD_LABEL, SINGIN_DESCIPTION, SINGIN_LABEL, PASSWORD_FORGOTTEN, LOGIN, FORGOT_PASSWORD } from "../Constant";

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.containerScroll}>
            <ScrollView style={styles.scrollView}>
                <Layout>
                    <View style={styles.container}>
                        <Logo />
                        <Text style={styles.signinLabel}>{SINGIN_LABEL}</Text>
                        <View style={styles.bodyContainer}>
                            <Text style={styles.signinDescription}>{SINGIN_DESCIPTION}</Text>
                            <MainInput style={styles.input} placeholder={PLACEHOLDER_USERNAME} label={USER_LABEL} />
                            <MainInput style={styles.input} secureTextEntry={true} placeholder={PLACEFOLDER_PASSWORD} label={PASSWORD_LABEL} />
                        </View>
                        <Pressable onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
                            <Text style={styles.passwordForgotten}>{PASSWORD_FORGOTTEN}</Text>
                        </Pressable>
                        <MainButton {...{ style: styles.mainButton, title: LOGIN, path: HOME, navigation }} />
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
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    mainButton: {
        width: '100%',
        marginTop: 50,
        width: 375
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1E',
        marginTop: 16,
        marginLeft: 8,
        marginRight: 8
    },
    signinDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 8,
        paddingLeft: 75,
        paddingRight: 75,
        paddingBottom: 38,
        color: '#ffffff'
    },
    passwordForgotten: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 30
    }
});