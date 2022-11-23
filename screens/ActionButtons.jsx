import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Layout from "../components/Layout/Layout";
import ActionButton from "../components/Common/ActionButton";
import {
    ACTION_TURN_ON,
    ACTION_TURN_OFF,
    ACTION_ARROW_DOWN,
    ACTION_ARROW_UP,
    ACTION_MINUS,
    ACTION_PLUS,
    ACTION_ARROW_LEFT,
    ACTION_HEART,
    ACTION_CLOCK,
    ACTION_MENU_LIST,
    ACTION_MORE_DETAIL,
    ACTION_EDIT_BUTTON,
    ACTION_CIRECLE_PLUS,
    ACTION_SOUND_VOLUME,
    ACTION_PAUSE_BUTTON,
    ACTION_LOGOUT_BUTTON,
    ACTION_TALK_BUTTON,
    ACTION_OPTION_BUTTON,
    ACTION_REC_SWITCH_BUTTON,
    ACTION_CIR_SWITCH_BUTTON
} from "../Constant";

export default function ActionButtons({ navigation }) {
    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Layout>
                    <ActionButton name={ACTION_TURN_ON} style={styles[ACTION_TURN_ON]} onClick={handleClick} />
                    <ActionButton name={ACTION_TURN_OFF} style={styles[ACTION_TURN_OFF]} onClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} onClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} onClick={handleClick} />
                    <ActionButton name={ACTION_MINUS} style={styles[ACTION_MINUS]} onClick={handleClick} />
                    <ActionButton name={ACTION_PLUS} style={styles[ACTION_PLUS]} onClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_LEFT} style={styles[ACTION_ARROW_LEFT]} onClick={handleClick} />
                    <ActionButton name={ACTION_HEART} style={styles[ACTION_HEART]} onClick={handleClick} />
                    <ActionButton name={ACTION_CLOCK} style={styles[ACTION_CLOCK]} onClick={handleClick} />
                    <ActionButton name={ACTION_MENU_LIST} style={styles[ACTION_MENU_LIST]} onClick={handleClick} />
                    <ActionButton name={ACTION_MORE_DETAIL} style={styles[ACTION_MORE_DETAIL]} onClick={handleClick} />
                    <ActionButton name={ACTION_EDIT_BUTTON} style={styles[ACTION_EDIT_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_CIRECLE_PLUS} style={styles[ACTION_CIRECLE_PLUS]} onClick={handleClick} />
                    <ActionButton name={ACTION_SOUND_VOLUME} style={styles[ACTION_SOUND_VOLUME]} onClick={handleClick} />
                    <ActionButton name={ACTION_PAUSE_BUTTON} style={styles[ACTION_PAUSE_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_LOGOUT_BUTTON} style={styles[ACTION_LOGOUT_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_TALK_BUTTON} style={styles[ACTION_TALK_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_OPTION_BUTTON} style={styles[ACTION_OPTION_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_REC_SWITCH_BUTTON} style={styles[ACTION_REC_SWITCH_BUTTON]} onClick={handleClick} />
                    <ActionButton name={ACTION_CIR_SWITCH_BUTTON} style={styles[ACTION_CIR_SWITCH_BUTTON]} onClick={handleClick} />
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        backgroundColor: 'black',
        textAlign: 'center',
        width: '100%'
    },
    [ACTION_TURN_OFF]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_ARROW_DOWN]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_ARROW_UP]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_MINUS]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_PLUS]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_ARROW_LEFT]: {
        marginTop: 10,
        width: 38,
        height: 38
    },
    [ACTION_HEART]: {
        marginTop: 10,
        width: 22,
        height: 22
    },
    [ACTION_CLOCK]: {
        marginTop: 10,
        width: 18,
        height: 20
    },
    [ACTION_MENU_LIST]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_MORE_DETAIL]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_EDIT_BUTTON]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_CIRECLE_PLUS]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_SOUND_VOLUME]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_PAUSE_BUTTON]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_LOGOUT_BUTTON]: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    [ACTION_TALK_BUTTON]: {
        marginTop: 10,
        width: 74,
        height: 38
    },
    [ACTION_OPTION_BUTTON]: {
        marginTop: 10,
        width: 59,
        height: 59
    },
    [ACTION_REC_SWITCH_BUTTON]: {
        marginTop: 10,
        width: 42,
        height: 36,
    },
    [ACTION_CIR_SWITCH_BUTTON]: {
        marginTop: 10,
        width: 52,
        height: 32,
    },
});