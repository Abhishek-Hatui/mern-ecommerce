import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Homescreen/>}></Route>
          <Route path="/product/:id" element={<Productdescscreen/>}></Route>
        </Routes>
      </Router>

      

    </div>
  );
}

export default App;
