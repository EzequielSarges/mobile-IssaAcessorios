import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {ImageBrowser} from 'expo-image-picker-multiple'
import { call } from 'react-native-reanimated';

export default function storeProduto(){
  const {Images, setImages} = useState([])
  const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
  const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;

  function imagesCallback(callback) {
    console.log(callback)
  };

  function updateHandler(count, onSubmit){
    return(
    console.log(Images)
    )
    
  };
  function renderSelectedComponent(number){
    return(
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
    )
  };
  return(
      <View style={[styles.flex, styles.container]}>
        <ImageBrowser
        max={4}
        onChange={imagesCallback}
        callback={updateHandler}
        renderSelectedComponent={renderSelectedComponent}
        emptyStayComponent={emptyStayComponent}
        noCameraPermissionComponent={noCameraPermissionComponent}
        />
      </View>
  )

}
const styles = StyleSheet.create({
flex: {
flex: 1
},
container: {
paddingTop: 2,
position: 'relative'
},
emptyStay:{
textAlign: 'center',
},
countBadge: {
paddingHorizontal: 8.6,
paddingVertical: 5,
borderRadius: 50,
position: 'absolute',
right: 3,
bottom: 3,
justifyContent: 'center',
backgroundColor: '#ffa45c'
},
countBadgeText: {
fontWeight: 'bold',
alignSelf: 'center',
padding: 'auto',
color: '#5d5d5a'
}
});