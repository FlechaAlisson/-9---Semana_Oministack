import React, {useState} from 'react'
import { Text, AsyncStorage,StyleSheet,TextInput,Alert, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import api from '../services/api'


export default function Book({ navigation }){ 
    const [date, setDate] = useState('')
    const id = navigation.getParam('id')

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user')
        
        await api.post(`/spots/${id}/bookings`,{
            date
        }, {
            headers: { user_id }
        })

        Alert.alert('Solicitação de reserva enviada.')
        navigation.navigate('List')
        
    }
    function handleCancel() {
        navigation.navigate('List')
    }
    
    
    return(
        <SafeAreaView style= {styles.container}>
            <Text style={styles.label} > Data de interesse *</Text>
            <TextInput style={styles.input}
                placeholder="Qual data voce quer reservar?"
                placeholderTextColor="#9999"
                keyboardType="email-address"
                autoCapitalize= "none" //nao vai deixar em GRANDE
                autoCorrect= {false}               //nao vai tentar corrigir
                value = {date}
                onChangeText = {setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttontext}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={styles.buttonCancel}>
                <Text style={styles.buttontext}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        margin:30
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginTop: 20,
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
    },
    buttonCancel:{
        height: 42,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 2,
        marginTop:10
    }
})