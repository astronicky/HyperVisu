import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConnectScreen from '../screens/ConnectScreen';
import LoginScreen from '../screens/LoginScreen';
import { LOGIN, CONNECT, CANCEL } from '../Constant';

const Stack = createStackNavigator();

export default function Router({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={CONNECT} component={ConnectScreen} options={{ headerShown: false }} />
                <Stack.Screen name={LOGIN} component={LoginScreen} options={({ navigation }) => ({
                    headerTitle: '',
                    headerStyle: { backgroundColor: '#000000' },
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(CONNECT);
                            }}
                        >
                            <Icon name="angle-right" size={17} color="#FF9500" style={styles.nextArrowButton} />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(CONNECT);
                            }}
                        >
                            <Text style={styles.headTitle}>{CANCEL}</Text>
                        </Pressable>
                    ),
                })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headTitle: {
        fontSize: 17,
        lineHeight: 22,
        color: '#ffffff',
        marginLeft: 24
    },
    nextArrowButton: {
        paddingRight: 35
    }
});