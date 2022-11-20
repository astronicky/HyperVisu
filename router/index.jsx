import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConnectScreen from '../screens/ConnectScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { LOGIN, CONNECT, CANCEL, FORGOT_PASSWORD, HOME, ROOM, CATEGORIES, SETTING } from '../Constant';
import Footer from '../components/Layout/Footer';

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <Footer {...props} />}>
                <Tab.Screen name={CONNECT} component={ConnectScreen} options={{ headerShown: false, tabBarStyle: styles.tabBarVisible }} />
                <Tab.Screen name={LOGIN} component={LoginScreen} options={({ navigation }) => ({
                    headerTitle: '',
                    headerStyle: styles.headerStyle,
                    tabBarStyle: styles.tabBarHide,
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(FORGOT_PASSWORD);
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
                <Tab.Screen name={FORGOT_PASSWORD} component={ForgotPasswordScreen} options={({ navigation }) => ({
                    headerTitle: '',
                    headerStyle: styles.headerStyle,
                    tabBarStyle: styles.tabBarHide,
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
                                navigation.navigate(LOGIN);
                            }}
                        >
                            <Text style={styles.headTitle}>{CANCEL}</Text>
                        </Pressable>
                    ),
                })} />
            </Tab.Navigator>
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
    },
    headerStyle: {
        backgroundColor: '#000000',
    },
    tabBarHide: {
        display: "none"
    },
    tabBarVisible: {
        backgroundColor: '#000000'
    }
});