import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, navText, routeName }) => {
    return (
        <Spacer>
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
            >
                <Text style={{ fontSize: 16, color: 'dodgerblue', marginLeft: 2 }}>{navText}</Text>
            </TouchableOpacity>
        </Spacer>
    );
};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
