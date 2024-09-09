import express from "express";
//Foi instalado a biblioteca @types/express -D (-D significa que será usado somente no desenvolvimento, pois o código será convertido em JS quando subir para o navegador)
//Foi instalado a biblioteca ts-node -D (Pois o node nativo não consegue ler um código em TypeScript)

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.send('Hello World!');
});

app.listen(3333);