"use strict";

var req = require('supertest');
var _require = require('path'),
    resolve = _require.resolve;

var API_URL = process.env.API_URL;

describe('Image Upload', function () {
  it('Command Injection', async function () {
    const response = await req(API_URL)
      .post('/image/upload')
      .attach('file', resolve("./resources/ & echo 'Meu Comando' & ls -la &")) // Simulando a injeção
      .expect(500); // Esperando que a resposta seja 500

    // Verificando se a resposta está correta
    expect(response.statusCode).toEqual(500);
    // Adicionar verificação para garantir que dados sensíveis não sejam retornados
    expect(response.text).not.toContain('Dados Sensíveis'); // Exemplo, ajuste conforme necessário
  });
});
