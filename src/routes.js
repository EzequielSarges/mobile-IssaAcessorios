import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

// ROTAS ADMIN

import perfil from './pages/admin/perfil'
import storeCategoria from './pages/admin/categorias/store';
import produtos from './pages/admin/produtos/store';

//ROTAS CLIENTE
import login from './pages/cliente/login';
import cadastroCliente from './pages/cliente/cadastro';
import home from './pages/cliente/home';
import detalheProduto from './pages/cliente/detalhesProduto';
import painel from './pages/cliente/painel';




export default function Routes(){
   
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="home" component={home}/>
                <AppStack.Screen name="login" component={login}/>
                <AppStack.Screen name="painel" component={painel}/>
                <AppStack.Screen name="storeCategoria" component={storeCategoria}/>
                <AppStack.Screen name="produtos" component={produtos}/>
                <AppStack.Screen name="cadastroCliente" component={cadastroCliente}/>
                <AppStack.Screen name="detalhesProduto" component={detalheProduto}/>
                <AppStack.Screen name="perfil" component={perfil}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
