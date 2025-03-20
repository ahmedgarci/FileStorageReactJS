import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import './App.css';
import Main from "./Pages/Main";
import AuthenticationPage from "./Pages/AuthenticationPage";
import { ProtectedRoute } from "./Types/Common/RouteProtection";
import { AuthResponse } from "./Types/Responses/AuthType";
import { useSelector } from "react-redux";
import { RootState } from "./State/Store";

function App() {
  const user:AuthResponse = useSelector((state:RootState)=>state.auth)

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />        
        <Route path="/main" element={
          <ProtectedRoute user={user}>
            <Main/>
          </ProtectedRoute>}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
