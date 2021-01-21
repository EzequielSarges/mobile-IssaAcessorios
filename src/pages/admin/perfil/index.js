import React from 'react'
import styles from './styles'
import {View,TouchableOpacity, Text,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

import iconPedidos from '../../../assets/produto.png'
import iconFaturamento from '../../../assets/faturamento.png'
import iconClientes from '../../../assets/clientes.png'
import iconEdit from '../../../assets/cad.png'
import iconCade from '../../../assets/edit.png'
import imgUser from '../../../assets/user.jpeg'


export default function perfil(){
    const navigation = useNavigation();
    function navigarToCadProdutos(){
        navigation.navigate('produtos');
    }
    return(
        <View style={styles.cardPai}>
                <View style={styles.cardSuperior}>
                    <TouchableOpacity style={{marginTop:25}}>
                        <Ionicons name="md-arrow-back" size={18} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{marginTop:25}}>Perfil do Usuário</Text>
                    <TouchableOpacity style={{marginTop:25}}>
                        <AntDesign name="bars" size={24} color="#fff" />
                    </TouchableOpacity>
                 
                </View>

                <View style={styles.cardSobreHeader}>
                    <Image style={styles.cardImage} source={imgUser}/>

                    <View style={styles.cardNome}>
                        <Text style={styles.textNome}>Isa Acessórios</Text>
                    </View>

                        <View style={styles.informacoes}>
                            <View style={styles.cardInfo}>
                                <Image style={{height:25,width:25}} source={iconClientes}/>
                                <Text>Clientes</Text>
                                <Text style={{fontSize:16, color:'#DF0174', fontWeight:'bold'}}>150</Text>
                            </View>
                            <View style={styles.cardInfo}>
                                <Image style={{height:25,width:25}} source={iconPedidos}/>
                                <Text>Pedidos</Text>
                                <Text style={{fontSize:16, color:'#DF0174', fontWeight:'bold'}}>201</Text>
                            </View>
                            <View style={styles.cardInfo}>
                                <Image style={{height:25,width:25}} source={iconFaturamento}/>
                                <Text>Faturamento</Text>
                                <Text style={{fontSize:16, color:'#DF0174', fontWeight:'bold'}}>R$: 5.440,12</Text>
                            </View>
                        </View>
                </View>

            <View style={styles.carBody}>
                <Text style={{fontSize:22,color:'#DB7093', fontWeight:'bold', marginBottom:10}}>Ações:</Text>
                <View style={styles.cardPaiAcoes}>
                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconCade}/>
                        <Text>Cadastrar Categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigarToCadProdutos} style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconCade}/>
                        <Text>Cadastrar Produto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardPaiAcoes}>
                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconEdit}/>
                        <Text>Editar Categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconEdit}/>
                        <Text>Editar Produto</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
}