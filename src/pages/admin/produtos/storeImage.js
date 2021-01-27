import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,ImageBackground,TouchableOpacity,Text,ScrollView,FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import fundo from '../../../assets/fundoHeader.jpg'
import styles from './styles'
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from 'react-native-slider-color-picker';
import tinycolor from 'tinycolor2';

export default function ImagePickerExample() {
  const [image, setImage] = useState([]);
  const [oldColor, setoldColor] = useState("#FF7700")

  // função escolher cores
  function changeColor (colorHsvOrRgb, resType){
    if (resType === 'end') {
        setoldColor(tinycolor(colorHsvOrRgb).toHexString(),);
    }

  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {

      setImage(oldArray => [...oldArray,result.uri] );
      console.log(image)
    }
  };

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
          <Text style={{color:"#dcdcdc",fontSize:12}}>Dados Produto</Text>
          <AntDesign name="pause" size={24} color="black" />
          <Text style={{color:"#000",fontSize:12}}>Imagens Produto</Text>
        </View>
        <Button style={styles.buttonAddImage} title="Adicionar Imagens da Galeria" onPress={pickImage} />
          <FlatList
            data={image}
            style={styles.cardImages}
            keyExtractor={item => item}
            horizontal={true}
            renderItem={({item}) => {
              return(
                <View >
                    {image && <Image style={styles.images} source={{ uri: item }}/>}
                </View>
           
              )
          }}
            
          />

                <View style={{marginHorizontal: 24, marginTop: 20, height: 12, width: 220}}>
                    <SliderHuePicker
                        ref={view => {view}}
                        oldColor={oldColor}
                        trackStyle={[{height: 12, width: 220}]}
                        thumbStyle={styles.thumb}
                        useNativeDriver={true}
                        onColorChange={changeColor}
                    />
                </View>
                <View style={{marginHorizontal: 24, marginTop: 20, height: 12, width: 220}}>
                    <SliderSaturationPicker
                        ref={view => {view}}
                        oldColor={oldColor}
                        trackStyle={[{height: 12, width: 220}]}
                        thumbStyle={styles.thumb}
                        useNativeDriver={true}
                        onColorChange={changeColor}
                        style={{height: 12, borderRadius: 6, backgroundColor: tinycolor({h: tinycolor(oldColor).toHsv().h, s: 1, v: 1}).toHexString()}}
                    />
                </View>
              <Text>{oldColor}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
          <AntDesign name="right" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
 
    </ImageBackground>
    ); 
}