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
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
     },
 BoxMid:{
    height:Dimensions.get('window').height/4,
    width: '100%',
   // backgroundColor: 'green',
paddingHorizontal: 37
    },
BoxBotton:{

    height:Dimensions.get('window').height/3,
    width: '100%',
    backgroundColor: 'blue'
 },
logo:{
    width:80,
    height:80
},
text:{

    fontWeight: 'bold',
    marginTop: 40,
    fontSize:18,
},
titleInput:{

    marginLeft:5,
    color:themas.colors.gray,
    marginTop:20,
},
senhaImput:{

    marginLeft:5,
    color:themas.colors.gray,
    marginTop:20,
},
boxImput:{

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
imput:{

height:'100%',
width:'90%',
backgroundColor: 'white',
borderRadius:40,



}











})