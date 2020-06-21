import React from "react";
import { SwipeableFlatList } from "react-native";
import TransacaoItem from "./transacao-item";
import TransacaoActions from "./transacao-actions";

const Transacoes = ({ transacoes }) => {
  return (
    <SwipeableFlatList
      data={transacoes}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={TransacaoItem}
      renderQuickActions={TransacaoActions}
    />
  );
};

export default Transacoes;
