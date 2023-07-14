import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    displayView: {
      height: '20%',
      width: '90%',
      marginBottom: 30,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: 'white',
    },
    display: {
      color: 'black',
      fontSize: 60,
      marginRight: 10,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 3,
    },
    button: {
      flex: 1,
      marginVertical: 2,
      marginHorizontal: 3,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      paddingVertical: 12,
    },
    buttonResult: {
      flex: 1,
      marginVertical: 2,
      marginHorizontal: 3,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      paddingVertical: 12,
    },
    buttonText: {
      fontSize: 30,
    },
  });