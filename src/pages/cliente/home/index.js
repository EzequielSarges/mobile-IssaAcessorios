import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import iconHome from '../../../assets/icons/iconHome/iconHome.png'; 
import iconSacola from '../../../assets/icons/iconSacola/sacola.png'; 
import iconFavorito from '../../../assets/icons/iconFavoritos/favoritos.png'; 
import iconPedidos from '../../../assets/icons/iconPedidos/pedido.png'; 

import lacoo from '../../../assets/lacoo.png'; 
import categoria from '../../../assets/tiara3.jpg'; 



export default function login(){

    const navigation = useNavigation();
   
    return (
        <View style={styles.painel}> 
            
                <View style={styles.header}>
                    <Image style={styles.iconHome} source={iconHome}/>
                </View>
                <View style={styles.subTitulo}>
                    <Text style={styles.textSubTitulo}>Home</Text>
                    <Text style={styles.textSubTitulo}>Lançamentos</Text>
                    <Text style={styles.textSubTitulo}>Populares</Text>
                </View>
                <View style={styles.areaCarousel}>
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
                </View>
                <ScrollView >
                    <View style={styles.bodyHome}>
                        <Ionicons name="md-heart-empty" size={23} color="#e02041" style={{marginLeft: 300}} />
                        <TouchableOpacity style={styles.cardHome}> 
                            <Image style={styles.imgPedido} source={lacoo}/>
                            <View style={styles.cardPedido}>
                                     <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.valorPedido}>Apenas R$: 55,50</Text>
                            </View>   
                        </TouchableOpacity>
                    </View>  
                    <View style={styles.bodyHome}>
                        <Ionicons name="md-heart" size={23} color="#e02041" style={{marginLeft: 300}} />
                        <TouchableOpacity style={styles.cardHome}> 
                            <Image style={styles.imgPedido} source={lacoo}/>
                            <View style={styles.cardPedido}>
                                     <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.valorPedido}>Apenas R$: 55,50</Text>
                            </View>   
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyHome}>
                        <Ionicons name="md-heart-empty" size={23} color="#e02041" style={{marginLeft: 300}} />
                        <TouchableOpacity style={styles.cardHome}> 
                            <Image style={styles.imgPedido} source={lacoo}/>
                            <View style={styles.cardPedido}>
                                     <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.valorPedido}>Apenas R$: 55,50</Text>
                            </View>   
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyHome}>
                        <Ionicons name="md-heart-empty" size={23} color="#e02041" style={{marginLeft: 300}} />
                        <TouchableOpacity style={styles.cardHome}> 
                            <Image style={styles.imgPedido} source={lacoo}/>
                            <View style={styles.cardPedido}>
                                     <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.valorPedido}>Apenas R$: 55,50</Text>
                            </View>   
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodyHome}>
                        <Ionicons name="md-heart-empty" size={23} color="#e02041" style={{marginLeft: 300}} />
                        <TouchableOpacity style={styles.cardHome}> 
                            <Image style={styles.imgPedido} source={lacoo}/>
                            <View style={styles.cardPedido}>
                                     <Text style={styles.tituloPedido}>Laço Rosa</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.descricaoPedido}>Laço rosa com detalhes verdes.</Text>
                                <Text style={styles.valorPedido}>Apenas R$: 55,50</Text>
                            </View>   
                        </TouchableOpacity>
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