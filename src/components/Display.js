import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default function Display({ value }) {
    return (
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    displayValue: {
        color: '#fff',
        fontSize: 60,
    }
})