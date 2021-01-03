import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import ItemCard from '../components/ItemCard';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Bunny',
        age: "Adult",
        breed: "Hwite"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Sqwrl',
        age: "Baby",
        breed: "Chestnut"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Bunny 2',
        age: "Adult",
        breed: "Blakk"
    },
];

function HomeScreen() {
    const renderItem = ({ item }) => (
        <ItemCard
            title={item.title}
            age={item.age}
            breed={item.breed}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
    },
});

export default HomeScreen;