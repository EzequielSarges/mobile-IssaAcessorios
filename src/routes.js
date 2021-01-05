import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

// ROTAS ADMIN
import painel from './pages/admin/painel';
import storeCategoria from './pages/admin/categorias/store';
import imagens from './pages/admin/imagens';

//ROTAS CLIENTE
import login from './pages/cliente/login';
import cadastroCliente from './pages/cliente/cadastro';
import home from './pages/cliente/home';
import detalheProduto from './pages/cliente/detalhesProduto';




export default function Routes(){
   
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="home" component={home}/>
                <AppStack.Screen name="login" component={login}/>
                <AppStack.Screen name="painel" component={painel}/>
                <AppStack.Screen name="storeCategoria" component={storeCategoria}/>
                <AppStack.Screen name="imagens" component={imagens}/>
                <AppStack.Screen name="cadastroCliente" component={cadastroCliente}/>
                <AppStack.Screen name="detalhesProduto" component={detalheProduto}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
