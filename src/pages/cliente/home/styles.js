import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    painel:{
        flex: 1,
        backgroundColor:'#F2F2F2',
    },
    header:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
        borderColor:'#DB7093',
        borderBottomWidth:1,
        borderTopWidth:25,
        borderRadius: 3,
    },
    footer:{
        backgroundColor: '#DB7093',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    headerAdm:{
        marginTop:8,
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
     
    },
    textAdmin:{
        marginRight:280,
        backgroundColor: '#f05a5b',
        padding: 5,
        borderRadius: 5,
        color: '#fff'
    },
 
    textFooter:{
        fontSize: 11
    },
    carFooter:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    bodyHome:{
        flexDirection:'column',
        marginRight:10,
        marginLeft: 10,
        marginBottom:10,
        borderRadius: 5,
        borderColor:'#fff',
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        backgroundColor:'#fff'
       
    },
    cardHome:{
        flexDirection:'row',
     },
    cardPedido:{
        alignItems:'center',
        width: 189,
    
    },
    cardCategorias:{
        marginBottom: 15,
        marginTop:10,
        alignItems:'center',
        flexDirection:'row',
    },
    corpoCategorias:{
        alignItems:'center',
        borderRadius: 55,
        borderBottomWidth:2,
        borderLeftWidth: 1,
        borderRightWidth:2,
        borderTopWidth:1,
        height:59,
        width: 59,
        padding:5
    },
    tituloCategorias:{
        fontSize: 9,
        fontWeight: "bold"
    },
    tituloPedido:{
        fontSize: 16,
        color: '#000',
        fontWeight:'700',
        marginLeft: 10
    },
    tituloEstoque:{
        fontSize: 12,
        color: '#008000',
        fontWeight:'100',
        marginLeft: 10
    },
    tituloPreco:{
        fontSize: 22,
        color: '#DB7093',
        fontWeight: '100',
        
        marginLeft: 10,
        fontWeight:'bold',
    },
    
    imgPedido:{
        height: 100,
        width: 150,
        borderRadius: 5,
    },
    imgCategorias:{
        height:20,
        width:20,
        
    },    
    logoIsa:{
        height:80,
        width: 71,
        margin: 3
    },
    textInput:{
        backgroundColor:'#DB7093',
        color:'#fff',
        width: 290,
        marginBottom: 5,
        padding: 3,
        borderRadius: 4,
        marginRight:10
    },
    textCard:{
        color: '#DB7093',
        fontSize: 23,
        fontWeight: 'bold'
    }
    


})