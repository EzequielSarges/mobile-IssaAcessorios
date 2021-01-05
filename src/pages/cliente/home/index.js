import React, {useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import api from '../../../services/api'

import iconLogin from '../../../assets/icons/iconLogin/login.png'; 
import iconSacola from '../../../assets/icons/iconSacola/sacola.png'; 
import iconFavorito from '../../../assets/icons/iconFavoritos/favoritos.png'; 
import iconPedidos from '../../../assets/icons/iconPedidos/pedido.png'; 

import lacoos from '../../../assets/lacos.jpg'; 
import imgherader from '../../../assets/fundoHeader.jpg';
import logoisa from '../../../assets/logoIsa.png'

export default function login(){
// variaveis usadas pelo arquivo

    const navigation = useNavigation();
    const [items, setItems] = useState([])

// funções para navegação
    function detalhesProduto(){
        navigation.navigate('detalhesProduto');
    }
    function navigarToPainel(){
        navigation.navigate('login');
    }
   
    return (
        <View style={styles.painel}> 
                <ImageBackground style={styles.header} source={imgherader}>
                    
                    <Image style={styles.logoIsa} source={logoisa}/>
                    <View style={{flexDirection:'row'}}> 
                        <TextInput placeholder='Buscar..' style={styles.textInput}/><TouchableOpacity><Ionicons name="md-search" size={29} color="#e02041" style={{marginLeft: 2}}/></TouchableOpacity>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={styles.cardCarousel}>
                            <Text style={styles.textCard}>LanÃ§amentos</Text>
                        <ScrollView horizontal={true} >
                            <View style={styles.bodyHome}>
                                <TouchableOpacity onPress={detalhesProduto} style={styles.cardHome}> 
                                    <Image style={styles.imgPedido} source={lacoos}/>
                                    <View style={styles.cardPedido}>
                                        <Text style={styles.tituloPedido}>LaÃ§o Rosa</Text>
                                        <Text style={styles.descricaoPedido}>R$ 32,15.</Text>
                                    </View>   
                                </TouchableOpacity>
                            </View>                                      
                        </ScrollView>
                    </View>
                </ScrollView>
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
                    <TouchableOpacity style={styles.carFooter} onPress={navigarToPainel}>
                        <Image style={{ width: 20, height: 20, marginTop: 5, marginBottom: 4}} source={iconLogin}/>
                        <Text style={styles.textFooter}>Login</Text>
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}