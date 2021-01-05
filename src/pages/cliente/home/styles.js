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
    
    imgPedido:{
        height: 100,
        width: 150,
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
        borderRadius: 4
    },
    textCard:{
        color: '#DB7093',
        fontSize: 23,
        fontWeight: 'bold'
    }
    


})