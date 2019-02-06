import MetaHuman from './metaHuman.js';
import weaponBoost from './constants.js';

export default function Villain(name, health, kick, weapon, curse, special) {
    MetaHuman.call(this, name, health, kick, weapon);

    this._curse = curse;
    this._special = special;
}

Villain.prototype = Object.create(MetaHuman.prototype);

Villain.prototype.destroyWorld = function() {
  const damageValue = this._kick * weaponBoost[this._weapon] + (Villain.curses[this._curse] * Villain.specials[this._special]);
  return damageValue.toFixed(2);
};

Villain.curses = {
  'curse1': 1.16,
  'curse2': 1.01,
};

Villain.specials = {
  'special1': 1.22,
  'special2': 1.1,
};
