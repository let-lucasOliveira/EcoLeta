import express from "express";
//Foi instalado a biblioteca @types/express -D (-D significa que será usado somente no desenvolvimento, pois o código será convertido em JS quando subir para o navegador)
//Foi instalado a biblioteca ts-node -D (Pois o node nativo não consegue ler um código em TypeScript)
//Foi instalado a biblioteca ts-node-dev -D (Sempre que for realizado uma alteração no arquivo server.ts não será necessário reiniciar o arquivo)

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Lucas',
        'Paulo',
        'Barreto',
        'Robert',
        'Abraao'
    ]);
});

app.listen(3333);