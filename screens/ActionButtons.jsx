import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Layout from "../components/Layout/Layout";
import ActionButton from "../components/Common/ActionButton";
import {
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
                    <ActionButton name={ACTION_TURN_OFF} style={styles[ACTION_TURN_OFF]} handleClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} handleClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} handleClick={handleClick} />
                    <ActionButton name={ACTION_MINUS} style={styles[ACTION_MINUS]} handleClick={handleClick} />
                    <ActionButton name={ACTION_PLUS} style={styles[ACTION_PLUS]} handleClick={handleClick} />
                    <ActionButton name={ACTION_ARROW_LEFT} style={styles[ACTION_ARROW_LEFT]} handleClick={handleClick} />
                    <ActionButton name={ACTION_HEART} style={styles[ACTION_HEART]} handleClick={handleClick} />
                    <ActionButton name={ACTION_CLOCK} style={styles[ACTION_CLOCK]} handleClick={handleClick} />
                    <ActionButton name={ACTION_MENU_LIST} style={styles[ACTION_MENU_LIST]} handleClick={handleClick} />
                    <ActionButton name={ACTION_MORE_DETAIL} style={styles[ACTION_MORE_DETAIL]} handleClick={handleClick} />
                    <ActionButton name={ACTION_EDIT_BUTTON} style={styles[ACTION_EDIT_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_CIRECLE_PLUS} style={styles[ACTION_CIRECLE_PLUS]} handleClick={handleClick} />
                    <ActionButton name={ACTION_SOUND_VOLUME} style={styles[ACTION_SOUND_VOLUME]} handleClick={handleClick} />
                    <ActionButton name={ACTION_PAUSE_BUTTON} style={styles[ACTION_PAUSE_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_LOGOUT_BUTTON} style={styles[ACTION_LOGOUT_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_TALK_BUTTON} style={styles[ACTION_TALK_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_OPTION_BUTTON} style={styles[ACTION_OPTION_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_REC_SWITCH_BUTTON} style={styles[ACTION_REC_SWITCH_BUTTON]} handleClick={handleClick} />
                    <ActionButton name={ACTION_CIR_SWITCH_BUTTON} style={styles[ACTION_CIR_SWITCH_BUTTON]} handleClick={handleClick} />
                </Layout>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    scrollView: {
        backgroundColor: 'black',
        textAlign: 'center',
        width: '100%'
    },
    [ACTION_TURN_OFF]: {
        width: 30,
        height: 30
    },
    [ACTION_ARROW_DOWN]: {
        width: 30,
        height: 30
    },
    [ACTION_ARROW_UP]: {
        width: 30,
        height: 30
    },
    [ACTION_MINUS]: {
        width: 50,
        height: 50
    },
    [ACTION_PLUS]: {
        width: 30,
        height: 30
    },
    [ACTION_ARROW_LEFT]: {
        width: 38,
        height: 38,
        fontWeight: 'thin'
    },
    [ACTION_HEART]: {
        width: 22,
        height: 22
    },
    [ACTION_CLOCK]: {
        width: 18,
        height: 20
    },
    [ACTION_MENU_LIST]: {
        width: 30,
        height: 30
    },
    [ACTION_MORE_DETAIL]: {
        width: 30,
        height: 30
    },
    [ACTION_EDIT_BUTTON]: {
        width: 30,
        height: 30
    },
    [ACTION_CIRECLE_PLUS]: {
        width: 30,
        height: 30
    },
    [ACTION_SOUND_VOLUME]: {
        width: 30,
        height: 30
    },
    [ACTION_PAUSE_BUTTON]: {
        width: 30,
        height: 30
    },
    [ACTION_LOGOUT_BUTTON]: {
        width: 30,
        height: 30
    },
    [ACTION_TALK_BUTTON]: {
        width: 74,
        height: 38
    },
    [ACTION_OPTION_BUTTON]: {
        width: 30,
        height: 30
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
    }
});