import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';
import Teste from './src/pages/teste/teste';
import LoginScreen from './src/pages/teste/testeLogin';
import TesteAlert from './src/pages/receitas/formularioReceitas';

export default function App() {
  return (
    // <View style={styles.container}>
    //    <Text>Open up App.js to start working on your app!</Text>
      
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    // <Teste />
    // <LoginScreen />
    // <TesteAlert/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
