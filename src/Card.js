import React from 'react';
import { Text, View } from 'react-native';
import styles from './Style';
const Card = (props) => (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={[styles.cardHeaderText, styles.bodyText]}>CardTitle#{(props.i+1)}</Text>
        </View>
        <Text style={styles.bodyText}>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a</Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={styles.bodyText}>Ornare aenean euismod elementum nisi quis eleifend quam</Text>
        <Text style={styles.bodyText}>Imperdiet massa tincidunt</Text>
    </View>
);

export default Card;
