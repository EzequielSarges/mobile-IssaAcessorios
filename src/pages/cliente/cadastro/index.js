import React from 'react';
import {KeyboardAvoidingView, Platform ,ImageBackground, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/logoIsa.png'; 
import fundo from '../../../assets/fundoLogin.png'
import styles from './styles';

export default function login(){
    const navigation = useNavigation();
    function navigarToLogin(){
        navigation.navigate('login');
    }
    return (
        <KeyboardAvoidingView  enabled={ Platform.os=='ios'}behavior='padding' style={styles.container}>
            <ImageBackground style={styles.imgFundo} source={fundo}>
                <View style={styles.titulo}>
                    <Text style={styles.textTitulo}>
                        CADASTRO DE USÚARIO
                    </Text>
                </View>
                <View style={styles.form}>
                    <Text>Nome completo:</Text>
                    <TextInput style={styles.input}
                    placeholder="nome"
                    />
                    <Text>Digite seu CPF:</Text>
                    <TextInput style={styles.input}
                    placeholder="cpf"
                    />
                    <Text>Seu melhor e-mail:</Text>
                    <TextInput style={styles.input}
                    placeholder="e-mail"
                    />
                    <Text>escolha uma senha:</Text>
                    <TextInput style={styles.input}
                    placeholder="senha"
                    />
                    <TouchableOpacity onPress={navigarToLogin} style={styles.button}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cadastro}>
                    <TouchableOpacity onPress={navigarToLogin}>
                        <Text style={styles.textCad}>já possui cadastro?</Text>
                    </TouchableOpacity>
                </View>
          </ImageBackground>
        </KeyboardAvoidingView>
    )
    
}