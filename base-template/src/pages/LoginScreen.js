import React, { Component } from "react"
import { View, Image } from 'react-native';
import { Text } from 'galio-framework'
import { Input, Block } from 'galio-framework';
import { Button } from 'galio-framework';
import { theme, withGalio, GalioProvider } from 'galio-framework'


export default class HomeScreen extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <View flex={1} style={{ justifyContent: "space-evenly" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 350, height: 140 }}
            source={{ uri: 'https://storage.googleapis.com/atados-v3/user-uploaded/images/8010b1b6-32bc-4dd4-bc11-a4a607c9974c.png' }}
          />
        </View>
        <View>
          <Input placeholder="Informe o seu emaill" color={theme.COLORS.SUCCESS} style={{ borderColor: "#ff4d00" }} placeholderTextColor={theme.COLORS.INFO} />
          <Input placeholder="Informe a sua senha" color={theme.COLORS.SUCCESS} style={{ borderColor: "#ff4d00" }} placeholderTextColor={theme.COLORS.INFO} />
        </View>
        <View style={{ alignItems: "center" }}>

          <View style={{ flexDirection:"row", alignItems:"center" }} >
            <Button shadowless round size="small" color="#ff4d00" >Logar</Button>
            <Button shadowless round size="small" color="#ff4d00">Cadastrar</Button>
          </View>

        </View>
      </View>
    );
  }
}