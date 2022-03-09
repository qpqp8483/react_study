import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


const App = () => {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
    </div>
  );
}

export default App;
