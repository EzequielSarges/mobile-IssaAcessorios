import React from 'react';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import iconHome from '../../../assets/icons/iconHome/iconHome.png'; 
import iconSacola from '../../../assets/icons/iconSacola/sacola.png'; 
import iconFavorito from '../../../assets/icons/iconFavoritos/favoritos.png'; 
import iconPedidos from '../../../assets/icons/iconPedidos/pedido.png'; 



export default function login(){

    const navigation = useNavigation();
   
    return (
        <View style={styles.painel}> 
            <ScrollView >
                <View style={styles.header}>
                <Image style={styles.iconHome} source={iconHome}/>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.carFooter}>
                    <Image style={styles.iconFooter} source={iconPedidos}/>
                    <Text style={styles.textFooter}>Pedidos</Text>
                </View>
                <View style={styles.carFooter}>
                    <Image style={{ width: 28, height: 26, marginTop: 5, marginBottom: 4}} source={iconFavorito}/>
                    <Text style={styles.textFooter}>Favoritos</Text>
                </View>
                <View style={styles.carFooter}>
                    <Image style={styles.iconFooter} source={iconSacola}/>
                    <Text style={styles.textFooter}>Sacola</Text>
                </View>
                <View style={styles.carFooter}>
                    <Image style={styles.iconFooter} source={iconHome}/>
                    <Text style={styles.textFooter}>Home</Text>
                </View>
            </View>
        </View>
        
    )
}