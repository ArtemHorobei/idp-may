import React from 'react';

import {
  Animal,
  Cat,
} from '../../utils/inheritance(functional)';

import '../../App.css';

const FunctionalInheritance = () => {

  const animals = [];
  animals.push(new Animal('Snake', 'lizards', 12));
  animals.push(new Cat('Cat', 'mammals', 2, 'Murka'));
  animals.push(new Animal('Spider', 'arachnoid', 4));

  return (
    <div style={{ width: '70%' }}>
        <div className="App-title">Functional inheritance</div>
        <div className="App-content">
            {animals.map(animal => (
                <div>
                    <div>{animal.getName()}</div>
                    <div>{animal.getType()}</div>
                    <div>{animal.getAge()}</div>
                    <div>{typeof animal.getNickname !== "undefined" && animal.getNickname()}</div>
                </div>
            ))}
        </div>

        <div className="App-title">Functional static method of compare of types</div>
        <div className="App-content">
            <div>
                <div>{animals[0].getType()}</div>
                <div>{animals[1].getType()}</div>
                {Animal.compareType(animals[0].getType(), animals[1].getType())}
            </div>
            <div>
                <div>{animals[1].getType()}</div>
                <div>{animals[2].getType()}</div>
                {Animal.compareType(animals[1].getType(), animals[2].getType())}
            </div>
            <div>
                <div>{animals[0].getType()}</div>
                <div>{animals[2].getType()}</div>
                {Animal.compareType(animals[0].getType(), animals[2].getType())}
            </div>
            <div>
                <div>{animals[0].getType()}</div>
                <div>{animals[0].getType()}</div>
                {Animal.compareType(animals[0].getType(), animals[0].getType())}
            </div>
        </div>
    </div>
  );
};

export default FunctionalInheritance;
