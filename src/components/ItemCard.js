import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ItemCard(props) {
    return (
        <View style={styles.container}>
            {/* TODO: Make the image display instead of text */}
            <Text style={styles.image}></Text>
            {/*  */}
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.descriptionText}>{props.age} • {props.breed}</Text>
            <Text style={styles.button}>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '80%',
        height: 300,
        marginTop: 10,
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 5,
    },
    button: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        letterSpacing: 2,
        marginTop: 15,
        marginBottom: 15,
        paddingTop: 5,
        width: '30%',
        borderRightColor: 'rgba(235, 25, 110, 0.7)',
        borderLeftColor: '#58cdd1',
        borderWidth: 5,
    },
    image: {
        marginTop: 15,
        height: 100,
        width: '80%',
        borderRadius: 15,
        borderWidth: 5,
        // borderColor: '#58cdd1',
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    descriptionText: {
        fontSize: 18,
        color: 'grey'
    }

});

export default ItemCard;