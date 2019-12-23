import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Converter from './src/components/Converter';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header textProps={'Döviz Kuru Hesaplama'} />
        <Converter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
