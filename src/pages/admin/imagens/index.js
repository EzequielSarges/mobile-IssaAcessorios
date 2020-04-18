import * as React from 'react';
import { Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import imgCategorias from '../../../assets/cad.png';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitulo}>CADASTRO DE IMAGENS</Text>
            </View>
            <View style={styles.headerImg}>
                <Image style={styles.imgCategorias} source={imgCategorias}/>
            </View>
            <View style={styles.form}>
                <Text>Nome da imagem:</Text>
                  <TextInput style={styles.input}
                  placeholder="Nome"
                  />
                <View style={styles.selecImg}>
                    <Button style={styles.btnSelect} title="Selecione uma imagem:" onPress={this._pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, margin:30 }} />}
                </View>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [5, 5],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}