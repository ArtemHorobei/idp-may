function MetaHuman(name, health, kick, weapon) {
    this._name = name;
    this._health = health;
    this._kick = kick;
    this._weapon = weapon;
    this._isDead = false;
}

MetaHuman.prototype.greet = function() {
    return `${this._name} is greeting You! And I have weapon: ${this._weapon}`;
};

MetaHuman.prototype.getDamage = function(damageValue) {
  this._health = (this._health - damageValue).toFixed(2);
  if(this._health <= 0) {
    this._isDead = true;
    this._health = 0;
  };
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
    const damageValue = this._kick * weaponBoost[this._weapon] + (Hero.gifts[this._gift] * Hero.abilities[this._ability]);
    return damageValue.toFixed(2);
};

Villain.prototype.destroyWorld = function() {
  const damageValue = this._kick * weaponBoost[this._weapon] + (Villain.curses[this._curse] * Villain.specials[this._special]);
  return damageValue.toFixed(2);
};

const weaponBoost = {
  'web': 1.3,
  'claws': 1.5,
  'magnet': 2,
  'infinite glove': 9.9,
};

Hero.gifts = {
  'gift1': 1.12,
  'gift2': 1.08,
};

Hero.abilities = {
  'ability1': 1.02,
  'ability2': 1.18,
};

Villain.curses = {
  'curse1': 1.16,
  'curse2': 1.01,
};

Villain.specials = {
  'special1': 1.22,
  'special2': 1.1,
};
