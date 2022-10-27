import React from 'react';
import { Text, StyleSheet,View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style ={Style.textStyle2} > My name is Pyromaninho</Text>

    return (
    <View>
        <Text style={Style.textStyle1}>Getting started with react native!</Text>
        <Text>{greeting}</Text>
    </View>
    );
};

const Style = StyleSheet.create({

    textStyle1: {   
        fontSize: 45
    },
    textStyle2: {   
        fontSize: 20
    }
});



export default ComponentsScreen;