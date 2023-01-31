import './App.css';
import Home from './Componets/Home';
import Header from './Componets/Header';
import About from './Componets/About';
import Contect from './Componets/Contect';
import Instagram from './Componets/Instagram';
import Mail from './Componets/Mail';
import UserDetails from './Componets/UserDetails';
import Error from './Componets/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
    <Header />  
    <Routes>

          <Route path='/'>
          <Route index element={<Home />} />
          <Route  path="/app" element={<Home />}/>
          </Route>
          <Route  path='/app/:userId' element={<UserDetails />}/>
            
          <Route path="/about" element={<About />} />

          <Route path="/contect" element={<Contect />}>
          <Route index element={<Instagram />}></Route>
          <Route path='Instagram' element={<Instagram />}></Route>
          <Route path='Mail' element={<Mail />}></Route>
          </Route>

          <Route path="*" element={<Error />} />
            
        </Routes>
    </div>
    </Router>
  ); 
}

export default App;
