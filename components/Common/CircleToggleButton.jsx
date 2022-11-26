import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import ActionButton from "./ActionButton";
import { ACTION_CIR_SWITCH_BUTTON } from '../../Constant';

const CircleToggleButton = ({ title, style, onShowModal }) => {

    return (
        <View {...{ style }}>
            <Pressable onPress={() => (onShowModal) && onShowModal(true)}>
            <View style={styles.container}>
                <View><Text style={styles.titleText}>{title}</Text></View>
                <ActionButton name={ACTION_CIR_SWITCH_BUTTON} style={styles[ACTION_CIR_SWITCH_BUTTON]} />
            </View>
            </Pressable>
        </View>
      
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
  },
  [ACTION_CIR_SWITCH_BUTTON]: {
    width: 52,
    height: 32,
},
});

export default CircleToggleButton;