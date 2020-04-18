import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    painel:{
        flex: 1,
        backgroundColor:'#E7E0E0',
    },
    header:{
        backgroundColor:'#FF05B9',
        height: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
    textPainel:{
        color:'#fff',
        fontSize: 18
    },
    body:{
        backgroundColor: '#E7E0E0',
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    painelClientes:{
        backgroundColor: '#fff',
        height: 70,
        width:290,
        margin: 5,
        alignItems:'center',
        borderRadius: 5,
        flexDirection: 'row',
       
    },
    textValores:{
        marginTop: 5,
        fontSize: 22,
        marginLeft:10,
        color: '#11B90D'
    },
    textTitulo:{
        marginTop: 5,
        fontSize: 15,
        marginLeft:10
    },
    descricao:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:20
        
    },
    imgCliente:{
        height: 40,
        width: 40,
        padding: 5,
        marginLeft: 10,
        marginRight:20
    },
    bodyCadastrar:{
        flexDirection:"row",
        justifyContent:'space-around',
        alignContent:'space-between',
    },
   
    areaCadastrar:{
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 5,
        width: 85,
        marginTop: 10,
        margin: 5

    },
    textCadastrar:{
        color:'#000'
    },
    imgCadastro:{
        width: 33,
        height: 30
    },
    textCad:{
        fontSize: 18,
        marginTop: 10
    }


})