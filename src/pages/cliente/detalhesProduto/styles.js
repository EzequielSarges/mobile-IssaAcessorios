import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    detalhes:{
        flex: 1,
        backgroundColor:'#fff',
    },
    tituloDetalhe:{
        color: '#DB7093',
        marginTop: 15,
        marginBottom:10,
        fontSize:18
    },
    headerDetalhes:{
        backgroundColor:'#fff',
        alignItems: 'center',
        borderColor:'#DB7093',
        borderBottomWidth:1,
        borderTopWidth:25,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    imgProduto:{
        height: 360,
        width: 360,
    },
    cardDetalhes:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    nomeProduto:{
        fontSize: 20,
        color:"#DB7093",

    },
    precoProduto:{
       
        marginTop: 15,
        fontSize: 30,
        backgroundColor: "#FF05B9",
        color: '#fff'
    }
    
})