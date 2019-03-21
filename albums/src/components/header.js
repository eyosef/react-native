import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headerStyle}>Albums!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20
    }
});