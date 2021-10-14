
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Pages/Home/Meals/Breakfast/Breakfast';
import Lunch from './Pages/Home/Meals/Lunch/Lunch';
import Dinner from './Pages/Home/Meals/Dinner/Dinner';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
        </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
