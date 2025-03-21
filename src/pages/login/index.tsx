import React from "react";

import {Text, View , Image, TextInput} from 'react-native';

import { style } from "../login/styles";
import Logo from '../../assets/logo.jpeg'
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../assets/Global/themes";

export default function Loguin (){
return(

    <View style={style.container}>

    <View style={style.BoxTop}>
    <Image
      source={Logo}
      style={style.logo}
      resizeMode="contain"
   
   />
    <Text style={style.text}>Bem Vindo </Text>
    </View>
    <View style={style.BoxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.boxImput}>
            
            <TextInput
                style={style.imput}            
            />   
           <MaterialIcons  //Biblioteca responsável pelo ícone do campo de e-mail
           name='email'
           size={20}
           color={themas.colors.gray}
           />

        </View>
        
        <Text style={style.senhaImput}>SENHA</Text> 
        <View style={style.boxImput}> 
            
            <TextInput
                style={style.imput}            
            />   
           <MaterialIcons  //Biblioteca responsável pelo ícone do campo da senha
           name='remove-red-eye'
           size={20}
           color={themas.colors.gray}
           />

        </View>
    </View>
    <View style={style.BoxBotton}>


    </View>


    </View>




)

}