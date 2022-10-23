import Forum from './Forum';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Scam from './Scam';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scam />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  )
}

export default App;