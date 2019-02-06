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
            new Hero('Logan', 100, 4, 'claws', 'gift1', 'ability1'),
            // new Hero('Spider-man', 80, 2, 'web', 'gift2', 'ability2'),
            new Villain('Magneto', 60, 8, 'magnet', 'curse1', 'special1'),
            // new Villain('Thanos', 99, 14, 'infinite glove', 'curse2', 'special2'),
        ];

        this.state = { characters };
    }

    handleKickHero = () => {
      const { characters } = this.state;
      const [hero, villain] = characters;
      hero.getDamage(villain.destroyWorld());
      this.setState({ characters });
    };

    handleKickVillain = () => {
      const { characters } = this.state;
      const [hero, villain] = characters;
      villain.getDamage(hero.saveWorld());
      this.setState({ characters });
    };

    render() {
        const { characters } = this.state;
        const [hero, villain] = characters;

        return (
            <div style={{ width: '70%' }}>
                <div className="App-title">Meta human battle</div>
                <div className="App-content">
                  <div>
                    <div>{hero.greet()}</div>
                    <div>Health: {hero._health}</div>
                    <button
                      disabled={hero._isDead}
                      onClick={this.handleKickHero}
                    >
                      Atack
                    </button>
                  </div>
                  <div>
                    <div>{villain.greet()}</div>
                    <div>Health: {villain._health}</div>
                    <button
                      disabled={villain._isDead}
                      onClick={this.handleKickVillain}
                    >
                      Atack
                    </button>
                  </div>
                </div>
            </div>
        );
    }
}

export default MetaHumanGame;
