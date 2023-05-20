import React from 'react';
import { View, StyleSheet } from 'react-native';
import Calculator from './src/screens/Home';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04003f',
  },
});

export default App;