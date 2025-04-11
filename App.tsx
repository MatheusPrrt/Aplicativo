import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Loguin from './src/pages/login/index';
import CriarConta from './src/pages/register/CriarConta';
import Inicial from './src/pages/inicial/Inicial'
import Logo from '../../assets/logo.jpeg';

type RootStackParamList = {
  Loguin: undefined;
  CriarConta: undefined;
  Inicial: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Loguin">
          <Stack.Screen name="Loguin" component={Loguin} options={{ title: 'Login' }} />
          <Stack.Screen name="CriarConta" component={CriarConta} options={{ title: 'Criar Conta' }} />
          <Stack.Screen name="Inicial" component={Inicial} options={{ title: 'Inicial' }} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>




  );


















  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  },

  });