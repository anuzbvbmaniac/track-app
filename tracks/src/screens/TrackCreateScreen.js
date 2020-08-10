import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView>
            <Text h3> TrackCreateScreen </Text>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
