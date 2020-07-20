import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';



import imgherader from '../../../assets/fundoHeader.jpg';
import imgProduto from '../../../assets/lacos.jpg'; 

import styles from './styles';

export default function detalhes(){
    const navigation = useNavigation();
    function home(){
        navigation.navigate('home');
    }

    //this.state = {       
      //  images: [         
        //"https://source.unsplash.com/1024x768/?nature",
        //"https://source.unsplash.com/1024x768/?water",
        //"https://source.unsplash.com/1024x768/?girl",
        //"https://source.unsplash.com/1024x768/?tree",
         // Network image         require('./assets/images/girl.jpg'),          // Local image       
        //]     
        //};   
    return (
        <View style={styles.detalhes}>
            <ImageBackground style={styles.headerDetalhes} source={imgherader}>
                <Ionicons onPress={home} name="ios-arrow-back" size={29} color="#e02041" style={{marginLeft: 2}}/>
                   <Text style={styles.tituloDetalhe}>Detalhes</Text>
                <Ionicons name="ios-heart-empty" size={29} color="#e02041" style={{marginLeft: 2}}/>
            </ImageBackground>
            <View style={styles.cardDetalhes}> 
                <ScrollView horizontal={true} style={styles.carrosel} >
                    <Image style={styles.imgProduto} source={imgProduto}/> 
                    <Image style={styles.imgProduto} source={imgProduto}/> 
                    <Image style={styles.imgProduto} source={imgProduto}/> 
                </ScrollView>             
                <Text style={styles.nomeProduto}>Laço Rosa</Text>
                <Text style={styles.precoProduto}>R$:25.50</Text>
            </View> 
            
            
              
        </View>
    )
}