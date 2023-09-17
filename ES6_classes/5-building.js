/* eslint-disable */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // get method
  get sqft() {
    return this.sqft;
  }

  // set method
  set sqft(value) {
    this._sqft = value;
  }

  // method
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
