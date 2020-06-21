import React from "react";
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import Transacoes from "./transacao-list";

class Home extends React.Component {
  state = {
    transacoes: [],
    loading: true
  };
  componentDidMount() {
    this.getTransacoes();
  }

  async getTransacoes() {
    const res = await fetch("https://localhost:6001/transacao/");
    const { results } = await res.json();
    this.setState({ transacoes: [...results], loading: false });   
  }

  render() {
    return (
      <ScrollView noSpacer={true} noScroll={true} style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator
            style={[styles.centering]}
            color="#ff8179"
            size="large"
          />
        ) : (
          <Transacoes transacoes={this.state.transacoes} />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: "100vh"
  }
});

export default Home;
