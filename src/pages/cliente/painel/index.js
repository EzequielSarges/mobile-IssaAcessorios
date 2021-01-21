import React from 'react';
import {FlatList, ScrollView ,SafeAreaView, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import imgCliente from '../../../assets/clientes.png'; 
import imgPedidos from '../../../assets/pedidos.png';
import imgCategorias from '../../../assets/categoria.png';
import imgProdutos from '../../../assets/produto.png';
import imgImagens from '../../../assets/imagem.png';
import imgCupons from '../../../assets/cupom.png';


export default function login(){

    const navigation = useNavigation();
    function navigarToCategorias(){
        navigation.navigate('storeCategoria');
    }
    function navigarToImagens(){
        navigation.navigate('imagens');
    }
    return (
        <ScrollView style={styles.painel}>
            <View style={styles.header}>
                <Text style={styles.textPainel}>DASHBOARD</Text>
            </View>
                    <View style={styles.body}>
                        <View style={styles.painelClientes}>
                                <Image style={styles.imgCliente} source={imgCliente}/>
                            <View style={styles.descricao}>
                                <Text style={styles.textTitulo}>Clientes</Text>
                                <Text style={styles.textValores}>150</Text>
                            </View>
                        </View>

                        <View style={styles.painelClientes}>
                                <Image style={styles.imgCliente} source={imgPedidos}/>
                            <View style={styles.descricao}>
                                <Text style={styles.textTitulo}>Pedidos</Text>
                                <Text style={styles.textValores}>210</Text>
                            </View>
                        </View>

                        <View style={styles.painelClientes}>
                                <Image style={styles.imgCliente} source={imgCliente}/>
                            <View style={styles.descricao}>
                                <Text style={styles.textTitulo}>Faturamento</Text>
                                <Text style={styles.textValores}>R$: 1.200,30</Text>
                            </View>
                        </View>
                        
                            <View>
                                <Text style={styles.textCad}>Cadastrar</Text>
                            </View>
                       
                            <View style={styles.bodyCadastrar}>
                                <TouchableOpacity onPress={navigarToCategorias}>
                                    <View style={styles.areaCadastrar}>
                                        <Text    style={styles.textCadastrar}>Categorias</Text>
                                        <Image style={styles.imgCadastro} source={imgCategorias}/>
                                    </View>
                                </TouchableOpacity>

                                    <View style={styles.areaCadastrar}>
                                        <Text style={styles.textCadastrar}>Produtos</Text>
                                        <Image style={styles.imgCadastro} source={imgProdutos}/>
                                    </View>
                                <TouchableOpacity onPress={navigarToImagens}>
                                    <View style={styles.areaCadastrar}>
                                        <Text style={styles.textCadastrar}>Imagens</Text>
                                        <Image style={styles.imgCadastro} source={imgImagens}/>
                                    </View>
                                </TouchableOpacity>
                            </View>   

                            <View style={styles.bodyCadastrar}>
                                    <View style={styles.areaCadastrar}>
                                        <Text style={styles.textCadastrar}>Cupons</Text>
                                        <Image style={styles.imgCadastro} source={imgCupons}/>
                                    </View>
                            

                                    <View style={styles.areaCadastrar}>
                                        <Text style={styles.textCadastrar}>Cupom</Text>
                                        <Image style={styles.imgCadastro} source={imgCategorias}/>
                                    </View>

                                    <View style={styles.areaCadastrar}>
                                        <Text style={styles.textCadastrar}>Cupom</Text>
                                        <Image style={styles.imgCadastro} source={imgCategorias}/>
                                    </View>
                            </View>  
                            
                    </View>
                    
        </ScrollView>
    )
}