import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './pages/LoginScreen';
import Tab2 from './pages/ChamadaScreen';
import Tab3 from './pages/ConversaScreen';
export default class TabScreen extends Component {
  render() {
    return (
      <Container >
      
        <Header style={{ backgroundColor: "#ff5448", Title: "legal", height: 2 }} androidStatusBarColor="#ff5448" hasSubtitle="true" searchBar />

        <Tabs>
          <Tab heading="Login" tabStyle={{ backgroundColor: "#ff4d00" }} activeTabStyle={{ backgroundColor: "#ff0000" }}>
            <Tab1 />
          </Tab>
          <Tab heading="Conversas" tabStyle={{ backgroundColor: "#ff4d00" }} activeTabStyle={{ backgroundColor: "#ff0000" }}>
            <Tab2 />
          </Tab>
          <Tab heading="Chamadas" tabStyle={{ backgroundColor: "#ff4d00" }} activeTabStyle={{ backgroundColor: "#ff0000" }}>
            <Tab3 />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}