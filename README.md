# 🛒 Projeto Shopee Cart – Lógica de Carrinho em Node.js

Este projeto simula a lógica de um carrinho de compras inspirado na Shopee, feito totalmente em **Node.js** puro, focando em conceitos de programação e estrutura de dados.

## 📦 Funcionalidades

- ✅ Adicionar itens ao carrinho  
- ✅ Remover itens do carrinho  
- ✅ Atualizar a quantidade de itens  
- ✅ Calcular subtotal e total  
- ✅ Aplicar descontos manuais

> O objetivo é reproduzir a experiência de um carrinho de e-commerce, sem frameworks ou bibliotecas externas.

## 🧠 Aprendizados

Neste projeto, pratiquei:

- Manipulação de arrays e objetos em JavaScript
- Lógica condicional e funções puras
- Organização modular de código em Node.js
- Simulação de regras de negócio

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/DenilsonTorres/project-shopee-cart.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd project-shopee-cart
   ```

3. Execute o projeto:
   ```bash
   node index.js
   ```

## 📁 Estrutura do Projeto

```
project-shopee-cart/
├── src/
│   └── cart.js        # Lógica principal do carrinho
├── index.js           # Arquivo para testes manuais
├── README.md          # Este arquivo
```

## 💡 Exemplo de Uso

```js
const Cart = require('./src/cart');

const cart = new Cart();
cart.addItem({ id: 1, name: 'Camisa', price: 49.90 }, 2);
cart.addItem({ id: 2, name: 'Boné', price: 35.00 }, 1);
cart.removeItem(2);
console.log('Total do carrinho:', cart.getTotal());
```

## 📌 Próximos passos

- [ ] Implementar cupons de desconto por código  
- [ ] Adicionar cálculo de frete  
- [ ] Melhorar feedback dos métodos no console  

---

### 👨‍💻 Autor

**Denilson Torres**  
🎓 Bootcamp Node.js – DIO  
🔗 [GitHub](https://github.com/DenilsonTorres)

> Feito com 💻, ☕ e muita vontade de aprender.
