import React from "react";
import Transacao from "./transacao";

const ComplexList = ({ transacoes }) => (
  <ul>
    {transacoes.map(item => (
      <Transacao transacao={item}/>
    ))}
  </ul>
);

export default ComplexList;
