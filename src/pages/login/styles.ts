import { Dimensions ,StyleSheet } from "react-native";
import { themas } from "../../assets/Global/themes";



export const style = StyleSheet.create({
container:{
    flex:1,
    alignItems : 'center',
    justifyContent : 'center',
    
    },
BoxTop:{ 
    height:Dimensions.get('window').height/3,
   
    width: '100%',
   
    alignItems: 'center',

     },
 BoxMid:{ //Campo responsável pelo meio da tela
    height:Dimensions.get('window').height/4,
    width: '100%',
    paddingHorizontal: 37,
    },
BoxBotton:{ //Campo responsável pela parte de baixo da tela

    height:Dimensions.get('window').height/3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
 },
logo:{ // Campo responsável pela logo
    width:80,
    height:80
},
text:{  // Campo Responsável pelo 'Texto = Bem - Vindo'

    fontWeight: 'bold',
    marginTop: 40,
    fontSize:18,
},
titleInput:{ //Campo responsável por mexer no css do 'E-mail'

    marginLeft:5,
    color:themas.colors.gray,
    marginTop:20,
},
senhaImput:{ //Campo responsável por mexer no css da 'SENHA'

    marginLeft:5,
    color:themas.colors.gray,
    marginTop:20,
},
boxImput:{ // Campo responsável pela caixa de Input do E-mail

    width:'100%',
    height:40,
    borderWidth:1,
    borderRadius:40,
    marginTop:10,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:5,
    backgroundColor:'white',
    borderColor:'black',


},
imput:{ // Responsável pelo CSS da caixa de Input da tela de login

height:'100%',
width:'90%',
backgroundColor: 'white',
borderRadius:40,
},
button:{
    width:200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:themas.colors.gray,
    borderRadius: 40,
},
TextBotton:{
    fontSize:16,
    color:'#FFFF',
    fontWeight:'bold',
},
NãoTemConta:{
    fontSize:16,
    color: 'blue', 



},
titleRegistro:{       // parte responsável pelos estilos da pagina Registro



















},
inputDigiteEmail:{












},
inputDigiteSenha:{





},
inputConfirmeSenha:{






},
buttonTextCriarConta:{



    
}






















})