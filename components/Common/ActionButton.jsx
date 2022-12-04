import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
    ACTION_OPTION_BUTTON,
    ACTION_LAMP_STATUS,
    ACTION_SHUTTER_STATUS,
    ACTION_LIGHT_STATUS,
    ACTION_CLOSE_BUTTON
} from "../../Constant";

import ImgClock from "../../assets/action_buttons/clock.png";
import ImgClockActive from "../../assets/action_buttons/clock_active.png";
import ImgLampDisabled from "../../assets/action_buttons/lamp_disable.png";
import ImgLamp from "../../assets/action_buttons/lamp_normal.png";
import ImgLampActive from "../../assets/action_buttons/lamp_active.png";
import ImgShutterDisabled from "../../assets/action_buttons/shutter_disable.png";
import ImgShutter from "../../assets/action_buttons/shutter.png";
import ImgLightDisable from "../../assets/action_buttons/light_disable.png";
import ImgLight from "../../assets/action_buttons/light.png";
import ImgClose from "../../assets/action_buttons/close.png";
import ImgCloseActive from "../../assets/action_buttons/close_active.png";

export default function ActionButton({ name, style, active, onClick, disabled }) {

    const [clickFlag, setClickFlag] = useState((active));
    
    let width, height, innerWidth, innerHeight, borderWidth, borderRadius, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize, lineHeight, stock;
    switch (name) {
        case ACTION_TURN_ON:
            height = style ? style.height ? style.height : 30 : 30;
            width = style ? style.width ? style.height * 0.18 : 5.24 : 5.24;
            return (
                <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} >
                    <View style={{ ...{ width: height, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: width / 2, width: width, height: height } : { backgroundColor: '#ffffff', borderRadius: width / 2, width: width, height: height }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_TURN_OFF:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            borderWidth = width / 8;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable style={clickFlag ? { borderWidth: borderWidth, borderColor: '#4CD964', borderRadius: width / 2, width: width, height: height } : { borderWidth: borderWidth, borderColor: '#ffffff', borderRadius: width / 2, width: width, height: height }} onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} />
                </View>
            );
            break;
        case ACTION_ARROW_DOWN:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            fontSize = style ? style.fontSize ? style.fontSize : width : width;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <Icon name="angle-down" size={fontSize} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_ARROW_UP:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            fontSize = style ? style.fontSize ? style.fontSize : width : width;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <Icon name="angle-up" size={fontSize} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_PLUS:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            stock = width * 0.18;
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => {  }} >
                    <View style={{ ...{ width: height, height: height, position: 'relative' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 }} />
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: stock, height: height, position: 'absolute', left: (height - stock) / 2 } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: stock, height: height, position: 'absolute', left: (height - stock) / 2 }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_MINUS:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.width * 0.18 : 5.24 : 5.24;
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { }} >
                    <View style={{ ...{ width: height, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: height / 2, width: width, height: height } : { backgroundColor: '#ffffff', borderRadius: height / 2, width: width, height: height }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_ARROW_LEFT:
            width = style ? style.width ? style.width : 38 : 38;
            height = style ? style.height ? style.height : 38 : 38;
            stock = width * 0.1;
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }} >
                    <View style={{ ...{ width: height, height: height, position: 'relative' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 }} />
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: width / 2, height: stock, position: 'absolute', left: -height * 0.1, top: height * 0.8 / 2 - stock, transform: [{ rotate: '-45deg' }] } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: width / 2, height: stock, position: 'absolute', left: -height * 0.1, top: height * 0.8 / 2 - stock, transform: [{ rotate: '-45deg' }] }} />
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: width / 2, height: stock, position: 'absolute', left: -height * 0.1, top: height / 2 + stock, transform: [{ rotate: '45deg' }] } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: width / 2, height: stock, position: 'absolute', left: -height * 0.1, top: height / 2 + stock, transform: [{ rotate: '45deg' }] }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_HEART:
            width = style ? style.width ? style.width : 22 : 22;
            height = style ? style.height ? style.height : 22 : 22;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Icon name="heart" size={width} color={clickFlag ? '#4CD964' : '#6A6A6B'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_CLOCK:
            width = style ? style.width ? style.width : 20 : 20;
            height = style ? style.height ? style.height : 20 : 20;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Image source={clickFlag ? ImgClockActive : ImgClock} width={width} height={height} style={{ flex: 1, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_MENU_LIST:
            width = style ? style.width ? style.width : 39 : 39;
            height = style ? style.height ? style.height : 39 : 39;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Icon name="bars" size={width} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_MORE_DETAIL:
            width = style ? style.width ? style.width : 33 : 33;
            height = style ? style.height ? style.height : 33 : 33;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Icon name="ellipsis-h" size={width} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_OPTION_BUTTON:
            width = style ? style.width ? style.width : 59 : 59;
            height = style ? style.height ? style.height : 59 : 59;
            innerWidth = width / 2;
            innerHeight = width / 2;
            borderWidth = width / 8;
            padding = width * 0.375;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center', borderRadius: width / 2 }, ...style }}>
                    <Pressable onPressIn={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} onPressOut={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#F1580C', borderWidth: borderWidth, borderRadius: width / 2, padding: padding, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#6A6A6B', borderWidth: borderWidth * 0.7, borderRadius: (height * 0.7) / 2, padding: padding * 0.7, width: width * 0.7, height: height * 0.7 }} >
                            <View style={clickFlag ? { backgroundColor: '#F1580C', borderRadius: innerWidth / 2, width: innerWidth, height: innerHeight } : { backgroundColor: '#6A6A6B', borderRadius: innerWidth * 0.7 / 2, width: innerWidth * 0.7, height: innerHeight * 0.7 }} />
                        </View>
                    </Pressable >
                </View>
            );
            break;
        case ACTION_LAMP_STATUS:
            width = style ? style.width ? style.width : 32 : 32;
            height = style ? style.height ? style.height : 32 : 32;
            if (disabled) {
                return (
                    <View style={{ ...style, ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' } }}>
                        <Pressable onPress={() => { (onClick) && onClick() }}>
                            <Image source={ImgLampDisabled} style={{ flex: 1, resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                );
            } else {
                if (active) {
                    return (
                        <View style={{ ...style, ...{ width: width + 6, height: height + 6, alignItems: 'center', justifyContent: 'center' } }}>
                            <Pressable onPress={() => { (onClick) && onClick() }}>
                                <Image source={ImgLampActive} width={width + 6} height={height + 6} style={{ flex: 1, resizeMode: 'contain' }} />
                            </Pressable>
                        </View>
                    )
                } else {
                    return (
                        <View style={{ ...style, ...{ width: width + 2, height: height + 2, alignItems: 'center', justifyContent: 'center' } }}>
                            <Pressable onPress={() => { (onClick) && onClick() }}>
                                <Image source={ImgLamp} width={width + 2} height={height + 2} style={{ flex: 1, resizeMode: 'contain' }} />
                            </Pressable>
                        </View>
                    );
                }
            }
            break;
        case ACTION_SHUTTER_STATUS:
            width = style ? style.width ? style.width : 34 : 48;
            height = style ? style.height ? style.height : 34 : 48;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { (onClick) && onClick() }}>
                        <Image source={disabled ? ImgShutterDisabled : ImgShutter} width={width} height={height} style={{ resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_LIGHT_STATUS:
            width = style ? style.width ? style.width : 36 : 36;
            height = style ? style.height ? style.height : 36 : 36;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { (onClick) && onClick() }}>
                        <Image source={disabled ? ImgLightDisable : ImgLight} width={width} height={height} style={{ flex: 1, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_CLOSE_BUTTON:
            width = style ? style.width ? style.width : 20 : 20;
            height = style ? style.height ? style.height : 20 : 20;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <Image source={clickFlag ? ImgCloseActive : ImgClose} width={width} height={height} style={{ flex: 1, resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            );
            break;
        default:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            borderWidth = width / 8;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', justifyContent: 'center', borderRadius: width / 2 }, ...style }}>
                    <Pressable style={clickFlag ? { borderWidth: borderWidth, borderColor: '#4CD964', borderRadius: width / 2, width: width, height: height } : { borderWidth: borderWidth, borderColor: '#ffffff', borderRadius: width / 2, width: width, height: height }} onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} />
                </View>
            );
            break;
    }
}