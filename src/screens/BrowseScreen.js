import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import ItemCard from '../components/ItemCard';
import { fetchData } from '../database/petDatabase.utils';

function BrowseScreen({ navigation }) {
    const [data, onChangeData] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData().then((result) => {
                onChangeData(result);
            });
        });
        return unsubscribe;
    }, [navigation]);

    const renderItem = ({ item }) => (
        <ItemCard
            title={item.title}
            age={item.age}
            breed={item.breed}
            image={item.image}
            onPress={()=>{navigation.navigate('Form', {
                pet: item
            })}}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
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
        paddingLeft: 35,
        paddingRight: 20,
    },
});

export default BrowseScreen;