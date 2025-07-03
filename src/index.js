import * as cartServices from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartServices.addItemToCart(myCart, item1);
await cartServices.addItemToCart(myCart, item2);
await cartServices.displayCart(myCart);

// await cartServices.delItemToCart(myCart, item2.name);
// await cartServices.delItemToCart(myCart, item1.name);


await cartServices.calculateTotal(myCart);
