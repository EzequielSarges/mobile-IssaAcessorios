import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    painel:{
        flex: 1,
        backgroundColor:'#fff',
    },
    header:{
        backgroundColor:'#fff',
        height: 50,
        justifyContent:'center',
        alignItems: 'flex-end',
        marginTop: 22
    },
    footer:{
        backgroundColor: '#FF05B9',
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
    subTitulo:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
    },
    bodyHome:{
        flexDirection:'column',
        margin:10,
        borderRadius: 5,
        borderColor:'#dcdcdc',
        borderBottomWidth:1,
       
    },
    cardHome:{
        flexDirection:'row',
        marginBottom: 5
    },
    cardPedido:{
        flexDirection: 'column',
        padding: 5,
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
        height: 89,
        width: 125,
        
    },
    textSubTitulo:{
        color: '#838383',
        fontSize: 18,
    },
    cardCarousel:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 15,
        borderColor:'#6A5ACD',
        borderBottomWidth:1,
        borderLeftWidth: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderRadius: 3,
        marginRight:5
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
        padding: 0
    }
    


})