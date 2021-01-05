import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        marginTop: 60
    },
    imgFundo:{
        flex: 1
    },
    logoImg:{
       marginTop: 55,
       marginLeft:88
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 40
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
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:4
    },
    textButton:{
        color:'#fff',
        fontSize: 16
    },
    textCad:{
        marginTop: 20,
        marginLeft: 50
    },
    textAdmin:{
        marginRight:25,
        backgroundColor: '#f05a5b',
        padding: 5,
        borderRadius: 5,
        color: '#fff'
    }
})