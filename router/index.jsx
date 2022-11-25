import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConnectScreen from '../screens/ConnectScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ActionButtons from '../screens/ActionButtons';
import SettingScreen from '../screens/SettingScreen';
import ConfigScreen from '../screens/ConfigScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import RoomsScreen from '../screens/RoomsScreen';
import SmartHOmeScreen from '../screens/SmartHomeScreen';
import ShutterScreen from '../screens/ShutterScreen';
import LightScreen from '../screens/LightScreen';
import CameraScreen from '../screens/CameraScreen';
import RoomScreen from '../screens/RoomScreen';
import BabyRoomScreen from '../screens/BabyRoomScreen';
import PowerScreen from '../screens/PowerScreen';
import { LOGIN, CONNECT, CANCEL, FORGOT_PASSWORD, 
        ACTION_BUTTONS, SETTING, CONFIG, CATEGORIES, 
        ROOMS, HOME, SHUTTER, LIGHT, CAMERA, ROOM,
        BABYROOM, POWER } from '../Constant';
import Footer from '../components/Layout/Footer';

const Tab = createBottomTabNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <Footer {...props} />}>
                <Tab.Screen name={CONNECT} component={ConnectScreen} options={{ headerShown: false }} />
                <Tab.Screen name={LOGIN} component={LoginScreen} options={({ navigation }) => ({
                    headerTitle: '',
                    headerStyle: styles.headerStyle,
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
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(ACTION_BUTTONS);
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
                <Tab.Screen name={ACTION_BUTTONS} component={ActionButtons} options={({ navigation }) => ({
                    headerTitle: '',
                    headerStyle: styles.headerStyle,
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(LOGIN);
                            }}
                        >
                            <Icon name="angle-right" size={17} color="#FF9500" style={styles.nextArrowButton} />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate(FORGOT_PASSWORD);
                            }}
                        >
                            <Text style={styles.headTitle}>{CANCEL}</Text>
                        </Pressable>
                    ),
                })} />
                <Tab.Screen name={HOME} component={SmartHOmeScreen} options={{ headerShown: false }} />
                <Tab.Screen name={ROOMS} component={RoomsScreen} options={{ headerShown: false }} />
                <Tab.Screen name={CATEGORIES} component={CategoriesScreen} options={{ headerShown: false }} />
                {/* <Tab.Screen name={SETTING} component={SettingScreen} options={{ headerShown: false }} /> */}
                <Tab.Screen name={CONFIG} component={ConfigScreen} options={{ headerShown: false }} />
                <Tab.Screen name={SHUTTER} component={ShutterScreen} options={{ headerShown: false }} />
                <Tab.Screen name={LIGHT} component={LightScreen} options={{ headerShown: false }} />
                <Tab.Screen name={CAMERA} component={CameraScreen} options={{ headerShown: false }} />
                <Tab.Screen name={ROOM} component={RoomScreen} options={{ headerShown: false }} />
                <Tab.Screen name={BABYROOM} component={BabyRoomScreen} options={{ headerShown: false }} />
                <Tab.Screen name={POWER} component={PowerScreen} options={{ headerShown: false }} />
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