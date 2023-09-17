/* eslint-disable */
export default class Building {
  constructor(sqft) { 
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  // get method
  get sqft() {
    return this.sqft;
  }

  // set method
  set sqft(value) {
    this._sqft = value;
  }

  // new method
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
