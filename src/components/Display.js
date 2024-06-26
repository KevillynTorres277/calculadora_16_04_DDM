import React from "react";
import { StyleSheet, Text, View  } from "react-native";

const styles = StyleSheet.create ({
    display: {
        flex: 1, 
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rbga(0, 0, 0, 0.6)',
        alighItems: 'flex-end'
    },

    displayValue: {
        fontSize: 60,
        color: '#ffffff'
    },
})

export default props => {
    return (
        <view style={styles.display}>
            <Text style = {styles.displayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </view>
    )
}
