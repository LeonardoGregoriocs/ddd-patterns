"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Costumer {
    constructor(id, name, address) {
        this._active = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._id.length === 0) {
            throw new Error("ID is required");
        }
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a costumer");
        }
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    setAddress(address) {
        this._address = address;
    }
}
