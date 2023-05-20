import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayView: {
      marginBottom: 30,
    },
    display: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 24,
      backgroundColor: '#444444',
      borderWidth: 0,
      borderRadius: 10,
      width: 300,
      height: 50,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    button: {
      flex: 1,
      marginHorizontal: 6,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      paddingVertical: 12,
    },
    buttonText: {
      fontSize: 20,
    },
  });