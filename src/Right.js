import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Icon } from 'react-native-elements'
const Right = (props) => (
    <View style={{
        flexDirection: 'column',
        backgroundColor: '#d4d4d4',
        flex: 1,
        padding:10
    }}>

        <View style={{ backgroundColor: '#ff0000', flex: 1, margin:5 }}>
            <Text>Hello</Text>
        </View>
        <View style={{ backgroundColor: '#00ff00', flex: 2, margin:5 }}>
            <Text>Hello1</Text>
        </View>
        <View style={{ backgroundColor: '#0000ff', flex: 1, margin:5 }}>
            <Text>Hello2</Text>
        </View>
    </View>
);

export default Right;
