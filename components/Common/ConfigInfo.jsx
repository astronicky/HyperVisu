import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ConfigInfo = ({name, info}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 5}}>
                <Text style = {styles.text}>{name}</Text>
            </View>
            <View style={{flex: 5}}>
                <Text style = {styles.subText}>{info}</Text>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 17.5, 
    paddingLeft: 15.64, 
    paddingTop: 17.5, 
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
  },
  subText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
  }
});

export default ConfigInfo;