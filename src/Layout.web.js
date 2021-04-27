import React from 'react';
import {
    Text, View, SafeAreaView,
    ScrollView,
} from 'react-native';
import styles from './Style';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Right from './Right';
const Layout = (props) => {
    return (

        <SafeAreaView style={styles.scrollView}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Nav />
                    <View style={styles.col2}>
                        <Header />
                        {props.children}
                        <Footer />
                    </View>
                    {/* <Right /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Layout;
