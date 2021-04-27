import React from 'react';
import {
  Text,
  View,StyleSheet,Platform,ScrollView
} from 'react-native';
import mainStyles from './Style'
import Layout from './Layout'
import Card from './Card'
const App = () => {
  return (
    <Layout>
      <View style={mainStyles.mainContent}>
        <View style={mainStyles.article}>
          <Text style={mainStyles.bodyText}>Content</Text>
          <ScrollView
          // style={mainStyles.scrollView}
          >
          <View style={{
            flexDirection: 'row',
            // borderWidth: 2,
            flexWrap: 'wrap',
            alignItems:'flex-start',
            justifyContent:'center',
            alignContent:'flex-start'
          }}>
            <View style={styles.cardContainer}>
              <Card i={0} />
            </View>
            <View style={styles.cardContainer}>
              <Card i={1} />
            </View>
            <View style={styles.cardContainer}>
              <Card i={2} />
            </View>
            <View style={styles.cardContainer}>
              <Card i={3} />
            </View>
            <View style={styles.cardContainer}>
              <Card i={4} />
            </View>
            <View style={styles.cardContainer}>
              <Card i={5} />
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  cardContainer:{
    
    width: 350
  }
})
export default App;
