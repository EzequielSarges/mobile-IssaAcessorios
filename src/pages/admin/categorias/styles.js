import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        paddingVertical:30,

    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4
    },
    button:{
        height: 42,
        backgroundColor: '#32CD32',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:4,
        marginTop: 30
    },
    textButton:{
        color:'#fff',
        fontSize: 16
    },
    header:{
        height: 60,
        backgroundColor:'#FF05B9',
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    headerImg:{
        height:100,
        marginTop:1,
        backgroundColor:'#FF05B9',
        justifyContent:'center',
        alignItems:'center'
    },
    imgCategorias:{
        width: 60,
        height: 60
    },
    textTitulo:{
        color:'#fff',
        fontSize: 18
    },
    galeria:{
        backgroundColor:'#dcdcdc',
        flexDirection:"row",
        justifyContent:'space-around',
        alignContent:'space-around',
        padding:0
    },
    imgs:{
        height: 65,
        width: 79,
        borderColor:'#696969',

    }
    
  
})