import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Spacer = ({children}) => {
    return (
        <View style={{margin: 16}}>{children}</View>
    );
};
export default Spacer;
