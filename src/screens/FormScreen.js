import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonComponent from '../components/ButtonComponent';

function FormScreen({ route }) {
    const { petName, petImage } = route.params;

    const [fName, onChangefNameText] = useState();
    const [lName, onChangelNameText] = useState();
    const [phone, onChangePhone] = useState();
    const [email, onChangeEmail] = useState();
    const [other, onChangeOther] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <StatusBar
                    barStyle="light-content"
                    translucent={false}
                    backgroundColor="#222130"
                />

                <Text style={styles.text}>Ask about {petName}!</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: petImage,
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangefNameText(text)}
                    value={fName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangelNameText(text)}
                    value={lName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangePhone(text)}
                    value={phone}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#878787'
                    onChangeText={text => onChangeEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.textArea}
                    placeholder="Fill here if you have any additional comments or questions for us"
                    placeholderTextColor='#878787'
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={text => onChangeOther(text)}
                    value={other}
                />
                <ButtonComponent
                    buttonName="SUBMIT"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
    },
    scrollContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        color: 'white',
        width: '80%',
        height: 40,
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
        margin: 10,
        textAlign: 'left',
    },
    textArea: {
        width: '80%',
        color: 'white',
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        height: 150,
    },
    image: {
        marginTop: 15,
        height: 160,
        width: '80%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',
    },
});

export default FormScreen;