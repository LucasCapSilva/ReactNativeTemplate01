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
      <Block flex={1} center  space="evenly">
        <Image
          style={{ width: 350, height: 140 }}
          source={{ uri: 'https://storage.googleapis.com/atados-v3/user-uploaded/images/8010b1b6-32bc-4dd4-bc11-a4a607c9974c.png' }}
        />
        <Block flex={1} middle>
        <Input placeholder="Informe o seu emaill" color={theme.COLORS.SUCCESS} style={{ borderColor: "#ff4d00"}} placeholderTextColor={theme.COLORS.INFO} />
        <Input placeholder="Informe a sua senha" color={theme.COLORS.SUCCESS} style={{ borderColor: "#ff4d00" }} placeholderTextColor={theme.COLORS.INFO}  />
        </Block>
        <Block row flex={2} top  space="evenly">
          <Button middle round size="small" color="#ff4d00" >Logar</Button>
          <Button middle round size="small" color="#ff4d00">Cadastrar</Button>
        </Block>
      </Block>
    );
  }
}