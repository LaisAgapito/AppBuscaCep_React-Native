import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import estilo from "../Estilo/estilo"
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import api from "../services/api";



export default props => {
    
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidde] = useState("");
    const [uf, setUf] = useState("");
    const image = {uri:  "https://cdn.dribbble.com/users/46302/screenshots/3895030/susu.png "};


    function limpaCampos(){
        setCep("")
        setLogradouro("")
        setBairro("")
        setLocalidde("")
        setUf("")
    }

    async function buscaCep(){
        if(cep == ""){
            Alert.alert("CEP inválido!")
            limpaCampos(); 
        }

        try{
            const response = await api.get(`/${cep}/json/`)
            if(!response.data.logradouro){
                Alert.alert("CEP não encontrado!")
                limpaCampos(); 
            }
            setLogradouro(response.data.logradouro)
            setBairro(response.data.bairro)
            setLocalidde(response.data.localidade)
            setUf(response.data.uf)
        }catch(error){
            console.log("ERRO" + error)
            Alert.alert("Formato inválido!")
                limpaCampos();
        }
    }
    return (
       
        <View style={estilo.container}>
            <StatusBar style="auto" />
        <ImageBackground source={image} resizeMode="cover"  style={estilo.imagem}>
        
        <View style={estilo.topBar}>
            <Text style={estilo.title}>
                Buscador de CEP
            </Text>

        </View>

        <View style={estilo.containerCep}>
        
            <TextInput style={estilo.inputCep}
             value={cep}
             onChangeText={(cep) => setCep(cep)}
             placeholder="Cep: ..."
            >
            </TextInput>
            <TouchableOpacity style={estilo.buttomBusca} onPress={buscaCep}>
                <Text style={estilo.textButtomBusca}>Buscar</Text>
            </TouchableOpacity>
           
        </View>
        <TextInput style={estilo.inputGeral}
             value={logradouro}
             onChangeText={(logradouro) => setLogradouro(logradouro)}
             placeholder="Rua: ..."
            >
            </TextInput>

            <TextInput style={estilo.inputGeral}
             value={bairro}
             onChangeText={(bairro) => setBairro(bairro)}
             placeholder="Bairro: ..."
            >
            </TextInput>

            <TextInput style={estilo.inputGeral}
             value={localidade}
             onChangeText={(localidade) => setLocalidde(localidade)}
             placeholder="Cidade: ..."
            >
            </TextInput>

            <View style={estilo.containerUF}>
            <TextInput style={estilo.inputUF}
             value={uf}
             onChangeText={(uf) => setUf(uf)}
             placeholder="UF: ..."
            >
            </TextInput>

            <TouchableOpacity style={estilo.buttomLimpa} onPress={limpaCampos}>
                <Text style={estilo.textButtomBusca}>Limpar</Text>
            </TouchableOpacity>

            </View>

          
        </ImageBackground>
    </View>
    
    )
    

    

}
   