import MetaHuman from './metaHuman.js';
import weaponBoost from './constants.js';

export default function Hero(name, health, kick, weapon, gift, ability) {
    MetaHuman.call(this, name, health, kick, weapon);

    this._gift = gift;
    this._ability = ability;
}

Hero.prototype = Object.create(MetaHuman.prototype);

Hero.prototype.saveWorld = function() {
    const damageValue = this._kick * weaponBoost[this._weapon] + (Hero.gifts[this._gift] * Hero.abilities[this._ability]);
    return damageValue.toFixed(2);
};

Hero.gifts = {
  'gift1': 1.12,
  'gift2': 1.08,
};

Hero.abilities = {
  'ability1': 1.02,
  'ability2': 1.18,
};
