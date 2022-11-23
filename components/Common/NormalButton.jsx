import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';

const NormalButton = ({title, style, path, navigation}) => {
    return (
        <View {...{ style }}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Pressable style={styles.baseButton} onPress={() => navigation.navigate(path)}>
                        <View><Text style={styles.titleText}>{title}</Text></View>
                        <Icon name="angle-right" size={15} color="#FF9500" />
                    </Pressable> 
                </TouchableOpacity>           
            </View>
        </View>
      
    )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 21,
    paddingTop: 19,
    paddingBottom: 18,
    paddingRight: 21,
    backgroundColor: '#2F2F31',
    marginBottom: 15
  },
  baseButton: {
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

export default NormalButton;