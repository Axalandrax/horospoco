import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

function PeixesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texto}>Horóscopo 2023: Confira a previsão de hoje!</Text>
        <Button
          title='Peixes'
          color='navy'
          accessibilityLabel='Peixes'
          onPress={() => navigation.navigate('Horóscopo Peixes')}
        />
      </View>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texto}>Horóscopo Novotec</Text>
        <Button
          title='Peixes'
          color='navy'
          accessibilityLabel='Peixes'
          onPress={() => navigation.navigate('Horóscopo Peixes')}
        />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Horóscopo Novotec',headerStyle:{backgroundColor:'midnightblue',height:100},headerTintColor:'skyblue',headerTitleStyle:{fontWeight:'100',} }} />
        <Stack.Screen name='Horóscopo Peixes' component={PeixesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    margin: '5%',
    color: 'navy',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;