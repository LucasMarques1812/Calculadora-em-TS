import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value: string) => {
    setDisplayValue(prevValue => {
      if (prevValue === '0') {
        return value;
      } else {
        return prevValue + value;
      }
    });
  };

  console.log(displayValue)

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleMultiplication = () => {}

  const handleBackspace = () => {
    const newNumber = displayValue.slice(0, -1);
    setDisplayValue(newNumber)
  }

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <View style={styles.container}>

      <View style={styles.displayView}>
        <Text style={styles.display}>{displayValue}</Text>
      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('dude put the nike logo on a number and expects me to answer it')}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(',')}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackspace}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonResult} onPress={handleCalculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        
        
      </View>

    </View>
  );
};

export default Calculator;