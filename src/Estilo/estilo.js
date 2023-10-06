import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container:{
    flex: 1,
    flexDirection: 'column'
    
   },
   containerCep:{
   flexDirection: 'row',
   height: 100,
   marginHorizontal: 20,
   marginVertical: 30
   },
   topBar:{
      
      flexDirection: 'row',
      height: 70,
      backgroundColor: '#9400D3'
   },
   title:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 20,
      marginTop: 30

   },
   textPrincipal:{
    fontSize: 30,

   }, 
   imagemBackground:
   {
    flex: 1,
    justifyContent: 'center'
   },
   inputCep:{
    backgroundColor: '#E6E6FA',
    borderColor: '#000',
    borderRadius: 15,
    borderWidth: 2,
    width: 200,
    fontSize: 18,
    marginTop:50,
    marginEnd: 20,
    padding: 10, 
    height: 50

   }, 
   inputUF:{
      backgroundColor: '#E6E6FA',
      borderColor: '#000',
      borderRadius: 15,
      borderWidth: 2,
      width: 80,
      fontSize: 18,
      marginTop:20,
      marginEnd: 20,
      marginStart: 20,
      padding: 10, 
      height: 50,
      justifyContent: 'center',
  
     }, 
   inputGeral:{
      backgroundColor: '#E6E6FA',
      borderColor: '#000',
      borderRadius: 15,
      borderWidth: 2,
      width: 300,
      fontSize: 18,
      marginTop:20,
      marginEnd: 20,
      marginStart: 20,
      padding: 10, 
      height: 50,
      justifyContent: 'center',
   },
   buttomBusca: {
      backgroundColor: '#9400D3',
      width: 100,
      height: 70,
      marginTop: 50,
      marginEnd: 20,
      borderRadius: 15,
      padding: 12,
      height: 50
   },
   buttomLimpa: {
      backgroundColor: '#EE82EE',
      width: 180,
      borderRadius: 15,
      padding: 12,
      height: 45,
      marginTop:20,
      marginEnd: 20,
      marginStart: 10,
   },
   textButtomBusca: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center'
   },
   imagem: {
      flex: 1,
     
   },

   containerUF:{
      flexDirection: 'row',
      height: 100,

      
      },
})