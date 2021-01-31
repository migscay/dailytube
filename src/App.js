import './App.css';
import Header from './Header.js';
import SideBar from './SideBar.js';
import RecommendedVideos from './RecommendedVideos.js';
import SearchPage from './SearchPage.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';

function App() {
  return ( 
    <div className="app">
      <Header />
      {/* navigation */}
      <Router>
        <Switch>
          {/* Home page */}
          <Route exact path="/">
            <div className="app__page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
          {/* search page */}
          <Route path="/search">
            <div className="app__page">
              <SideBar />
              <SearchPage />
              {/* <RecommendedVideos /> */}
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <div className="app__page">
        <SideBar />
        <RecommendedVideos />
      </div> */}
    </div>
  );
}

export default App;
