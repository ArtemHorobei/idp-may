export default function MetaHuman(name, health, kick, weapon) {
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
