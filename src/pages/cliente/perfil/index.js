import React from 'react'
import styles from './styles'
import {View,TouchableOpacity, Text,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import iconPedidos from '../../../assets/produto.png'
import iconFaturamento from '../../../assets/faturamento.png'
import iconClientes from '../../../assets/clientes.png'
import imgUser from '../../../assets/user.jpeg'


export default function perfil(){
    return(
        <View style={styles.cardPai}>
            <View style={styles.cardHeader}>
                <View style={styles.cardSobreHeader}>
                    <View style={styles.cardSuperior}>
                        <TouchableOpacity>
                            <Ionicons name="md-arrow-back" size={18} color="#fff" />
                        </TouchableOpacity>
                        <Text>Perfil do Usuário</Text>

                    </View>
                    <Image style={styles.cardImage} source={imgUser}/>

                    <View style={styles.cardNome}>
                        <Text style={styles.textNome}>Isa Acessórios</Text>
                    </View>
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

                <Text style={{fontSize:22, marginTop:15, color:'#DB7093', fontWeight:'bold'}}>Ações:</Text>
                <View style={styles.cardPaiAcoes}>
                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconFaturamento}/>
                        <Text>Cadastrar Categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconFaturamento}/>
                        <Text>Cadastrar Produto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardPaiAcoes}>
                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconFaturamento}/>
                        <Text>Editar Categoria</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardAcoes}>
                        <Image style={{height:25,width:25}} source={iconFaturamento}/>
                        <Text>Editar Produto</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
}