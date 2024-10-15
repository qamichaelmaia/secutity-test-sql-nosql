"use strict";

var req = require('supertest');
var API_URL = process.env.API_URL;

describe('User Login', function () {
  it('SQL Injection', async function () {
    const response = await req(API_URL)
      .post('/sql/login')
      .send({
        "email": "test@meuemail.com.br",
        "password": "' or 1=1 --"
      })
      .set("Accept", "application/json");

    // Verificando se a resposta é 422
    expect(response.statusCode).toEqual(422);
    // Adicione uma verificação para garantir que não há informações do login na resposta
    expect(response.body).not.toHaveProperty('user'); // exemplo, ajuste conforme a resposta real
  });
});
