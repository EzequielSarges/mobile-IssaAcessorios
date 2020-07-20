import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import iconHome from '../../../assets/icons/iconHome/iconHome.png'; 
import iconSacola from '../../../assets/icons/iconSacola/sacola.png'; 
import iconFavorito from '../../../assets/icons/iconFavoritos/favoritos.png'; 
import iconPedidos from '../../../assets/icons/iconPedidos/pedido.png'; 

import lacoos from '../../../assets/lacos.jpg'; 
import imgherader from '../../../assets/fundoHeader.jpg';
import logoisa from '../../../assets/logoIsa.png'



export default function login(){

    const navigation = useNavigation();
    function detalhesProduto(){
        navigation.navigate('detalhesProduto');
    }
   
    return (
        <View style={styles.painel}> 
                <ImageBackground style={styles.header} source={imgherader}>
                    <Image style={styles.logoIsa} source={logoisa}/>
                    <View style={{flexDirection:'row'}}> 
                        <TextInput placeholder='Buscar..' style={styles.textInput}/><TouchableOpacity><Ionicons name="md-search" size={29} color="#e02041" style={{marginLeft: 2}}/></TouchableOpacity>
                    </View>
                </ImageBackground>
                {/*<View style={styles.areaCarousel}>
                    <Text style={{fontSize:15, color:'#6A5ACD'}}>Categorias</Text>
                    <ScrollView horizontal={true} >
                        <View style={styles.cardCarousel}>
                            <Image style={styles.imgCarousel} source={categoria}/>
                            <Text>Tiaras</Text>
                        </View>
                        <View style={styles.cardCarousel}>
                            <Image style={styles.imgCarousel} source={categoria}/>
                            <Text>Tiaras</Text>
                        </View>
                        <View style={styles.cardCarousel}>
                            <Image style={styles.imgCarousel} source={categoria}/>
                            <Text>Tiaras</Text>
                        </View>
                        <View style={styles.cardCarousel}>
                            <Image style={styles.imgCarousel} source={categoria}/>
                            <Text>Tiaras</Text>
                        </View>
                        <View style={styles.cardCarousel}>
                            <Image style={styles.imgCarousel} source={categoria}/>
                            <Text>Tiaras</Text>
                        </View>
                        
                    </ScrollView>
                </View>*/}
                <ScrollView>
                    <View style={styles.cardCarousel}>
                            <Text style={styles.textCard}>Lançamentos</Text>
                        <ScrollView horizontal={true} >
                            <View style={styles.bodyHome}>
                                <TouchableOpacity style={styles.cardHome}> 
                                    <Image style={styles.imgPedido} source={lacoos}/>
                                    <View style={styles.cardPedido}>
                                        <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                        <Ionicons name="md-heart-empty" size={23} color="#e02041" style={{marginLeft: 5}} />
                                        <Text style={styles.descricaoPedido}>R$ 32,15.</Text>
                                        <Text onPress={detalhesProduto} style={styles.descricaoPedido}>Detalhes</Text>
                                        <Text style={styles.valorPedido}>Comprar</Text>
                                    </View>   
                                </TouchableOpacity>
                            </View>                                      
                        </ScrollView>
                    </View>
                </ScrollView>
            <View style={styles.footer}>
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={styles.iconFooter} source={iconPedidos}/>
                        <Text style={styles.textFooter}>Pedidos</Text>
                    </TouchableOpacity>
             
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={{ width: 28, height: 26, marginTop: 5, marginBottom: 4}} source={iconFavorito}/>
                        <Text style={styles.textFooter}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.carFooter}>
                        <Image style={styles.iconFooter} source={iconSacola}/>
                        <Text style={styles.textFooter}>Sacola</Text>
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.carFooter}>
                        <Image style={styles.iconFooter} source={iconHome}/>
                        <Text style={styles.textFooter}>Home</Text>
                    </TouchableOpacity>
            </View>
        </View>
        
    )
}