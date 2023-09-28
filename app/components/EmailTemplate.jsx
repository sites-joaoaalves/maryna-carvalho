import * as React from "react";

export const EmailTemplate = ({ name, email, phone, message }) => (
  <div>
    <div>
      <h1>Olá, Maryna!</h1>
      <p>Você recebeu uma nova mensagem de {name}.</p>
      <p>Detalhes da mensagem:</p>
      <ul>
        <li>Nome: {name}</li>
        <li>Email: {email}</li>
        <li>Telefone: {phone}</li>
        <li>Mensagem: {message}</li>
      </ul>
    </div>
  </div>
);
