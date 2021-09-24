import Home from './components/home';
import Presentation from "./components/Home/presentation/presentation";
import Parcours from './components/Home/parcours/parcours';
import Skills from './components/Home/skills/skills.jsx';
import Portfolio from './components/Home/portfolio/portfolio';
// import Contact from './components/Home/contact/contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <div className="pages">
      <Presentation />
      < Skills />
      < Parcours />
      < Portfolio />
      {/* < Contact /> */}
      </div>
    </div>
  );
}

export default App;
