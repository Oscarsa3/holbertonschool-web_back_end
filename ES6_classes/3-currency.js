/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get method to code
  get code() {
    return this._code;
  }

  // set method code
  set code(value) {
    this._name = value;
  }

  // new method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
