import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import styles from './Style';
import { Icon } from 'react-native-elements'
const Header = (props) => (
    <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
            {Platform.OS !== 'web' && <TouchableOpacity onPress={() => props.toggleSideMenu()}>
                <View style={{ width: 40 }}>
                    <Icon
                        name='md-menu'
                        type='ionicon'
                        color='#333'
                    />
                </View>
            </TouchableOpacity>}
            <View style={{ flexDirection: 'row' }}>
                {/* <Icon name='heartbeat' type='font-awesome' />
                <Icon name='alert-circle' type='feather' />
                <Icon name='sc-telegram' type='evilicon' color='#333' />
                <Icon name='stepbackward' type='antdesign' color='#333' />
                <Icon name='settings' type='material' color='#333' /> */}
                <Text style={styles.bodyText}>Header</Text>
            </View>
        </View>
    </View>
);

export default Header;
