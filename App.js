import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { creteDrawerNavigator} from '@react-navigate/drawer';
import 'react-native-gesture-handler';
import { Navigationcontainer } from '@react-navigation/native';

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
      <ImageBackground source={require('./assets/download.jpeg')} style={styles.image} >
      <View>
        <Text style={styles.texto}>Horóscopo Novotec</Text>
        <Button
          title='Peixes'
          color='navy'
          accessibilityLabel='Peixes'
          onPress={() => navigation.navigate('Horóscopo Peixes')}
        />
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ title: 'Horóscopo Novotec',headerStyle:{backgroundColor:'midnightblue',height:100},headerTintColor:'skyblue',headerTitleStyle:{fontWeight:'100',} }}>
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image:{
  justifyContent:'center',
  flex:1,
  width:'100%',
  }
});

export default App;