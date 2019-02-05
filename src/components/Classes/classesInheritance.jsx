import React from 'react';

import {
  Developer,
  Human,
  Sales,
} from '../../utils/inheritance(class)';

import '../../App.css';

const ClassesInheritance = () => {

  const persons = [];
  persons.push(new Human('Artem', 'Horobei', 24));
  persons.push(new Developer('Vlad', 'Vasilenko', 23, 'Middle', 'Yalantis'));
  persons.push(new Sales('Ilya', 'Markin', 22, 'Presents', 'HR department'));

  return (
    <div style={{ width: '70%' }}>
        <div className="App-title">Classes inheritance</div>
        <div className="App-content">
            {persons.map(person => (
                <div>
                    <div>{person.firstName}</div>
                    <div>{person.lastName}</div>
                    <div>{person.age}</div>
                    <div>{person.company}</div>
                    <div>{person.position}</div>
                    <div>{person.department}</div>
                    <div>{person.level}</div>
                    <div>{person.status}</div>
                </div>
            ))}
        </div>
        <div className="App-title">Classes static method of compare of ages</div>
        <div className="App-content">
            <div>
                <div>{persons[0].age}</div>
                <div>{persons[1].age}</div>
                {Human.compareAge(persons[0], persons[1])}
            </div>
            <div>
                <div>{persons[1].age}</div>
                <div>{persons[2].age}</div>
                {Human.compareAge(persons[1], persons[2])}
            </div>
            <div>
                <div>{persons[2].age}</div>
                <div>{persons[0].age}</div>
                {Human.compareAge(persons[2], persons[0])}
            </div>
            <div>
                <div>{persons[0].age}</div>
                <div>{persons[0].age}</div>
                {Human.compareAge(persons[0], persons[0])}
            </div>
        </div>
    </div>
  );
};

export default ClassesInheritance;
