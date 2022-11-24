import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import ImageButton from '../components/Common/ImageButton';
import DateBar from '../components/Common/DateBar';
import { CATEGORY_DATA } from "../Constant";

const CategoriesScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.categoryContainer}>
                        <DateBar flagButton={false}></DateBar>
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

