import { SafeAreaView, StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//criando a página inicial
function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={{uri: 'https://conteudo.imguol.com.br/c/noticias/d8/2020/07/17/signos-horoscopo-zodiaco-1595008408355_v2_3x4.jpg'}} resizeMode="cover" style={styles.image}>

      <View>
      <Text style={styles.texto}>
      Horóscopo 2023: confira a previsão de hoje! </Text>
      
      <Text> {'\n'}</Text>

      <Button
        title='Peixes' color='#00008bc0' accessibilityLabel='Peixes'
        onPress={() => navigation.navigate('Horóscopo Peixes')}
      />
      </View>
    </ImageBackground>
    </SafeAreaView> 
  );
}

function Peixes () {
  return (
    <SafeAreaView style={styles.container}>

    <View>

      <Text style={styles.texto1}> Peixes - 20/02 - 20/03 </Text>
      <Text style={styles.texto2}>  
      Reuniões de hoje poderão resultar em mais trabalho e soluções financeiras. 
      Espere por empatia e delicadeza nas conexões e interações de hoje. 
      O dia favorecerá concretizações, início de parcerias e de novas atividades. 
      Valerá também investir nos estudos, aprender outro idioma ou ficar por dentro de 
      novas ferramentas tecnológicas e acelerar sua produção. Organize a casa.      
      </Text>

    </View>

  </SafeAreaView>
  );
}


//Navegação
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation
        screenOptions={{ 
        headerStyle: {backgroundColor: 'midnightblue', height:50},
        headerTintColor: 'skyblue',
        headerTitleStyle: {fontWeight: '100'}
        }}>

      <Drawer.Screen 
        name="Home" component={HomeScreen}  options={{title: 'Home'}}/>

      <Drawer.Screen name="Horóscopo Peixes" component={Peixes} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

//Estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

    image: {
    flex: 1,
    justifyContent: 'center',
  },

  texto:{
    color: '#ffffff',
    fontSize: '200%',
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:'#000000c0',
  },

  texto1:{
    fontSize: '200%',
    margin: '5%',
    color: 'navy',
    paddingTop:'2%'
  },

  texto2:{
    fontSize: '100%',
    margin: '1%',
    textAlign: 'center',
    marginTop: '5%'
  }

});