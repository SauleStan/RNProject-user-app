import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import ItemCard from '../components/ItemCard';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ItemCard
                title="Title"
                age="Adult"
                breed="Hwite"
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default HomeScreen;