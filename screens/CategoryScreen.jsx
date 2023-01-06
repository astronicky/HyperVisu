import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import { useOrientation } from '../hooks/useOrientation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CATEGORIES_CONFIGURATION, LOGINED_USER, ROOMS_CONFIGURATION, WIDGETS_CONFIGURATION } from '../Constant';
import { WIDGET_COMPONENTS } from '../utils/widgetsComponents';

const CategoryScreen = ({ route }) => {
    
    const { categoryId } = route.params;
    
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const [userInfo, setUserInfo] = useState({});

    const [roomsConfig, setRoomsConfig] = useState({});
    const [categoriesConfig, setCategoriesConfig] = useState({});
    const [widgetsConfig, setWidgetsConfig] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const windowHeight = Dimensions.get('window').height;

    const widgetList = Object.values(widgetsConfig).filter((v) => (v.category_id == categoryId));
    const roomWidgets = widgetList.reduce((pv, cv) => {
        pv[widgetsConfig[cv.id].room_id] = pv[widgetsConfig[cv.id].room_id] || [];
        pv[widgetsConfig[cv.id].room_id].push(cv.id);
        return pv;
    }, {});
    const roomKeys = Object.keys(roomWidgets);

    useEffect(() => {
        Promise.all([
            AsyncStorage.getItem(LOGINED_USER), 
            AsyncStorage.getItem(ROOMS_CONFIGURATION), 
            AsyncStorage.getItem(CATEGORIES_CONFIGURATION), 
            AsyncStorage.getItem(WIDGETS_CONFIGURATION), 
        ])
        .then((data) => { // 0: userInfo, 1: rooms config, 2: categories config, 3: widgets config
            
            const user = JSON.parse(data[0]), rc = JSON.parse(data[1]), cc = JSON.parse(data[2]), wc = JSON.parse(data[3]);

            setUserInfo(user);
            setRoomsConfig(rc);
            setCategoriesConfig(cc);
            setWidgetsConfig(wc);

            setIsLoading(false);
        })
    }, []);

    const SubWidgetComponent = ({ widgets }) => {
        return (
            <>
            {
                widgets.map((v, index) => {
                    const WCOMPONENT = WIDGET_COMPONENTS[widgetsConfig[v].type_id];
                    return <WCOMPONENT key={index}/>
                })
            }
            </>
        );
    }

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}> 
                {
                    isLoading ? (
                        <View style={{ marginTop: windowHeight / 2 - 100 }}>
                            <ActivityIndicator size="large" color="#F1580C" />
                        </View>
                    ) : (
                    <>
                        <View style={styles.categoryTitle}>
                            <DateBar flagButton={false}></DateBar>
                            <Text style={orientationStyle.mainTitle}>{categoriesConfig[categoryId].name}</Text>
                            <Text style={orientationStyle.subTitle}>{categoriesConfig[categoryId].description}</Text>
                        </View>
                        <View style={orientationStyle.categoryContainerLand}>
                        {
                            roomKeys.map((v, index) => {
                                return (
                                    <View key={index} style={orientationStyle.categoryContainer}>
                                        <View style={orientationStyle.categoryTilte}>
                                            <Text style={orientationStyle.categoryText}>{roomsConfig[v].name}</Text>
                                        </View>
                                        <SubWidgetComponent widgets={roomWidgets[v]} />
                                    </View>
                                )
                            })
                        }
                        </View>
                    </>
                    )
                }
                </ScrollView>
            </Layout>
        </SafeAreaView>
      )
};

const styles = StyleSheet.create({
    categoryTitle: {
        padding: 25,
        paddingBottom: 0
    },
});

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryContainerLand: {
        // flexDirection: 'row',
    },
    categoryContainer: {
        padding: 27,
        paddingBottom: 0
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    categoryTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
});

const landscape = StyleSheet.create({
    categoryContainerLand: {
        flexDirection: 'row',
    },
    categoryContainer: {
        padding: 27,
        paddingBottom: 0,
        flex: 6
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    categoryTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
});

export default CategoryScreen;