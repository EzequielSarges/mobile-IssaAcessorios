import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    painel:{
        flex: 1,
        backgroundColor:'#fff',
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
    body:{
        backgroundColor: '#fff',
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    iconFooter:{
        height: 30,
        width: 25,
        marginTop: 5
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
        marginRight:5,
        marginLeft: 5,
        marginTop:5,
        borderRadius: 5,
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
       
    },
    cardHome:{
        flexDirection:'column',
        marginBottom: 5,
        justifyContent:'center',
        alignItems:'center',
    },
    cardPedido:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 3
    },
    tituloPedido:{
        fontSize: 16,
        color: '#000',

    },
    descricaoPedido:{
        fontSize: 14,
        color: '#4F4F4F'
    },
    valorPedido:{
        fontSize: 18,
        marginTop:15,
        color: '#fff',
        backgroundColor:'#FF05B9',
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderRadius: 3,
        padding: 5
    },
    imgPedido:{
        height: 150,
        width: 200,
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderRadius: 5,
        
        
    },
    cardCarousel:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 15,
    },
    imgCarousel:{
        height:70,
        width:90,
       
    },
    areaCarousel:{
        justifyContent:'center',
        alignItems: 'center',
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
        marginBottom:15,
        padding: 0,
        backgroundColor:'#dfdfdf'
    },
    logoIsa:{
        height:110,
        width: 97,
        margin: 3
    },
    textInput:{
        backgroundColor:'#DB7093',
        color:'#fff',
        width: 290,
        marginBottom: 5,
        padding: 3,
        borderRadius: 4
    },
    textCard:{
        color: '#DB7093',
        fontSize: 25
    }
    


})