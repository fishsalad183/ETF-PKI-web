export default class CartItem {
  constructor(product, amount = 1) {
    this.product = product;
    this.amount = amount;

    this.priceIncludingDiscounts = amount * (product.discountPrice ? product.discountPrice : product.price);
  }
}
