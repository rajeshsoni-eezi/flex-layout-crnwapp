import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Platform,
  } from 'react-native';
export default StyleSheet.create({
    scrollView: {
      width: '100%',
      flex: 1,
    },
    col1: {
      padding: 10,
      backgroundColor: '#D7E8D4',
      flex: 1,
    },
    col2: {
      flexDirection: 'column',
      flex: 6,
    },

    container: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    mainContent: {
      padding: 10,
      // flex: 1,
      // flexDirection: 'row',
    },
    article: {
      // flex: 3,
      minHeight: 60,
    },
    card: {
      borderWidth: 1,
      borderColor: '#d4d4d4',
      elevation: 5,
      borderRadius: 5,
      padding: 5,
      margin: 5,
      shadowOffset: {width: 0, height: 0.5},
      shadowColor: '#CCC'
    },
    cardHeader: {
      borderBottomWidth: 1,
      borderColor: '#d4d4d4',
    },
    cardHeaderText: {
      marginVertical: 2,
      fontSize: 16,
      fontWeight: 'bold',
    },
    bodyText:{
      fontFamily:'Poppins-ExtraLight',
      color:'#000000'
    },
    header: {
      backgroundColor: 'yellowgreen',
      height: 100,
      padding: 10,
    },
    footer: {
      backgroundColor: 'yellowgreen',
      height: 50,
      padding: 10,
    },
  });