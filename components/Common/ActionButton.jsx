import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
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
} from "../../Constant";

import ImgClock from "../../assets/action_buttons/clock.png";
import ImgClockActive from "../../assets/action_buttons/clock_active.png";

export default function ActionButton({ name, style, active, handleClick }) {
    const [clickFlag, setClickFlag] = React.useState((active));
    switch (name) {
        case ACTION_TURN_OFF:
            return (
                <Pressable style={clickFlag ? { ...{ borderWidth: 2, borderColor: '#4CD964', borderRadius: style.width / 2 }, ...style } : { ...{ borderWidth: 2, borderColor: '#ffffff', borderRadius: style.width / 2 }, ...style }} onPress={() => { setClickFlag(!clickFlag); handleClick() }} />
            );
            break;
        case ACTION_ARROW_DOWN:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_ARROW_UP:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-up" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_MINUS:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Text style={{ ...clickFlag ? { color: '#4CD964', fontSize: style.width } : { color: '#ffffff', fontSize: style.width }, ...style }}>-</Text>
                </Pressable>
            );
            break;
        case ACTION_PLUS:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Text style={{ ...clickFlag ? { color: '#4CD964', fontSize: style.width } : { color: '#ffffff', fontSize: style.width }, ...style }}>+</Text>
                </Pressable>
            );
            break;
        case ACTION_ARROW_LEFT:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="arrow-left" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_HEART:
            return (
                <Pressable onPress={() => { setClickFlag(!clickFlag); handleClick() }}>
                    <Icon name="heart" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_CLOCK:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Image source={clickFlag ? ImgClockActive : ImgClock} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_MENU_LIST:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_MORE_DETAIL:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_EDIT_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_CIRECLE_PLUS:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_SOUND_VOLUME:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_PAUSE_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_LOGOUT_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_TALK_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_OPTION_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <Icon name="angle-down" size={style.width ? style.width : 30} color={clickFlag ? '#4CD964' : '#ffffff'} {...{ style }} />
                </Pressable>
            );
            break;
        case ACTION_REC_SWITCH_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <View style={clickFlag ? { ...{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#F1580C', borderRadius: 7, padding: 5 }, ...style } : { ...{ display: 'flex', flexDirection: 'row', backgroundColor: '#6A6A6B', borderRadius: 7, padding: 5 }, ...style }}>
                        <View style={clickFlag ? { flex: 0.5, backgroundColor: '#ffffff', borderRadius: 3 } : { flex: 0.5, backgroundColor: '#ffffff', borderRadius: 3 }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_CIR_SWITCH_BUTTON:
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => handleClick()}>
                    <View style={clickFlag ? { ...{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#4CD964', borderRadius: style.height / 2, padding: 3 }, ...style } : { ...{ display: 'flex', flexDirection: 'row', backgroundColor: '#6A6A6B', borderRadius: style.height / 2, padding: 3 }, ...style }}>
                        <View style={clickFlag ? { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (style.height - 6) / 2 } : { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (style.height - 6) / 2 }} />
                    </View>
                </Pressable>
            );
            break;
        default:
            return (
                <Pressable style={clickFlag ? { ...{ borderWidth: 2, borderColor: '#4CD964', borderRadius: style.width / 2 }, ...style } : { ...{ borderWidth: 2, borderColor: '#ffffff', borderRadius: style.width / 2 }, ...style }} onPress={() => { setClickFlag(!clickFlag); handleClick() }} />
            )
            break;
    }
}