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
    }
    


})