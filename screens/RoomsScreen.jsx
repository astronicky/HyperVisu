import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import RoomItem from '../components/Common/RoomItem';
import { useOrientation } from '../hooks/useOrientation';
import { ROOM, ROOMS_DATA, CATEGORIES, FAVORITE_ROOMS_DATA } from "../Constant";

const RoomsScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    let count = orientation === 'PORTRAIT' ? 3 : 5;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.roomsContainer}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={portrait.mainTitle}>Rooms</Text>
                        <Text style={portrait.subTitle}>You can control all your Smart Home{orientation === 'PORTRAIT' && "\n"}and enjoy Smart life</Text>
                    </View>
                    <View style={portrait.favoriteRooms}>
                        <View style={portrait.favoriteTitle}>
                            <View style={orientationStyle.favoriteRoomBar}>
                                <Text style={orientationStyle.favoriteText}>Favorite Room</Text>
                                <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                    <Text style={{...orientationStyle.favoriteText, color: '#F1580C'}}>See all</Text>
                                </Pressable>
                            </View>
                            {orientation === 'LANDSCAPE' && <View style={{ flex:6 }}></View>}
                        </View>
                        <View style={portrait.roomItems}>
                            {orientation === 'LANDSCAPE' ? (<View style={{ flex:6, flexDirection: 'row', justifyContent: 'space-between'}}>
                            {FAVORITE_ROOMS_DATA?.slice(0, count).map(( data, index ) => {
                                return (
                                    <FavoriteRoom key={index} {...{ room: data.room, imgUrl: data.imgUrl, bgColor: data.bgColor, textColor: data.textColor}}></FavoriteRoom>
                                );
                            })}
                            </View>) : 
                            (<>
                                {FAVORITE_ROOMS_DATA?.slice(0, count).map(( data, index ) => {
                                    return (
                                        <FavoriteRoom key={index} {...{ room: data.room, imgUrl: data.imgUrl, bgColor: data.bgColor, textColor: data.textColor}}></FavoriteRoom>
                                    );
                                })}
                            </> )}
                            {orientation === 'LANDSCAPE' && <View style={{ flex:6 }}></View>}
                        </View> 
                    </View>
                    <View style={portrait.roomAll}>
                        <Text style={orientationStyle.favoriteText}>All</Text>
                        {/* <Text style={{...portrait.favoriteText, color: '#F1580C'}}>See all</Text> */}
                    </View>
                    <View style={orientationStyle.roomsList}>    
                        {ROOMS_DATA?.map((data, index) => {
                        return (
                            <RoomItem key={index} {...{ title: data.room, imgUrl: data.imgUrl, navigation, path: ROOM }}></RoomItem>
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
    roomsContainer: {
        padding: 20
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    favoriteRooms: {
        padding: 20
    },
    favoriteRoomBar: {
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    favoriteTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    favoriteText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    roomItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    roomAll: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },
    roomsList: {
        paddingLeft: 20,
        paddingRight: 20
    }
}) ;

const landscape = StyleSheet.create({
    roomsList: {
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    favoriteRooms: {
        flexDirection: 'row'
    },
    favoriteRoomBar: {
        flex:6, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    favoriteText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
})

export default RoomsScreen;

