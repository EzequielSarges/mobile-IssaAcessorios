import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cardPai:{
        backgroundColor:'#dcdcdc',
        flex: 1,
    },
    cardHeader:{
        flexDirection:'column',
        backgroundColor: '#81DAF5',
        borderBottomStartRadius:30,
        borderBottomEndRadius: 30

    },
    cardSobreHeader:{
        backgroundColor:"#fff",
        backgroundColor: "#DB7093",
        borderBottomStartRadius: 30,
        borderBottomEndRadius:30,
        height: 250,
        alignItems:'center',
        
    },
    cardImage:{
        backgroundColor:"#81DAF5",
        height:130,
        width:130,
        marginTop:35,
        borderRadius:90
    },
    cardNome:{

    },
    textNome:{
        fontSize:22,
        color:'#fff',
        fontWeight:'bold'
    },
    informacoes:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    cardInfo:{
        alignItems:'center',
        marginTop:10,
        marginBottom:5
    },
    carBody:{
        flexDirection:'column',
        alignItems:'center'
    },
    cardAcoes:{
        alignItems:'center',
        backgroundColor:'#fff',
        margin: 5,
        padding:5,
        borderRadius:5,
        width:150,
    },
    cardPaiAcoes:{
        flexDirection:'row'
    },
    cardSuperior:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
    },
    
})