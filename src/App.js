
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';

import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Breakfast from './Pages/Home/Meals/Breakfast/Breakfast';
import Lunch from './Pages/Home/Meals/Lunch/Lunch';
import Dinner from './Pages/Home/Meals/Dinner/Dinner';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import Cart from './Pages/Cart/Cart';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
