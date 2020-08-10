import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3 style={{marginLeft: 8}}>{(headerText).toUpperCase()}</Text>
            </Spacer>
            <Spacer>
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='Email Address'
                    leftIcon={
                        <Icon
                            name='mail-outline'
                            size={22}
                            color='black'
                        />
                    }
                />
                <Input
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    placeholder='Password'
                    leftIcon={
                        <Icon
                            name='key-outline'
                            size={24}
                            color='black'
                        />
                    }
                />
                {errorMessage
                    ? <Text style={styles.errorMessage}>{errorMessage}</Text>
                    : null
                }
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default AuthForm;
