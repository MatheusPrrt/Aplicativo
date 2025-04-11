import { Dimensions ,StyleSheet } from "react-native";
import { themas } from "../../assets/Global/themes";



export const style = StyleSheet.create({


        container: {
          flex: 1,
        },
        BoxTop: {
          width: "100%",
          height: 90, // Altura da barra laranja
          backgroundColor: "orange",
          justifyContent: "center", // Centraliza o texto verticalmente
          paddingLeft: 10, // Move o texto um pouco para a esquerda
        },
        text: {
          color: "black",
          fontSize: 20,
         },
         buttonsContainer: {
            marginTop: 150,
            width: "90%",
            justifyContent: "center", 
            paddingLeft: 50,
         },
         button: {
            borderWidth: 3,
            borderColor: "black",
            padding: 20,
            marginVertical: 25,
            alignItems: "center",
            borderRadius: 100,
            backgroundColor:"white",
          },
          buttonText: {
            fontSize: 16,
            color: "black",
            textAlign: "center",
          },
        BoxMid:{



        },
        BoxLow:{



        },


























})