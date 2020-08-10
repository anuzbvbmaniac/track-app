import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text> TrackListScreen </Text>
            <Button
                title="Track Details"
                onPress={() => navigation.navigate('TrackDetail')}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
