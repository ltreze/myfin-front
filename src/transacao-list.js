import React from "react";
import TransacaoItem from "./transacao-item";

const ComplexList = ({ transacoes }) => (
  <ul>
    {transacoes.map(item => (
      <TransacaoItem item={item}/>
    ))}
  </ul>
);

export default ComplexList;
