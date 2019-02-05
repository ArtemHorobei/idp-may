export class Human {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    };

    set firstName(firstName) {
        this._firstName = firstName;
    };

    set lastName(lastName) {
        this._lastName = lastName;
    };

    set age(age) {
        this._age = age;
    };

    get firstName() {
        return `Human has first name is ${this._firstName}`;
    };

    get lastName() {
        return `Human has last name is ${this._lastName}`;
    };

    get age() {
        return `Age of ${this._firstName} is ${this._age}`
    }

    static compareAge(firstPerson, secondPerson) {
        if (firstPerson._age === secondPerson._age) return 'They are equal';
        return firstPerson._age > secondPerson._age ? `${firstPerson._firstName} is older` : `${secondPerson._firstName} is older`;
    }
}

export class Developer extends Human {
    constructor(firstName, lastName, age, level, company) {
        super(firstName, lastName, age);
        this._level = level;
        this._company = company;
        this._position = 'Developer';
    };

    get level() {
        return `This developer has level: ${this._level}`;
    }

    get company() {
        return `This developer works in ${this._company}`;
    }

    get position() {
        return `This worker has position ${this._position}`;
    };
}

export class Sales extends Human {
    constructor(firstName, lastName, age, status, department) {
        super(firstName, lastName, age);
        this._status = status;
        this._department = department;
        this._position = 'Sales';
    };

    get status() {
        return `This sales is ${this._status}`;
    }

    get department() {
        return `This sales works in ${this._department}`;
    }

    get position() {
        return `This worker has position ${this._position}`;
    };
}
