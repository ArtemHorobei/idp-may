function MetaHuman(name, health, kick, weapon) {
    this._name = name;
    this._health = health;
    this._kick = kick;
    this._weapon = weapon;
}

MetaHuman.prototype.greet = function() {
    return `${this._name} is greeting You! And I have weapon: ${this._weapon}`;
};

export function Hero(name, health, kick, weapon, gift, ability) {
    MetaHuman.call(this, name, health, kick, weapon);

    this._gift = gift;
    this._ability = ability;
}

export function Villain(name, health, kick, weapon, curse, special) {
    MetaHuman.call(this, name, health, kick, weapon);

    this._curse = curse;
    this._special = special;
}

Hero.prototype = Object.create(MetaHuman.prototype);
Villain.prototype = Object.create(MetaHuman.prototype);

Hero.prototype.saveWorld = function() {
    return `${this._name} save world with help of ${this._ability}`;
};

Villain.prototype.destroyWorld = function() {
    return `${this._name} destroy world with help of ${this._special}`;
};
