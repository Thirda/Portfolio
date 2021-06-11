import Home from './components/home';
import Presentation from "./components/Home/presentation/presentation";
import Parcours from './components/Home/parcours/parcours';
import Skills from './components/Home/skills/skills.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <div className="pages">
      <Presentation />
      < Skills />
      < Parcours />
      </div>
    </div>
  );
}

export default App;
