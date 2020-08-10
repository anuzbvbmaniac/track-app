import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const LoadingScreen = () => {
    const { tryLocalSignIn } = useContext(AuthContext);

    // useEffect(() => {
    //     setInterval(() => {
    //         tryLocalSignIn();
    //     }, 3000);
    // }, []);
    useEffect(() => {
        tryLocalSignIn();
    })

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={22}
                color={'black'}
            />
            <Text> Loading </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingScreen;
