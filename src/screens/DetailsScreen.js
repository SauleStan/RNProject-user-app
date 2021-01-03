import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DetailsScreen;