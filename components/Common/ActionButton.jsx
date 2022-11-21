import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
    ACTION_TURN_OFF,
    ACTION_ARROW_DOWN,
    ACTION_ARROW_UP,
    ACTION_MINUS,
    ACTION_PLUS,
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
} from "../../Constant";

export default function ActionButton({ name, style, active }) {
    switch (name) {
        case ACTION_TURN_OFF:
            return (
                <View style={active ? { ...style, ...{ borderWidth: 2, borderColor: '#F1580C', borderRadius: style.width / 2 } } : { ...style, ...{ borderWidth: 2, borderColor: '#ffffff', borderRadius: style.width / 2 } }} />
            );
            break;
        case ACTION_ARROW_DOWN:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_ARROW_UP:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_MINUS:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_PLUS:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_HEART:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_CLOCK:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_MENU_LIST:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_MORE_DETAIL:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_EDIT_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_CIRECLE_PLUS:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_SOUND_VOLUME:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_PAUSE_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_LOGOUT_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_TALK_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_OPTION_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_REC_SWITCH_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        case ACTION_CIR_SWITCH_BUTTON:
            return (
                <View {...{ style }} />
            );
            break;
        default:
            return (
                <View />
            );
            break;
    }
}