import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    cardPai:{
        backgroundColor:'#fff',
        flex: 1,
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
        borderRadius:90,
    },

    textNome:{
        fontSize:22,
        color:'#fff',
        fontWeight:'bold'
    },
    informacoes:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor: '#81DAF5',
        width:340,
        borderRadius:20,
        marginTop:10
    },
    cardInfo:{
        alignItems:'center',
        marginTop:10,
        marginBottom:5
    },
    carBody:{
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#F2F2F2",
        marginTop:50,
        borderRadius:20,
        width:340,
        marginLeft:10,
        padding:15
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
        backgroundColor:"#DB7093",
    },
    
})