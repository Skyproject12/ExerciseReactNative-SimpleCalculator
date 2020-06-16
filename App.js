/* eslint-disable no-eval */
/* eslint-disable curly */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.oprations = ['DEL', '+', '-', '*', '/'];
  }

  state = {
    resultText: '',
    calculateText: '',
  };

  buttonPressed(text) {
    if (text === '=') {
      // checking apakah sesuai validasi jika ya return true
      return this.validate() && this.calculateResult();
    }
    // mengambil value yang diinputkan ketika onPress
    this.setState({
      resultText: this.state.resultText + text,
    });
  }

  validate() {
    const text = this.state.resultText;
    // mengambil value dari suatu string berdasarkan index -1
    // mengambil nilai terakhir jika itu index -1
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        // berarti setiap case memiliki return false
        return false;
    }
    return true;
  }

  calculateResult() {
    const text = this.state.resultText;
    // eval digunakan untuk melakukan operation dari suatu string baik itu tambah kali dll
    this.setState({
      calculateText: eval(text),
    });
  }

  operation(text) {
    switch (text) {
      case 'DEL':
        const textResult = this.state.resultText.split('');
        textResult.pop();
        // menghapus abjad terakhir dari suatu string
        // lalu set resutlt text lagi
        this.setState({
          resultText: textResult.join(''),
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        // .split('').pop() -> untuk mengambil last karakter
        const lastChar = this.state.resultText.split('').pop();
        // jika last karakter lebih dari 0 atau operaion sama maka jalan jalankan operation
        if (this.oprations.indexOf(lastChar) > 0) return;
        if (this.state.resultText === '') return;
        // setiap menambah operation set result text
        this.setState({
          resultText: this.state.resultText + text,
        });
    }
  }

  render() {
    // melakukan perulangan untuk membuat button aplikasi
    let rows = [];
    let nums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['.', 0, '='],
    ];
    // diulang sebanyak 3 kali untuk column
    for (let i = 0; i < 4; i++) {
      let row = [];
      // diulang sebanyak 3 kali untuk row
      for (let j = 0; j < 3; j++) {
        // setiap perulangan push ke dalam array
        row.push(
          <TouchableOpacity
            key={nums[i][j]}
            onPress={() => this.buttonPressed(nums[i][j])}
            style={styles.btn}>
            {/* menampilkan text */}
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      // melakukan push ke dalam array row
      rows.push(
        <View key={i} style={styles.row}>
          {row}
        </View>,
      );
    }

    let ops = [];
    // diulang sebanyak 3 kali untuk column
    for (let i = 0; i < 5; i++) {
      // melakukan push ke dalam array row
      ops.push(
        <TouchableOpacity
          key={this.oprations[i]}
          onPress={() => this.operation(this.oprations[i])}
          style={styles.btn}>
          {/* menampilkan text */}
          <Text style={styles.btnOperation}>{this.oprations[i]}</Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculateText}</Text>
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
    backgroundColor: '#434343',
    color: 'white',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculationText: {
    fontSize: 24,
    color: 'black',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 30,
    color: 'black',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 30,
    color: 'white',
  },
  btnOperation: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;
