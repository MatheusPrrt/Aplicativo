import React from "react";
import { Text, View, TouchableOpacity, StyleSheet  , Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { style } from './styles'
type RootStackParamList = {
  CriarConta: undefined;
  Login: undefined;
};

export default function Inicial() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openLink = () => {
    Linking.openURL("https://www.google.com"); // Altere para o link desejado
  };

  return (
    <View style={style.container}>
      
      <View style={style.BoxTop}>
        <Text style={style.text}>Bem vindo ...</Text>
      </View>

 
      <View style={style.buttonsContainer}>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Corte e Limpeza de Pele</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Localização e Horário de Funcionamento</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}