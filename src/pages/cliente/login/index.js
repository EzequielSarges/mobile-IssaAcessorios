import React from 'react';
import {KeyboardAvoidingView, Platform ,ImageBackground, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/logoIsa.png'; 
import fundo from '../../../assets/fundoLogin.png'
import styles from './styles';

export default function login(){
    const navigation = useNavigation();
    function navigarToCadastro(){
        navigation.navigate('cadastroCliente');
    }
    function navigarToPainel(){
        navigation.navigate('painel');
    }
    function navigarToHome(){
        navigation.navigate('home');
    }
    return (
        <KeyboardAvoidingView  enabled={ Platform.os=='ios'}behavior='padding' style={styles.container}>
            <ImageBackground style={styles.imgFundo} source={fundo}>
                <View style={styles.headerAdm}>
                    <TouchableOpacity onPress={navigarToPainel} >
                        <Text style={styles.textAdmin}>Adim</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Image style={styles.logoImg} source={logoImg}/>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                    placeholder="Seu e-mail"
                    />
                    <TextInput style={styles.input}
                    placeholder="Sua senha"
                    />
                    <TouchableOpacity onPress={navigarToHome} style={styles.button}>
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