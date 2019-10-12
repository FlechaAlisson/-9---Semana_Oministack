import React, {useState, useEffect} from 'react'
import { SafeAreaView,ScrollView, Image,AsyncStorage, StyleSheet } from 'react-native'

import logo from '../assets/logo.png'
import Spotlist from '../components/Spotlist'

export default function List (){
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
           const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])

    return(
        <SafeAreaView  style = {styles.container}>
            <Image style = {styles.logo} source = {logo}/>
            <ScrollView>
                {techs.map(tech => <Spotlist key={tech} tech={tech} />)} 
            </ScrollView>
        </SafeAreaView>
    )
}
/**
 * para cada tech, vai ser jogado uma spotlist
 */

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    logo:{
        height: 32,
        resizeMode:"contain", /*faz com que a imagem fique contida dentro tamanho de 32*/ 
        alignSelf: "center",
        marginTop:25
    },
})