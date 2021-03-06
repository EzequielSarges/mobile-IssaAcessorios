import React from 'react';
import {View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import imgCategorias from '../../../assets/cad.png';


export default function store(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitulo}>CADASTRO DE CATEGORIAS</Text>
            </View>
            <View style={styles.headerImg}>
                <Image style={styles.imgCategorias} source={imgCategorias}/>
            </View>
            
                <View style={styles.form}>
                  <Text>Título da categoria:</Text>
                  <TextInput style={styles.input}
                  placeholder="Titulo"
                  />
                  <Text>Descrição:</Text>
                  <TextInput style={styles.input}
                  placeholder="Descrição"
                  />
                  <Text>Escolha uma imagem para a categoria:</Text>
                    <View style={styles.galeria}>
                        <TouchableOpacity style={styles.clicImg}>
                                <Image style={styles.imgs} source={lacos}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                                <Image style={styles.imgs} source={tiara}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                                <Image style={styles.imgs} source={tiara2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                                <Image style={styles.imgs} source={tiara3}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.galeria}>
                        <TouchableOpacity style={styles.clicImg}>
                            <Image style={styles.imgs} source={laco2}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                            <Image style={styles.imgs} source={laco3}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                            <Image style={styles.imgs} source={laco4}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clicImg}>
                            <Image style={styles.imgs} source={lacos}/>
                        </TouchableOpacity>
                    </View>
                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                </View>
        </View>
    )
}