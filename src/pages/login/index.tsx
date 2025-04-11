import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { style } from "../login/styles"; // Importe os estilos
import Logo from '../../assets/logo.jpeg';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../assets/Global/themes";
import { useNavigation } from '@react-navigation/native';  // Hook de navegação
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    CriarConta: undefined;
    Inicial: undefined; // Add the 'Inicial' route
};

export default function Loguin() {
  const [email, setEmail] = useState<string>(''); // Tipo do estado email
  const [password, setPassword] = useState<string>(''); // Tipo do estado password
  const [loading, setLoading] = useState<boolean>(false); // Tipo do estado loading

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function getLoguin() {
    try {
      setLoading(true);

      if (!email || !password) {
        setLoading(false);
        return Alert.alert('Atenção', 'Informe os Campos Obrigatórios');
      }

      setTimeout(() => {
        Alert.alert('Logado com sucesso');
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log('error');
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.BoxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem Vindo</Text>
      </View>
      <View style={style.BoxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <MaterialIcons name="email" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.senhaImput}>SENHA</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
          />
          <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        <Text style={style.NãoTemConta}>Não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CriarConta')}>
          <Text style={{ color: 'blue', marginLeft: 5 }}>Crie uma aqui!</Text>
        </TouchableOpacity>
      </View>
      <View style={style.BoxBotton}>
      <TouchableOpacity onPress={() => navigation.navigate('Inicial')}>
            <Text style={style.TextBotton}>Entrar</Text>
         
        </TouchableOpacity>
      </View>
    </View>
  );
}
