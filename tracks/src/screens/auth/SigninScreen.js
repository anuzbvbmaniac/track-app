import React, { useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText={'Sign In'}
                errorMessage={state.errorMessage}
                submitButtonText={'Sign In'}
                onSubmit={signin}
            />
            <NavLink
                navText={'Not Registered yet? Sign Up here.'}
                routeName={'Signup'}
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
});

export default SigninScreen;
