import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import ImageButton from '../components/Common/ImageButton';
import DateBar from '../components/Common/DateBar';
import { useOrientation } from '../hooks/useOrientation';
import { CATEGORY_DATA } from "../Constant";

const CategoriesScreen = ({ navigation }) => {

    const orientation = useOrientation();

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.categoryContainer}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={portrait.mainTitle}>Categories</Text>
                        <Text style={portrait.subTitle}>You can control all your Smart Home {orientation === 'PORTRAIT' && "\n" }and enjoy Smart life</Text>
                    </View>
                    <View style={orientation === 'PORTRAIT' ? portrait.category : landscape.category}>
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

