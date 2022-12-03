import React from "react";
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

export default class VerticalSlider extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        barHeight: null,
        deltaValue: 0,
        value: initialValue
    };

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderEnd:() => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
        onPanResponderRelease: () => this.onEndMove(),
        onPanResponderTerminate: () => {}
    });

    onMove(gestureState) {
        const { barHeight } = this.state;
        const newDeltaValue = this.getValueFromBottomOffset( -gestureState.dy, barHeight, min, max );

        this.setState({
            deltaValue: newDeltaValue
        });
    }
    onEndMove() {
        const { value, deltaValue } = this.state;
        this.setState({ value: value + deltaValue, deltaValue: 0 });
    }

    onBarLayout = (event) => {
        const { height: barHeight } = event.nativeEvent.layout;
        this.setState({ barHeight });
    };

    capValueWithinRange = (value, range) => {
        if (value < range[0]) return range[0];
        if (value > range[1]) return range[1];
        return value;
    };

    getValueFromBottomOffset = (offset,barHeight,rangeMin,rangeMax) => {
        if (barHeight === null) return 0;
        return ((rangeMax - rangeMin) * offset) / barHeight;
    };

    getBottomOffsetFromValue = (
        value,
        rangeMin,
        rangeMax,
        barHeight
    ) => {
        if (barHeight === null) return 0;
        const valueOffset = value - rangeMin;
        const totalRange = rangeMax - rangeMin;
        const percentage = valueOffset / totalRange;
        return barHeight * percentage;
    };

    render() {
        const { value, deltaValue, barHeight } = this.state;

        const cappedValue = this.capValueWithinRange(value + deltaValue, [ min, max ]);
        const bottomOffset = this.getBottomOffsetFromValue(cappedValue, min, max, barHeight);

        return (
        <View style={styles.pageContainer}>
            {/* <Text style={styles.value}>{Math.floor(cappedValue)}</Text> */}
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <View style={styles.bar} onLayout={this.onBarLayout} />
                    <View style={{...styles.circle, bottom: bottomOffset}} {...this.panResponder.panHandlers}/>
                    <View style={{...styles.subContainer, height: Math.floor(bottomOffset + 9), width: bottomOffset <= 1?10:'100%'}}></View>
                </View>
            </View>
        </View>
        );
    }
};

const styles = StyleSheet.create({
    pageContainer: {
        flexGrow: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        height: '100%'
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
