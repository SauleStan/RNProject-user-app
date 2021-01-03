import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textSmaller}>✩ ✩ ✩</Text>
            <Text style={styles.textBigger}>Welcome to PetSnatcher!</Text>
            <Text style={styles.textSmaller}>✩ ✩ ✩</Text>
            <View style={styles.mainTextArea}>
                <Text style={styles.text}>This app is made with the purpose of finding a new pet for your hosehold :)</Text>
                <Text style={styles.text}>Interested in any of the good boys listed in this app? Press the snatch button, fill out the form and we'll get in touch with you!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#222130',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTextArea: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textBigger: {
        color: 'white',
        fontSize: 24,
    },
    textSmaller: {
        color: 'white',
        fontSize: 14,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default AboutScreen;