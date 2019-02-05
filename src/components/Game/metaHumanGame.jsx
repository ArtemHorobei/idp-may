import React from 'react';

import {
    Hero,
    Villain,
} from '../../utils/inheritance(prototype)';

import '../../App.css';

class MetaHumanGame extends React.Component {
    constructor(props) {
        super(props);

        const characters = [
            new Hero('Logan', 100, 4, 'Claws'),
            new Hero('Spider-man', 80, 2, 'Web'),
            new Villain('Magneto', 60, 8, 'Magnet'),
            new Villain('Thanos', 99, 14, 'Infinite glove'),
        ];

        this.state = { characters };
    }

    componentDidMount() {

    }

    render() {
        const { characters } = this.state;

        return (
            <div style={{ width: '70%' }}>
                <div className="App-title">Meta human battle</div>
                <div className="App-content">
                    {characters.map(character => (
                        <div>
                            <div>{character.greet()}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MetaHumanGame;
