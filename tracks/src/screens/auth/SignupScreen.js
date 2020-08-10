import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text> SignupScreen </Text>
            <Button
                title="Sign In Screen"
                onPress={() => navigation.navigate('Signin')}
            />
            <Button
                title="Main Flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;
