import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>

      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/register" element={ <Register />} /> 
          <Route path="/login" element={   <Login />} /> 
       
        
      
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
