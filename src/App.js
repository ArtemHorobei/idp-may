import React  from 'react';
import logo from './logo.svg';

// import ClassesInheritance from './components/Classes/classesInheritance';
// import FunctionalInheritance from './components/Functional/functionalInheritance';
import MetaHumanGame from './components/Game/metaHumanGame';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/*<ClassesInheritance />*/}
      {/*<FunctionalInheritance />*/}
      <MetaHumanGame />
    </header>
  </div>
);

export default App;
