import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#dcdcdc',
        padding:15
    },
    form:{
        paddingHorizontal: 30,
        backgroundColor: '#f6f6f6',
        paddingVertical:30,
        borderRadius:20,
        marginTop:15,

    },
    input:{
     
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor:'#fff'
    },
    button:{
        height: 42,
        backgroundColor: '#fc5185',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        borderRadius:30,
        marginTop: 20,
        marginBottom:50
    },

    textButton:{
        color:'#fff',
        fontSize: 16,
    },
    header:{
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    images:{
        width:310,
        height:210,
        margin:5,
        borderWidth: 4,
        borderColor: "#fff"
    },
    cardIcon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    item:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:20,
        flexDirection:"row",
      },
      checkBoxTxt:{
        marginLeft:20
      },
      textCategorias:{
        fontSize:16,
        fontWeight:"bold",
        color:"#364f6b",
        marginBottom:15,
        marginTop: 15,
        
      },
      cardImages:{
        marginTop:15,
      },
    thumb: {
        width: 20,
        height: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    },

})