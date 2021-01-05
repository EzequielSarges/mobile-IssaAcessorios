import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'; 
import {KeyboardAvoidingView, Platform ,ImageBackground, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/logoIsa.png'; 
import fundo from '../../../assets/fundoLogin.png'
import styles from './styles';

export default function login(){

    const [email, setEmail] = useState('teste')
    const [senha, setSenha] = useState('teste')
    const [alerta, setAlerta] = useState('none')
    const navigation = useNavigation();

    async function loginForm(){
        let response = await fetch('http://192.168.1.66:3333/login',{
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                })
            })
            let json = await response.json()
            //verifica e exibi mensagem de usuario não encontrado
            if(json.error){
                setAlerta("flex")
                setTimeout(()=>{
                    setAlerta("none")
                },3000)
                await AsyncStorage.clear()
            }
            else{
                 await AsyncStorage.setItem('useData',JSON.stringify(json.id))
                 const useData = await AsyncStorage.getItem('useData')
                 console.log(JSON.parse(useData))
                 navigarToHome()
            }
    }

    function navigarToCadastro(){
        navigation.navigate('cadastroCliente');
    }
    function navigarToHome(){
        navigation.navigate('home');
    }
   
    return (
        <KeyboardAvoidingView  enabled={ Platform.os=='ios'}behavior='padding' style={styles.container}>
            <ImageBackground style={styles.imgFundo} source={fundo}>
                <View style={styles.header}>
                    <Image style={styles.logoImg} source={logoImg}/>
                </View>
                <Text style={{display:alerta, backgroundColor: '#f05a5b', color:"#fff" }}>Usuario não encontrado</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                    placeholder="Seu e-mail"
                    onChangeText={text => setEmail(text)}
                    />
                    <TextInput style={styles.input}
                    placeholder="Sua senha"
                    onChangeText={text => setSenha(text)}
                    />
                    <TouchableOpacity onPress={()=>loginForm()} style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cadastro}>
                    <TouchableOpacity onPress={navigarToCadastro} >
                        <Text style={styles.textCad}>cadastra-se</Text>
                    </TouchableOpacity>
                </View>
          </ImageBackground>
        </KeyboardAvoidingView>
    )
    
}