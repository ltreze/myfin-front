import React from "react";

const Transacao = ({ item: transacao }) => {
  return (
    <div id={`${transacao.id}`}>
      <input type="text" defaultValue={`${transacao.descricao}`} />
      <input type="text" defaultValue={`${transacao.valor}`} />
      <input type="text" defaultValue={`${transacao.data}`} />
    </div>
  );
};

export default Transacao;
