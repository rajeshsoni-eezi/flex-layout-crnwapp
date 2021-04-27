import React from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import styles from './Style';
import NavItems from './NavItems';
const Nav = (props) => (
    <View style={[styles.col1, navStyles.sideMenu]}>
        <TouchableOpacity onPress={() => props.toggleSideMenu()}>
            <Text>Close Me</Text>
        </TouchableOpacity>
        <NavItems />
    </View>
);
const navStyles = StyleSheet.create({
    sideMenu: {
        flex: 1,
        paddingLeft: 0,
        borderRightWidth: 1,
        borderRightColor: "#F2f2f2",
        backgroundColor: '#fff',
        left: 0,
        // top: Helper.isMobileDevice() ? statusBarHeight : 44,
        width: 260,
        zIndex: 9999,
        position: (Platform.OS !== 'web') ? 'absolute' : 'relative',
        alignItems: 'flex-start',
        height: 900
    }
})
export default Nav;
