import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // melakukan perulangan untuk membuat button aplikasi
    let rows = [];
    let nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, 0, '='],
    ];
    // diulang sebanyak 3 kali untuk column
    for (let i = 0; i < 4; i++) {
      let row = [];
      // diulang sebanyak 3 kali untuk row
      for (let j = 0; j < 3; j++) {
        // setiap perulangan push ke dalam array
        row.push(
          <TouchableOpacity style={styles.btn}>
            {/* menampilkan text */}
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      // melakukan push ke dalam array row
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let oprations = ['+', '-', '*', '/'];
    let ops = [];
    // diulang sebanyak 3 kali untuk column
    for (let i = 0; i < 4; i++) {
      // melakukan push ke dalam array row
      ops.push(
        <TouchableOpacity style={styles.btn}>
          {/* menampilkan text */}
          <Text style={[styles.btnText, styles.white]}>{oprations[i]}</Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  row: {
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 30,
  },
  white: {
    color: 'white',
  },
});

export default App;
