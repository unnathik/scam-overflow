import {useState} from 'react';
import {BsSearch, BsChatRight, BsArrowLeftShort} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi"
import { FiHome } from "react-icons/fi"
import Forum from './Forum';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Scam from './Scam';

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