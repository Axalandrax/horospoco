import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Peixes() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texto1}>Peixes - (19/02 a 20/03)</Text>
        <Text style={styles.texto2}>Texto</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto1: {
    fontSize: 20,
    margin: '5%',
    color: 'navy',
    paddingTop: '2%',
  },
  texto2: {
    fontSize: 14,
    margin: '1%',
    textAlign: 'center',
    paddingTop: '2%',
  },
});

export default Peixes;