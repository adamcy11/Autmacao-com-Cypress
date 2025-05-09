#  Cenários de Teste – Funcionalidade de Login

## 1.  Objetivo
Este documento tem como objetivo descrever os **casos de teste para a funcionalidade de login** do sistema.  
Os testes são projetados para verificar se o processo de autenticação está funcionando corretamente, cobrindo tanto credenciais válidas quanto inválidas.



## 2.  Escopo

Os testes abrangem a funcionalidade de **login com usuário e senha**, validando os seguintes cenários:

- Login com credenciais válidas  
- Login com senha incorreta  
- Login com usuário inválido  
- Login com campos em branco  
- Redirecionamento após login bem-sucedido



## 3.  Ambiente de Teste

| Componente           | Descrição                        |
|----------------------|----------------------------------|
| Sistema Operacional  | Windows 10, macOS                |
| Navegadores          | Google Chrome, Mozilla Firefox, Microsoft Edge |
| Versão do Sistema    | v1.2.0                           |
| Ambiente             | Desenvolvimento (`dev`) / Homologação (`staging`) |



## 4.  Abordagem de Teste

Os testes serão realizados utilizando:

- **Testes manuais**
- **Testes automatizados com Cypress**

O objetivo é garantir a **cobertura de todos os fluxos do login**, testando diferentes tipos de entrada e suas respostas esperadas, com foco em estabilidade e segurança.



## 5.  Suposições e Dependências

- A funcionalidade de login já está implementada e conectada ao banco de dados de usuários.
- O sistema de autenticação permite validação de usuários com credenciais armazenadas.
- Os testes não dependem de funcionalidades externas, mas o login está **integrado à base de dados principal** do sistema.

## 6.  Cenários e Casos de Teste – Login

**Software:** orange HRM

**QA responsável:** Arthur Adamcy de Souza



## 🔐 Cenário 01: Fazer Login

**ID do Cenário:** C-001  
**Descrição:** Validar o login do usuário 



### ✅ Caso de Teste 01: Login com dados válidos

| Campo             | Informação                                     |
|-------------------|------------------------------------------------|
| **ID**            | C01-CT01                                       |
| **Descrição**     | O usuário fornece dados válidos no login       |
| **Prioridade**    | Alta                                           |
| **Tipo de Teste** | Funcional                                      |

#### 🔧 Pré-condições
- O usuário deve ter uma conta cadastrada
- Estar na página de login
- Ter credenciais válidas

#### ▶️ Passos
1. Acessar a página de login  
2. Preencher todos os campos corretamente  
3. Clicar em “Login”

#### 🎯 Resultado Esperado
- Login efetuado com sucesso, redirecionando para o menu principal

#### ✔️ Critérios de Aceitação
- Login permitido apenas com credenciais válidas  
- Redirecionamento automático para o dashboard   
- Sem mensagens de erro visíveis após o login  
- Elementos personalizados exibidos (ex: nome do usuário)  
- Acesso liberado a rotas protegidas  
- Token de sessão armazenado com sucesso

#### 🔄 Pós-condições
- Usuário autenticado e com sessão ativa no sistema

#### 🧪 Dados de Teste
| Usuário        | Senha         | Status  |
|----------------|---------------|---------|
| **válido**     | **válido**    | Sucesso |

#### 📸 Evidência(s)
(Anexar imagem ou vídeo da execução do teste)

---

## ❌ Cenário 02: Login com dados inválidos

**ID do Cenário:** C-002  
**Descrição:** Verificar se o sistema bloqueia o login com diferentes condições inválidas

---

### 🚫 Caso de Teste 02: Login com dados inválidos

| Campo             | Informação                                      |
|-------------------|-------------------------------------------------|
| **ID**            | C01-CT02                                        |
| **Descrição**     | O usuário fornece dados inválidos no login      |
| **Prioridade**    | Alta                                            |
| **Tipo de Teste** | Funcional                                       |

#### 🔧 Pré-condições
- O usuário pode ou não ter uma conta  
- Estar na página de login  
- Informar credenciais inválidas

#### ▶️ Passos
1. Acessar a página de login  
2. Preencher todos os campos com dados incorretos  
3. Clicar em “SIGN IN”

#### 🎯 Resultado Esperado
- Login **não realizado**  
- Exibição da mensagem: **"Username or password is invalid"**

#### ❗ Critérios de Aceitação
- Mensagem de erro clara ao inserir dados incorretos  
- Autenticação não deve ser concluída  
- Usuário permanece na tela de login  
- Campos devem manter os dados inseridos, exceto em branco  
- Nenhuma sessão iniciada

#### 🔄 Pós-condições
- Nenhum dado foi alterado no sistema  
- Usuário não autenticado  
- Sistema pronto para nova tentativa de login

#### 🧪 Dados de Teste
| Usuário        | Senha         | Status  |
|----------------|---------------|---------|
| **inválido**   | **inválido**  | Sucesso (falha esperada) |

#### 📸 Evidência(s)
(Anexar imagem ou vídeo da execução do teste)
