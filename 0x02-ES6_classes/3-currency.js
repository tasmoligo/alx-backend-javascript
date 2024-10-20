export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = neme;
  }
  
  get code() {
    return this._code;
  }
  set code(val) {
    this._code = val;
  }

  get name() {
    return this.name;
  }
  set name(val) {
    this._name = val;
  }

  displayFullCurrency() {
    return `${this.neme} (${this.code})`;
  }

}