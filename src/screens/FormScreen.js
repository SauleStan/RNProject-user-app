import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FormScreen() {
    return (
        <View style={styles.container}>
            <Text>Form</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
    },
});

export default FormScreen;