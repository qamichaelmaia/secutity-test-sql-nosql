# Testes de Segurança da API

## Descrição
Este projeto visa identificar e mitigar vulnerabilidades de segurança em uma API de login e upload de imagens. Os testes foram realizados para detectar falhas críticas, incluindo SQL Injection, NoSQL Injection e Injeção de Comando.

## Objetivos dos Testes
1. **SQL Injection**: Verificar se a API é vulnerável a injeções SQL que possam permitir o acesso não autorizado.
2. **NoSQL Injection**: Avaliar a segurança da API contra injeções NoSQL durante o processo de login.
3. **Injeção de Comando**: Testar se a API permite a injeção de comandos através do upload de arquivos.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript.
- **Supertest**: Biblioteca para testar APIs HTTP.
- **Mocha**: Framework de teste para Node.js.
- **Chai**: Biblioteca de asserções para testes.