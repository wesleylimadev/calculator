import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

export default function Button({ double, triple, operation, onPress, label }) {
    const stylesButton = [styles.button]
    if (double) stylesButton.push(styles.buttonDouble)
    if (triple) stylesButton.push(styles.buttonTriple)
    if (operation) stylesButton.push(styles.operationButton)
    
    return (
        <TouchableHighlight onPress={() => onPress(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f0f0f0',
        borderColor: '#888',
        borderWidth: 1,
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        width: Dimensions.get('window').width / 4,
    },
    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})