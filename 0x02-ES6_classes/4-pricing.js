import Currency from '3-currency'

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  set amount(val) {
    this._amount = val;
  }
  get currency() {
    this._currncy = currncy;
  }
  set currency(val) {
    this._currncy = currency;
  }
  displayFullPrice() {
    return `${this.amount} ${this.currncy._name} (${this.currncy._code})`;
  }
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}