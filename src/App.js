
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';

import Home from './Pages/Home/Home/Home';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <div style={{ width: "100px", height: "1500px", backgroundColor: "red" }}></div>
    </div>
  );
}

export default App;
