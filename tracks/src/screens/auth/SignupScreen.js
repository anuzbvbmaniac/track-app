import React, { useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText={'Sign Up'}
            />
            <NavLink
                navText="Already have an account? Sign In Here. "
                routeName="Signin"
            />

        </View>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
