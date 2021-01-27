import React, {useState, useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import api from '../../../services/api'

import iconLogin from '../../../assets/icons/iconLogin/login.png'; 
import iconSacola from '../../../assets/icons/iconSacola/sacola.png'; 
import iconFavorito from '../../../assets/icons/iconFavoritos/favoritos.png'; 
import iconPedidos from '../../../assets/icons/iconPedidos/pedido.png';

import iconCategorias from '../../../assets/icons/categorias.png'
import lacoos from '../../../assets/lacos.jpg'; 
import imgherader from '../../../assets/fundoHeader.jpg';
import logoisa from '../../../assets/logoIsa.png'

export default function login(){
// variaveis usadas pelo arquivo

    const navigation = useNavigation();
    const [items, setItems] = useState([])

    useEffect(()=>{
        async function listarItens(){
            let response = await fetch('http://192.168.1.66:3333/produto',{
                method: 'GET',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
             })
            let json = await response.json()
            setItems(json)
            console.log(items)
        }

        listarItens()
        
    },[])

// funções para navegação
    function detalhesProduto(){
        navigation.navigate('detalhesProduto');
    }
    function navigarToPainel(){
        navigation.navigate('login');
    }
    function navigarToPerfil(){
        navigation.navigate('perfil');
    }
   
    return (
        
        <View style={styles.painel}> 
            <ImageBackground style={styles.header} source={imgherader}> 
                <Image style={styles.logoIsa} source={logoisa}/>
                <View style={{flexDirection:'row'}}> 
                    <TextInput placeholder='Buscar..' style={styles.textInput}/><TouchableOpacity><AntDesign name="search1" size={24} color="black" /></TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.cardCategorias}>
                <View style={styles.corpoCategorias}>
                    <Text style={styles.tituloCategorias}>Categorias</Text>
                </View>
                <View style={styles.corpoCategorias}>
                    <Text style={styles.tituloCategorias}>Categorias</Text>
                </View>
            </View>
            <FlatList
                data={items}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => {
                    return(
                         <View style={styles.bodyHome}>
                             <TouchableOpacity onPress={detalhesProduto} style={styles.cardHome}> 
                                 <Image style={styles.imgPedido} source={lacoos}/>
                                 <View style={styles.cardPedido}>
                                    <Text style={styles.tituloPedido}>{item.nome}</Text>
                                    <Text style={styles.tituloEstoque}>Estoque disponível</Text>
                                    <Text style={styles.tituloPreco}>R$: {item.preco}</Text>
                                    <Text >
                                        <Text style={{color:'#808080', fontSize:11}}>Até </Text>
                                        <Text style={{color:'#363636',fontWeight:'bold',fontSize:11}}>2X </Text>
                                        <Text style={{color:'#808080',fontSize:11}}>de </Text>
                                        <Text style={{color:'#363636',fontWeight:'bold',fontSize:11}}>R$: </Text>
                                        <Text style={{color:'#808080',fontSize:11}}> sem juros</Text>
                                    </Text>
                                 </View>   
                             </TouchableOpacity>
                         </View>             
                    )
                }} 
            />
            <View style={styles.footer}>
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={{ width: 18, height: 21, marginTop: 5, marginBottom: 4}} source={iconPedidos}/>
                        <Text style={styles.textFooter}>Pedidos</Text>
                    </TouchableOpacity>
             
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={{ width: 21, height: 21, marginTop: 5, marginBottom: 4}} source={iconFavorito}/>
                        <Text style={styles.textFooter}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={{ width: 20, height: 22, marginTop: 5, marginBottom: 4}} source={iconSacola}/>
                        <Text style={styles.textFooter}>Sacola</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.carFooter} onPress={navigarToPerfil}>
                        <Image style={{ width: 20, height: 20, marginTop: 5, marginBottom: 4}} source={iconLogin}/>
                        <Text style={styles.textFooter}>Perfil</Text>
                    </TouchableOpacity>
            </View>
        </View>
        
        
    )
}