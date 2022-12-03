import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
const width = 52;
const height =32;
padding = height / 10;

const CircleToggleButton = ({ title, onShowModal }) => {

    const [clickFlag, setClickFlag] = useState();

    return (
        <Pressable onPress={() => (onShowModal) && onShowModal(true)}>
            <View style={styles.container}>
                <View><Text style={styles.titleText}>{title}</Text></View>
                <View style={{width: width, height: height, alignItems: 'center', justifyContent: 'center'}}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag) }}>
                        <View style={clickFlag ? { flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#4CD964', borderRadius: height / 2, padding: padding, width: width, height: height } : { flexDirection: 'row', backgroundColor: '#6A6A6B', borderRadius: height / 2, padding: padding, width: width, height: height }}>
                            <View style={clickFlag ? { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (height * 0.8) / 2 } : { flex: 0.5, backgroundColor: '#ffffff', borderRadius: (height * 0.8) / 2 }} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 21,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 21,
    backgroundColor: '#2F2F31',
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 17
  }
});

export default CircleToggleButton;