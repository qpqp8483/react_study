import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';



const App = () => {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필</Link></li>
        <li><Link to="/history">history 예제</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
    </div>
  );
}

export default App;
