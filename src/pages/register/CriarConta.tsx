import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { style } from "../login/styles";
import Logo from '../../assets/logo.jpeg';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../assets/Global/themes";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  CriarConta: undefined;
  Inicial: undefined;
};

export default function CriarConta() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<"barbeiro" | "cliente" | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function handleRegister() {
    try {
      setLoading(true);

      if (!name || !email || !password || !confirmPassword || !selectedOption) {
        setLoading(false);
        return Alert.alert('Atenção', 'Preencha todos os campos obrigatórios');
      }

      if (password !== confirmPassword) {
        setLoading(false);
        return Alert.alert('Atenção', 'As senhas não coincidem');
      }

      setTimeout(() => {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        setLoading(false);
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      console.log('Erro ao registrar:', error);
      setLoading(false);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta');
    }
  }

  return (
    <View style={style.container}>
      <View style={style.BoxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Crie sua Conta</Text>
      </View>

      <View style={style.BoxMid}>
        {/* Novo campo Nome */}
        <Text style={style.titleInput}>NOME</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <MaterialIcons name="person" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <MaterialIcons name="email" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.senhaImput}>SENHA</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <MaterialIcons name="lock" size={20} color={themas.colors.gray} />
        </View>

        <Text style={style.senhaImput}>CONFIRMAR SENHA</Text>
        <View style={style.boxImput}>
          <TextInput
            style={style.imput}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <MaterialIcons name="lock" size={20} color={themas.colors.gray} />
        </View>

        {/* Opções de Perfil (Barbeiro ou Cliente) */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "black", padding: 15, width: 140, justifyContent: "flex-start" }}
            onPress={() => setSelectedOption("barbeiro")}
          >
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: "black", marginRight: 10, backgroundColor: selectedOption === "barbeiro" ? "black" : "white" }} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Barbeiro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", borderWidth: 2, borderColor: "black", padding: 15, width: 140, justifyContent: "flex-start" }}
            onPress={() => setSelectedOption("cliente")}
          >
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: "black", marginRight: 10, backgroundColor: selectedOption === "cliente" ? "black" : "white" }} />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[style.BoxBotton, { marginTop: 150 }]}>
        <TouchableOpacity style={[style.button, { marginTop: 5 }]} onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator color={"#FFFF"} size={"small"} />
          ) : (
            <Text style={style.TextBotton}>Registrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
