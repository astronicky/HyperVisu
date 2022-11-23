import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import ImageButton from '../components/Common/ImageButton';
import { CATEGORY_DATA } from "../Constant";

const CategoriesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.topTitle}>
                            <Text style={styles.dateTitle}>Tues, 27 Sept 2022 | 10:59 Pm</Text>
                            {/* <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/images/plusbackground.png')} style={{ width: 30, height: 30 }}></Image>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', position: 'absolute' }}>+</Text>
                            </View>   */}
                        </View>
                        <Text style={styles.mainTitle}>Categories</Text>
                        <Text style={styles.subTitle}>You can control all your Smart Home {"\n"}and enjoy Smart life</Text>
                    </View>
                    <View style={styles.categoryButtons}>
                        {CATEGORY_DATA?.map((data, index) => {
                            return (
                                <ImageButton key={index} {...{ title: data.title, imgUrl: data.imgUrl, path: data.path, navigation }}></ImageButton>
                            );
                        })}
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    categoryContainer: {
        padding: 25,
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    categoryButtons: {
        padding: 20,
        paddingBottom: 0
    }
}) ;

export default CategoriesScreen;

