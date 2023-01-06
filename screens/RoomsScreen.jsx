import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Pressable, ActivityIndicator, Dimensions } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import RoomItem from '../components/Common/RoomItem';
import { useOrientation } from '../hooks/useOrientation';
import { getFavoriteRooms } from '../apis/users';
import { ROOM, ROOMS_CONFIGURATION, ROOMS_DATA } from "../Constant";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RoomsScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    let count = orientation === 'PORTRAIT' ? 3 : 5;

    const [favorRooms, setFavorRooms] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const [roomsConfig, setRoomsConfig] = useState({});
    const [rooms, setRooms] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

	const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        AsyncStorage.getItem(ROOMS_CONFIGURATION)
        .then((value) => {
            value = JSON.parse(value);
            setRoomsConfig(value);
            setRooms(Object.keys(value));
            return getFavoriteRooms();
        })
        .then((res) => {
            const { data, user } = res;
            setFavorRooms(data);
            setUserInfo(user);
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
                        <View style={portrait.roomsContainer}>
                            <DateBar flagButton={false}></DateBar>
                            <Text style={portrait.mainTitle}>Rooms</Text>
                            <Text style={portrait.subTitle}>You can control all your Smart Home{orientation === 'PORTRAIT' && "\n"}and enjoy Smart life</Text>
                        </View>
                        <View style={portrait.favoriteRooms}>
                            <View style={portrait.favoriteTitle}>
                                <View style={orientationStyle.favoriteRoomBar}>
                                    <Text style={orientationStyle.favoriteText}>Favorite Room</Text>
                                    {/* `<Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                        <Text style={{...orientationStyle.favoriteText, color: '#F1580C'}}>See all</Text>
                                    </Pressable>` */}
                                </View>
                                {orientation === 'LANDSCAPE' && <View style={{ flex:6 }}></View>}
                            </View>
                            <View style={portrait.roomItems}>
                                {orientation === 'LANDSCAPE' ? (<View style={{ flex:6, flexDirection: 'row', justifyContent: 'space-between'}}>
                                {favorRooms?.slice(0, count).map(( { id }, index ) => {
                                    return (
                                        <FavoriteRoom 
                                            key={index} 
                                            id={id}
                                            configDict={roomsConfig}
                                            bgColor={userInfo.widgets_background_color}
                                            textColor={userInfo.text_color}
                                        />
                                    );
                                })}
                                </View>) : 
                                (<>
                                    {favorRooms?.slice(0, count).map(( { id }, index ) => {
                                        return (
                                            <FavoriteRoom 
                                                key={index} 
                                                id={id}
                                                configDict={roomsConfig}
                                                bgColor={userInfo.widgets_background_color}
                                                textColor={userInfo.text_color}
                                            />
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
                            {rooms?.map((id, index) => {
                            return (
                                <RoomItem 
                                    key={index} 
                                    id={id}
                                    configDict={roomsConfig}
                                    onClick={() => {
                                        navigation.navigate(ROOM);
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

