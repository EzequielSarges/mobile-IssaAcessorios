import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,TextInput,TouchableOpacity, Text, ImageBackground, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; 
import {Picker} from "native-base"

import {useNavigation} from '@react-navigation/native';
import styles from './styles'
import fundo from '../../../assets/fundoHeader.jpg'

export default function ImagePickerExample() {
  const navigation = useNavigation();
  const [nomeProduto, setNomeProduto] = useState()
  const [qntDisponivel,setQntDisponivel] = useState()
  const [valor, setValor] = useState()
  const [categorias, setCategorias] = useState([])
  const [selectCat1, setSelectCat1] = useState('Selecione');
  const [selectCat2, setSelectCat2] = useState('Selecione');
  const [selectCat3, setSelectCat3] = useState('Selecione');

  // função avançar para seleção de imagems
  function navigarToStoreImage(){
    navigation.navigate('storeImage');
  }

  //Função listarcategorias
  useEffect(()=>{
    async function listarCategorias(){
        let response = await fetch('http://192.168.1.66:3333/categoria',{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
         })
        let json = await response.json()
        setCategorias(json)
        console.log(categorias)
    }

    listarCategorias()
    
  },[])

  // Função cadastrar Produto
  async function sendForm(){
    let response = await fetch('http://192.168.1.66:3333/produto',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nomeProduto,
            preco: valor,
            qntDisponivel: qntDisponivel,
            categ1: selectCat1,
            categ2: selectCat2,
            categ3: selectCat3

        })
    })
    let json = await response.json()
    if(json){
      navigarToStoreImage()
    }
}
  
  return (
    <ImageBackground style={styles.container} source={fundo}>
      <View style={styles.header}>
        <TouchableOpacity style={{marginTop:5}}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontWeight:"bold",color:"#364f6b",}}>CADASTRO DE PRODUTOS</Text>
        <Text>Sair</Text>

      </View>
      <ScrollView style={styles.form}>
        <View style={styles.cardIcon}>
          <Text style={{fontSize:12}}>Dados Produto</Text>
          <AntDesign name="pause" size={24} color="black" />
          <Text style={{color:"#dcdcdc", fontSize:12}}>Imagens Produto</Text>
        </View>
        <TextInput style={styles.input}
          placeholder="Nome do Produto"
          onChangeText={text => setNomeProduto(text)}
        />
        <TextInput style={styles.input}
          placeholder="QNT Disponível"
          onChangeText={text => setQntDisponivel(text)}
        />
        <TextInput style={styles.input}
          placeholder="Valor"
          onChangeText={text => setValor(text)}
        />
         <Text style={styles.textCategorias}>Escolha pelo menos uma categoria</Text>
         <Text style={styles.textCategorias}>Categoria 1</Text>
              <View style={styles.item} >
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 150, height:45 }}
                    selectedValue={selectCat1}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectCat1(itemValue)
                    }
                  >
                    {categorias.map((item, index) => {
                    return (
                    <Picker.Item
                    label={item.nome}
                    value={item.id}
                    key={index}
                    />
                    );
                    })}
                  </Picker>
              </View>  
              <Text style={styles.textCategorias}>Categoria 2</Text>
              <View style={styles.item} >
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 150, height:45 }}
                    selectedValue={selectCat2}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectCat2(itemValue)
                    }
                  >
                    {categorias.map((item, index) => {
                    return (
                    <Picker.Item
                    label={item.nome}
                    value={item.id}
                    key={index}
                    />
                    );
                    })}
                  </Picker>
              </View>    
              <Text style={styles.textCategorias}>Categoria 3</Text>
              <View style={styles.item} >
                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 150, height:45 }}
                    selectedValue={selectCat3}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectCat3(itemValue)
                    }
                  >
                    {categorias.map((item, index) => {
                    return (
                    <Picker.Item
                    label={item.nome}
                    value={item.id}
                    key={index}
                    />
                    );
                    })}
                  </Picker>
              </View>               
        <TouchableOpacity style={styles.button} onPress={sendForm}>
          <Text style={styles.textButton}>Avançar</Text>
          <AntDesign name="right" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}
/*     */