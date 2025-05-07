# OrangeHRM – Automação de Testes E2E com Cypress


Este projeto automatiza fluxos principais de usuário do sistema **OrangeHRM** utilizando o framework **Cypress**. Ele cobre os cenários de login e atualização de perfil, garantindo a funcionalidade através de testes de ponta a ponta com uma arquitetura de código limpa e organizada.


A Integração Contínua (CI) foi configurada com **GitHub Actions**, permitindo a execução automatizada dos testes a cada push no repositório.

![CI](https://github.com/adamcy11/Automating-OrangeHRM-with-Cypress/actions/workflows/ci.yml/badge.svg)


---
🔧 **Instalação**

```bash
npm install
```


💡  Observação: Certifique-se de que o Node.js esteja instalado antes de iniciar.

# ▶️ Execução dos Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open

## Executar os testes no terminal em modo headless

npx cypress run
```

## 📂 Funcionalidades Incluídas

🔐 Validação de login automatizado

👤  Atualização de dados de perfil via formulários

🧹 Uso do Page Object Model para organização do código

📄 Dados de teste armazenados em arquivos JSON na pasta /fixtures

🛡 Estrutura de Pastas

```bash
cypress/
├── e2e/                # Casos de teste
├── fixtures/           # Dados de teste (JSON)
├── pages/              # Definições dos Page Objects
├── support/            # Configurações e utilitários 
```

## ✅ Cenários de Testes Cobridos

- [x] Login com credenciais válidas
- [x] Login com credenciais inválidas
- [x] Atualização de perfil com dados válidos
- [x] Validação de campos obrigatórios no perfi


## 🛠 Tecnologias Utilizadas
```bash
Cypress (framework de testes)
JavaScript (linguagem)
Node.js (ambiente de execução)
GitHub Actions (integração contínua - CI/CD)
```

### 📌 Informações Adicionais

Este é um projeto de aprendizado com o objetivo de aprimorar habilidades em testes automatizados com Cypress e aplicar práticas profissionais como estrutura modular de testes e pipelines de integração contínua.

## 🤝  Contribuições

Contribuições são bem-vindas! Para mudanças significativas, por favor abra uma issue primeiro para discutir o que você gostaria de modificar.