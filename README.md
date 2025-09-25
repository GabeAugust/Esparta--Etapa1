# Esparta Etapa 1

## Utilidades de strings e agrupamento de pessoas por cidade

Este projeto contém três funções utilitárias em **TypeScript**:

1. **`groupByCity`** – Agrupa uma lista de pessoas pela cidade, retornando um objeto em que cada chave é uma cidade e o valor é um array com os nomes das pessoas daquela cidade.

2. **`canFormPalindrome`** – Verifica se é possível formar um palíndromo a partir de qualquer permutação dos caracteres de uma string, ignorando maiúsculas, minúsculas, espaços e pontuação.

3. **`standardizeNames`** – Normaliza nomes em **Title Case**, garantindo que a primeira letra de cada palavra seja maiúscula, o restante minúsculo, e removendo espaços extras.

Todas as funções são acompanhadas de **testes automatizados usando Jest** para garantir corretude e robustez.


## Funcionalidade

### 1. `groupByCity(people: Person[]): Record<string, string[]>`

Agrupa uma lista de pessoas (`Person`) pela cidade.

**Entrada:** Array de objetos do tipo `Person`:

```ts
type Person = { name: string; city: string };
```

### 2. `canFormPalindrome(text: string): boolean `
Verifica se é possível formar um palíndromo a partir de alguma permutação dos caracteres da string.

**Entrada**: Uma string.

**Saída***: true ou false.

#### Regras:
- Ignora espaços, pontuação e maiúsculas/minúsculas.
- Pode lidar com letras acentuadas como caracteres válidos distintos.
- String vazia retorna true.


### 3. `standardizeNames(names: string[]): string[]`

Normaliza nomes em Title Case (primeira letra maiúscula e o restante minúsculo), removendo espaços extras.

**Entrada**: Array de strings.
**Saída**: Array de strings padronizado.

#### Regras:

- Mantém strings vazias como estão.

- Normaliza múltiplos espaços internos e externos.

- Mantém a ordem original do array.

---


## Instalação 

**1.**  Clone o repositório:
```bash
git clone https://github.com/GabeAugust/Esparta--Etapa1.git
```

**2.** Instale as dependências:

```bash
npm install
```

---

### Testes 
Os testes são feitos com **Jest**.

- Para rodar todos os testes:
```bash
npm test
```
- Para rodar em modo watch (auto-atualização):

```bash
npm run test:watch
```

