# Portfólio — Hauan Felipe

Portfólio em React e Vite, inspirado na referência fornecida, com fundo escuro, identidade roxa e avatar original.

## Executar

```sh
npm install
npm run dev
```

## Gerar versão de produção

```sh
npm run build
npm run preview
```

## Personalizar

- `src/components/hero.jsx`: título, apresentação e avatar.
- `src/components/header.jsx`: navegação e menu responsivo.
- `src/App.jsx`: projetos, sobre e contato.
- `src/style.css`: cores, tipografia e layout.

O texto de apresentação é uma sugestão inicial editável.

## Formulário de contato

O formulário envia nome, e-mail e mensagem pelo [FormSubmit](https://formsubmit.co/) para `hauanfeliperibeiro@gmail.com`. Todos os campos são obrigatórios, e o e-mail informado pelo visitante permite responder diretamente à mensagem recebida.

Para ativar o recebimento, abra o site pelo servidor de desenvolvimento ou pelo endereço publicado, faça um primeiro envio e confirme o link que o FormSubmit enviará ao e-mail de destino (confira também o spam). Depois da ativação, faça outro envio para verificar a entrega. Não é necessário configurar uma chave de API.

O envio usa a página de verificação e confirmação do FormSubmit, com a proteção reCAPTCHA padrão do serviço. A entrega depende da ativação do endereço e da disponibilidade do FormSubmit; build e lint não verificam o recebimento de e-mails.

A cópia `src/assets/images/avatar.png` evita o caractere dois-pontos no nome original, que bloqueava a imagem no servidor do Vite. O arquivo original foi preservado.
