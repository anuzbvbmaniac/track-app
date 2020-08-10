import React, { useContext } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <StatusBar hidden/>
            <Spacer>
                <Text> Account </Text>
                <Button
                    title={'SIGNOUT'}
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;
