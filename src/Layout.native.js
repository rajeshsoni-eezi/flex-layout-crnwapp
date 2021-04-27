import React, { useState } from 'react';
import {
    Text, View, SafeAreaView,
    ScrollView,
    StyleSheet,
} from 'react-native';
import styles from './Style';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const toggleSideMenu = () => {
        setShowSideDrawer(!showSideDrawer);
    };
    return (
        <SafeAreaView style={styles.scrollView}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    {showSideDrawer ? <Nav toggleSideMenu={toggleSideMenu} /> : null}
                    <View style={styles.col2}>
                        <Header toggleSideMenu={toggleSideMenu} />
                        {props.children}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Layout;
