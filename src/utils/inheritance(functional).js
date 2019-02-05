export function Animal(name, type, age) {
    this._name = name;
    this._type = type;
    this._age = age;

    this.setName = (value) => this._name = value;

    this.setType = (value) => this._type = value;

    this.setAge = (value) => this._age = value;

    this.getName = () => this._name;

    this.getType = () => this._type;

    this.getAge = () => this._age;
}

// static methods
Animal.compareType = function(firstType, secondType) {
    return firstType === secondType
        ? 'These animals are of the same type'
        : 'These animals are not of the same type';
};

export function Cat(name, type, age, nickname) {
    Animal.call(this, name, type, age);

    this._nickname = nickname;

    this.getNickname = () => this._nickname;
}
