import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageOne from './page/pageOne';
import PageTwo from './page/pageTwo';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={PageOne} />
        <Route exact path="/pageTwo" component={PageTwo} />
      </div>
    </Router>
  );
}

export default App;
