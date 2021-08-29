module.exports = (app) => {
  app.get('/atendimentos', (request, response) => {
    response.send('você está na rota de atendimentos e está realizando um GET');
  });

  app.post('/atendimentos', (request, response) => {
    console.log('Atendimento enviado');
    console.log(request.body);
    response.send('Você está na rota de atendimentos e está realizando um POST');
  });
};
