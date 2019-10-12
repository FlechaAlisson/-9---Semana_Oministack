import React, {useState, useEffect} from 'react'
import { View,KeyboardAvoidingView,AsyncStorage, Image, StyleSheet,TextInput, Text, TouchableOpacity } from 'react-native'

import api from '../services/api'
import logo from '../assets/logo.png'



export default function Login({navigation}){ 
    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() =>{
        AsyncStorage.getItem('user').then(user =>{ //checa se o usuario ta logado
            navigation.navigate('List')            //se tiver, manda ja pra tela de list
        } )
    }, [])

    async function handleSubmit(){
        const response = await api.post('/sessions',{
            email
        })
        const {_id} = response.data;
    
        await AsyncStorage.setItem('user',_id) //salva os dados
        await AsyncStorage.setItem('techs',techs)
        navigation.navigate('List')
    }
    return(
        <KeyboardAvoidingView  behavior= "padding" style={styles.container}>
            <Image source={logo}/> 
            <View style={styles.form}>
                <Text style={styles.label}>Seu E-mail *</Text>
                <TextInput style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#9999"
                    keyboardType="email-address"
                    autoCapitalize= "none" //nao vai deixar em GRANDE
                    autoCorrect= {false}               //nao vai tentar corrigir
                    value = {email}
                    onChangeText = {setEmail}
                />

                <Text style={styles.label}>Tecnologias *</Text>
                <TextInput style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#9999"
                    autoCapitalize= "words" //nao vai deixar em GRANDE
                    autoCorrect= {false}               //nao vai tentar corrigir
                    value = {techs}
                    onChangeText = {setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttontext}>Encontrar spots</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent: 'center',  /*essas duas linhas deixam o logo no centro */
            alignItems: 'center',      /* essas duas linhas deixam o logo no centro*/
        },
        label:{
            fontWeight: 'bold',
            color: '#444',
            marginTop: 8,
        },
        form:{
            alignSelf: 'stretch', /*ocupar a largura inteira do container*/ 
            paddingHorizontal: 30,
            marginTop:30
        },
        input:{
            borderWidth: 1,
            borderColor: '#ddd',
            paddingHorizontal: 20,
            fontSize: 16,
            color: '#444',
            height: 44,
            marginBottom: 20,
            borderRadius: 2,
        },
        button: {
            height: 42,
            backgroundColor: '#f05a5b',
            justifyContent: 'center',
            alignItems:'center',
            borderRadius: 2
        },

        buttontext:{
            color: "#fff",
            fontSize: 16,
            fontWeight: 'bold'
        }
    }


)