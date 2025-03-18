import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import './App.css';
import Main from "./Pages/Main";
import AuthenticationPage from "./Pages/AuthenticationPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />        
        <Route path="/main" element={<Main/>}  />
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
