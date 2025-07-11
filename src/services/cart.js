// adicionar item
async function addItemToCart(userCart, item) {
  userCart.push(item);
}

// deletar item
async function delItemToCart(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remover -1 item
async function removeItemToCart(userCart, item) {
  const indexFound = userCart.findIndex(
    (product) => product.name === item.name
  );
  if (indexFound == -1) {
    console.log("Item não encontrado");
    return;
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
  }
}

// calcular total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(" \nShopee Cart TOTAL is: ");
  console.log(`Total: ${result}`);
}

async function displayCart(userCart) {
  console.log("\nShopee Cart list ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal: ${item.subtotal()}`
    );
  });
}

export {
  addItemToCart,
  delItemToCart,
  removeItemToCart,
  calculateTotal,
  displayCart,
};
