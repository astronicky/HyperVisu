import React, { useState, useEffect } from "react";
import {
    LayoutChangeEvent,
    PanResponder,
    PanResponderGestureState,
    StyleSheet,
    View,
    Text
} from "react-native";

const initialValue = 0;
const min = 0;
const max = 100;
const CIRCLE_DIAMETER = 50;

const VerticalSlider = ({ onValueChange }) => {

    const [barHeight, setBarHeight] = useState(null);
    const [deltaValue, setDeltaValue] = useState(0);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // console.log("bottomOffset: ", bottomOffset);
    }, [value, deltaValue, barHeight]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderEnd:() => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (_, gestureState) => onMove(gestureState),
        onPanResponderRelease: () => onEndMove(),
        onPanResponderTerminate: () => {}
    });

    const onMove = (gestureState) => {
        const newDeltaValue = getValueFromBottomOffset( -gestureState.dy, barHeight, min, max );
        // console.log("onMove: ", newDeltaValue);
        setDeltaValue(newDeltaValue);
    }
    const onEndMove = () => {
        setValue(value + deltaValue);
        setDeltaValue(0);
    }

    const onBarLayout = (event) => {
        const { height: barHeight } = event.nativeEvent.layout;
        setBarHeight(barHeight);
    };

    const capValueWithinRange = (_value, range) => {
        if (_value < range[0]) return range[0];
        if (_value > range[1]) return range[1];
        return _value;
    };

    const getValueFromBottomOffset = (offset,_barHeight,rangeMin,rangeMax) => {
        if (_barHeight === null) return 0;
        return ((rangeMax - rangeMin) * offset) / _barHeight;
    };

    const getBottomOffsetFromValue = (_value, rangeMin, rangeMax, _barHeight) => {
        if (_barHeight === null) return 0;
        const valueOffset = _value - rangeMin;
        const totalRange = rangeMax - rangeMin;
        const percentage = valueOffset / totalRange;
        return _barHeight * percentage;
    };

    const cappedValue = capValueWithinRange(value + deltaValue, [ min, max ]);
    const bottomOffset = getBottomOffsetFromValue(cappedValue, min, max, barHeight);

    return (
        <View style={styles.pageContainer}>
            {/* <Text style={styles.value}>{Math.floor(cappedValue)}</Text> */}
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <View style={styles.bar} onLayout={onBarLayout} />
                    <View style={{...styles.circle, bottom: bottomOffset}} {...panResponder.panHandlers}/>
                    <View style={{...styles.subContainer, height: Math.floor(bottomOffset + 10)}}></View>
                </View>
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    pageContainer: {
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 325
    },
    container: {
        flexGrow: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    value: {
        color: 'white'
    },
    barContainer: {
        width: 39,
        alignItems: 'center',
        paddingVertical: CIRCLE_DIAMETER / 2,
        marginHorizontal: 20,
        backgroundColor: '#F1580C',
        borderRadius: 23,
        position: 'relative'
    },
    bar: {
        backgroundColor: '#F1580C',
        flexGrow: 1,
    },
    circle: {
        borderRadius: CIRCLE_DIAMETER / 2,
        width: CIRCLE_DIAMETER,
        height: CIRCLE_DIAMETER,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0
    },
    subContainer: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        width: 39,
        bottom: 0,
        opacity: 0.9
    }
});

export default VerticalSlider;
