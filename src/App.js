import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Booking from './Booking/Booking';
import Home from './Home/Home';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/Booking" component={Booking} />
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
