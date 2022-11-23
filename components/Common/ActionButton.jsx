import React from "react";
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
    ACTION_EDIT_BUTTON,
    ACTION_CIRECLE_PLUS,
    ACTION_SOUND_VOLUME,
    ACTION_CATEGORIES_BUTTON,
    ACTION_LOGOUT_BUTTON,
    ACTION_TALK_BUTTON,
    ACTION_OPTION_BUTTON,
    ACTION_REC_SWITCH_BUTTON,
    ACTION_CIR_SWITCH_BUTTON,
    TALK_LABEL,
    EDIT_LABEL
} from "../../Constant";

import ImgClock from "../../assets/action_buttons/clock.png";
import ImgClockActive from "../../assets/action_buttons/clock_active.png";

export default function ActionButton({ name, style, active, onClick }) {
    const [clickFlag, setClickFlag] = React.useState((active));
    let width, height, innerWidth, innerHeight, borderWidth, borderRadius, padding, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize, lineHeight, stock;
    switch (name) {
        case ACTION_TURN_ON:
            height = style ? style.height ? style.height : 30 : 30;
            width = style ? style.width ? style.height * 0.18 : 5.24 : 5.24;
            return (
                <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} >
                    <View style={{ ...{ width: height, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable style={clickFlag ? { borderWidth: borderWidth, borderColor: '#4CD964', borderRadius: width / 2, width: width, height: height } : { borderWidth: borderWidth, borderColor: '#ffffff', borderRadius: width / 2, width: width, height: height }} onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} />
                </View>
            );
            break;
        case ACTION_ARROW_DOWN:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            fontSize = style ? style.fontSize ? style.fontSize : width : width;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <Icon name="angle-up" size={fontSize} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_MINUS:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.width * 0.18 : 5.24 : 5.24;
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }} >
                    <View style={{ ...{ width: height, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: height / 2, width: width, height: height } : { backgroundColor: '#ffffff', borderRadius: height / 2, width: width, height: height }} />
                    </View>
                </Pressable>
            );
            break;
        case ACTION_PLUS:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            stock = width * 0.18;
            return (
                <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }} >
                    <View style={{ ...{ width: height, height: height, display: 'flex', position: 'relative' }, ...style }}>
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: width, height: stock, position: 'absolute', top: (width - stock) / 2 }} />
                        <View style={clickFlag ? { backgroundColor: '#4CD964', borderRadius: stock / 2, width: stock, height: height, position: 'absolute', left: (height - stock) / 2 } : { backgroundColor: '#ffffff', borderRadius: stock / 2, width: stock, height: height, position: 'absolute', left: (height - stock) / 2 }} />
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
                    <View style={{ ...{ width: height, height: height, display: 'flex', position: 'relative' }, ...style }}>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Image source={clickFlag ? ImgClockActive : ImgClock} style={{ width: width, height: height }} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_MENU_LIST:
            width = style ? style.width ? style.width : 39 : 39;
            height = style ? style.height ? style.height : 39 : 39;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <Icon name="ellipsis-h" size={width} color={clickFlag ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            );
            break;
        case ACTION_EDIT_BUTTON:
            width = style ? style.width ? style.width : 62 : 62;
            height = style ? style.height ? style.height : 24 : 24;
            paddingTop = style ? style.paddingTop ? style.paddingTop : 2 : 2;
            paddingBottom = style ? style.paddingBottom ? style.paddingBottom : 2 : 2;
            paddingLeft = style ? style.paddingLeft ? style.paddingLeft : 15 : 15;
            paddingRight = style ? style.paddingRight ? style.paddingRight : 15 : 15;
            fontSize = style ? style.fontSize ? style.fontSize : 15 : 15;
            lineHeight = style ? style.lineHeight ? style.lineHeight : 20 : 20;
            return (
                <View style={{ ...{ alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height / 2 } : { display: 'flex', flexDirection: 'row', paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, justifyContent: 'center', backgroundColor: '#2F2F31', alignItems: 'center', borderRadius: height / 2 }}>
                            <Text style={{ color: '#ffffff', fontSize: fontSize, lineHeight: lineHeight }}>{EDIT_LABEL}</Text>
                        </View>
                    </Pressable>
                </View>
            );
            break;
        case ACTION_CIRECLE_PLUS:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            fontSize = style ? style.fontSize ? style.fontSize : width * 0.5 : width * 0.5;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height / 2, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2F2F31', alignItems: 'center', borderRadius: height / 2, width: width, height: height }}>
                            <Text style={{ color: '#ffffff', fontSize: fontSize }}>+</Text>
                        </View>
                    </Pressable>
                </View>
            );
            break;
        case ACTION_SOUND_VOLUME:
            width = style ? style.width ? style.width : 43 : 43;
            height = style ? style.height ? style.height : 43 : 43;
            fontSize = style ? style.fontSize ? style.fontSize : width * 0.5 : width * 0.5;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height / 2, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2F2F31', alignItems: 'center', borderRadius: height / 2, width: width, height: height }}>
                            <Icon name="volume-down" size={fontSize} color='#ffffff' />
                        </View>
                    </Pressable>
                </View>
            );
            break;
        case ACTION_CATEGORIES_BUTTON:
            width = style ? style.width ? style.width : 40 : 40;
            height = style ? style.height ? style.height : 40 : 40;
            fontSize = style ? style.fontSize ? style.fontSize : width * 0.5 : width * 0.5;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height / 2, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2F2F31', alignItems: 'center', borderRadius: height / 2, width: width, height: height }}>
                            <Icon name="th-large" size={fontSize} color={clickFlag ? '#ffffff' : '#6A6A6B'} />
                        </View>
                    </Pressable>
                </View>
            );
            break;
        case ACTION_LOGOUT_BUTTON:
            width = style ? style.width ? style.width : 40 : 40;
            height = style ? style.height ? style.height : 40 : 40;
            fontSize = style ? style.fontSize ? style.fontSize : width * 0.5 : width * 0.5;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPressIn={() => setClickFlag(true)} onPressOut={() => setClickFlag(false)} onPress={() => { (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height / 2, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2F2F31', alignItems: 'center', borderRadius: height / 2, width: width, height: height }}>
                            <Icon name="sign-out" size={fontSize} color={clickFlag ? '#ffffff' : '#6A6A6B'} />
                        </View>
                    </Pressable>
                </View>
            );
            break;
        case ACTION_TALK_BUTTON:
            width = style ? style.width ? style.width : 73 : 73;
            height = style ? style.height ? style.height : 38 : 38;
            paddingTop = style ? style.paddingTop ? style.paddingTop : 9 : 9;
            paddingBottom = style ? style.paddingBottom ? style.paddingBottom : 9 : 9;
            paddingLeft = style ? style.paddingLeft ? style.paddingLeft : 12 : 12;
            paddingRight = style ? style.paddingRight ? style.paddingRight : 12 : 12;
            fontSize = style ? style.fontSize ? style.fontSize : 15 : 15;
            lineHeight = style ? style.lineHeight ? style.lineHeight : 20 : 20;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, backgroundColor: '#4CD964', justifyContent: 'center', alignItems: 'center', borderRadius: height * 0.18 } : { display: 'flex', flexDirection: 'row', paddingTop: paddingTop, paddingBottom: paddingBottom, paddingLeft: paddingLeft, paddingRight: paddingRight, justifyContent: 'center', backgroundColor: '#F1580C', alignItems: 'center', borderRadius: height * 0.18 }}>
                            <Icon name="microphone" size={fontSize} color={clickFlag ? "#ffffff" : "#000000"} />
                            <Text style={clickFlag ? { color: '#ffffff', fontSize: fontSize, lineHeight: lineHeight, marginLeft: paddingLeft * 0.6 } : { color: '#000000', fontSize: fontSize, lineHeight: lineHeight, marginLeft: paddingLeft * 0.6 }}>{TALK_LABEL}</Text>
                        </View>
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
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center', borderRadius: width / 2 }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#F1580C', borderWidth: borderWidth, borderRadius: width / 2, padding: padding, width: width, height: height } : { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#6A6A6B', borderWidth: borderWidth * 0.7, borderRadius: (height * 0.7) / 2, padding: padding * 0.7, width: width * 0.7, height: height * 0.7 }} >
                            <View style={clickFlag ? { backgroundColor: '#F1580C', borderRadius: innerWidth / 2, width: innerWidth, height: innerHeight } : { backgroundColor: '#6A6A6B', borderRadius: innerWidth * 0.7 / 2, width: innerWidth * 0.7, height: innerHeight * 0.7 }} />
                        </View>
                    </Pressable >
                </View>
            );
            break;
        case ACTION_REC_SWITCH_BUTTON:
            width = style ? style.width ? style.width : 42 : 42;
            height = style ? style.height ? style.height : 36 : 36;
            padding = height / 10;
            borderRadius = height * 0.2;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#F1580C', borderRadius: borderRadius, padding: padding, width: width, height: height } : { display: 'flex', flexDirection: 'row', backgroundColor: '#6A6A6B', borderRadius: borderRadius, padding: padding, width: width, height: height }} >
                            <View style={clickFlag ? { flex: 0.5, backgroundColor: '#ffffff', borderRadius: height * 0.8 * 0.2 } : { flex: 0.5, backgroundColor: '#ffffff', borderRadius: height * 0.8 * 0.2 }} />
                        </View>
                    </Pressable >
                </View >
            );
            break;
        case ACTION_CIR_SWITCH_BUTTON:
            width = style ? style.width ? style.width : 52 : 52;
            height = style ? style.height ? style.height : 32 : 32;
            padding = height / 10;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center' }, ...style }}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }}>
                        <View style={clickFlag ? { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#4CD964', borderRadius: height / 2, padding: padding, width: width, height: height } : { display: 'flex', flexDirection: 'row', backgroundColor: '#6A6A6B', borderRadius: height / 2, padding: padding, width: width, height: height }}>
                            <View style={clickFlag ? { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (height * 0.8) / 2 } : { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (height * 0.8) / 2 }} />
                        </View>
                    </Pressable>
                </View>
            );
            break;
        default:
            width = style ? style.width ? style.width : 30 : 30;
            height = style ? style.height ? style.height : 30 : 30;
            borderWidth = width / 8;
            return (
                <View style={{ ...{ width: width, height: height, alignItems: 'center', display: 'flex', justifyContent: 'center', borderRadius: width / 2 }, ...style }}>
                    <Pressable style={clickFlag ? { borderWidth: borderWidth, borderColor: '#4CD964', borderRadius: width / 2, width: width, height: height } : { borderWidth: borderWidth, borderColor: '#ffffff', borderRadius: width / 2, width: width, height: height }} onPress={() => { setClickFlag(!clickFlag); (onClick) && onClick() }} />
                </View>
            );
            break;
    }
}