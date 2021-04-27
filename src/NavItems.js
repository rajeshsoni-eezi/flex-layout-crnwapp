import React from 'react';
import { Text, View, TouchableOpacity, Platform, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements'
const NavItems = (props) => (
    <View style={styles.navContainer}>
        <View><Text style={styles.menuText}>Menu</Text></View>
        <TouchableOpacity style={styles.navItemStyle}>
            <Icon
                name="home"
                type="feather"
                size={16}
                style={styles.iconStyle}
            />
            <Text style={styles.menuText}>Dashboards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemStyle}>
            <Icon
                name="calendar"
                type="feather"
                size={16}
                style={styles.iconStyle}
            />
            <Text style={styles.menuText}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemStyle}>
            <Icon
                name="file-text"
                type="feather"
                size={16}
                style={styles.iconStyle}
            />
            <Text style={styles.menuText}>File Manager</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemStyle}>
            <Icon
                name="instagram"
                type="feather"
                size={16}
                style={styles.iconStyle}
            />
            <Text style={styles.menuText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemStyle}>
            <Icon
                name="mail"
                type="feather"
                size={16}
                style={styles.iconStyle}
            />
            <Text style={styles.menuText}>Inbox</Text>
        </TouchableOpacity>

    </View>
);

const styles = StyleSheet.create({
    navContainer: {
        flex: 1
    },
    iconStyle: {
        marginRight: 5,
    },
    navItemStyle: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flexDirection: 'row',
        width: 260,
        padding: 10
    },
    menuText: {
        fontFamily: 'Poppins-ExtraLight',
    }
})

export default NavItems;
