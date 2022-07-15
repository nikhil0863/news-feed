
import './App.css';
import Navbar from './Navbar';
import News from './News';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <>
     <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<News key={"general"} country="in" category={"general"}  />}/>
    <Route exact path="/business" element={<News key={"business"} country="in" category={"business"} />}/>
    <Route exact path="/sports" element={<News key={"sports"} country="in" category={"sports"} />}/>
    <Route exact path="/science" element={<News key={"sciencel"} country="in" category={"science"} />}/>
    <Route exact path="/entertainment" element={<News key={"entertainment"} country="in" category={"entertainment"} />}/>
    <Route exact path="/health" element={<News key={"health"} country="in" category={"health"} />}/>
    <Route exact path="/technology" element={<News key={"technology"} country="in" category={"technology"} />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
