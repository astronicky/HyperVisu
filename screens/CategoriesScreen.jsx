import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import Layout from '../components/Layout/Layout';
import RoomItem from '../components/Common/RoomItem';
import DateBar from '../components/Common/DateBar';
import { useOrientation } from '../hooks/useOrientation';
import { CATEGORIES_CONFIGURATION, LOGINED_USER, CATEGORY } from "../Constant";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const CategoriesScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;
    
    const [userInfo, setUserInfo] = useState({});

    const [categoriesConfig, setCategoriesConfig] = useState({});
    const [categories, setCategories] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        AsyncStorage.getItem(CATEGORIES_CONFIGURATION)
        .then((value) => {
            value = JSON.parse(value);
            setCategoriesConfig(value);
            setCategories(Object.keys(value));
            return AsyncStorage.getItem(LOGINED_USER);
        })
        .then((value) => {
            value = JSON.parse(value);
            setUserInfo(value);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

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
                        <View style={portrait.categoryContainer}>
                            <DateBar flagButton={false}></DateBar>
                            <Text style={portrait.mainTitle}>Categories</Text>
                            <Text style={portrait.subTitle}>You can control all your Smart Home {orientation === 'PORTRAIT' && "\n" }and enjoy Smart life</Text>
                        </View>
                        <View style={orientation === 'PORTRAIT' ? portrait.category : landscape.category}>
                            {categories?.map((id, index) => {
                                return (
                                    <RoomItem 
                                        key={index} 
                                        id={id}
                                        configDict={categoriesConfig}
                                        onClick={() => {
                                            navigation.navigate(CATEGORY, {
                                                categoryId: id
                                            });
                                        }}
                                    />
                                );
                            })}
                        </View>
                    </>
                    )
                }
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    categoryContainer: {
        padding: 20,
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
    category: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

const landscape = StyleSheet.create({
    category: {
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default CategoriesScreen;

