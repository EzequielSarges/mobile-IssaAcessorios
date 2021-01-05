import React,{useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform ,ImageBackground, View, Image,Button, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../../assets/logoIsa.png'; 
import fundo from '../../../assets/fundoLogin.png'
import styles from './styles';
import Modal from 'react-native-modal';


export default function login(){

    const [nome, setNome] = useState('vazio')
    const [email, setEmail] = useState('vazio')
    const [cpf, setCpf] = useState('vazio')
    const [senha, setSenha] = useState('vazio')
    const [telefone, setTelefone] = useState('vazio')
    const [modalMudar, setModal] = useState(false)
    
    async function sendForm(){
        
        let response = await fetch('http://192.168.1.66:3333/cadastro',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                cpf: cpf,
                senha: senha,
                telefone: telefone
            })
        })
        let json = await response.json()
        if(json){
            console.log('foi')
            setModal(true)
        }

    }

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
                <Modal isVisible={modalMudar} animationIn={"slideInUp"}>
                    <View style={{backgroundColor:'#fff', height: 100 }}> 
                    <Text >CADASTRO EFETUADO COM SUCESSO!</Text>
                    <Button onPress={navigarToLogin} title="FAZER LOGIN"/ >
                    </View>
                </Modal>
                <View style={styles.form}>
                    <Text>Nome completo:</Text>
                    <TextInput style={styles.input}
                    placeholder="nome"
                    onChangeText={text=>setNome(text)}
                    />

                    <Text>Seu melhor e-mail:</Text>
                    <TextInput style={styles.input}
                    placeholder="e-mail"
                    onChangeText={text=>setEmail(text)}
                    />

                    <Text>Digite seu CPF:</Text>
                    <TextInput style={styles.input}
                    placeholder="cpf"
                    onChangeText={text=>setCpf(text)}
                    />
                    
                    <Text>escolha uma senha:</Text>
                    <TextInput style={styles.input}
                    placeholder="senha"
                    onChangeText={text=>setSenha(text)}
                    />

                    <Text>telefone:</Text>
                    <TextInput style={styles.input}
                    placeholder="fone"
                    onChangeText={text=>setTelefone(text)}
                    />
                    <TouchableOpacity onPress={()=>sendForm()} style={styles.button}>
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