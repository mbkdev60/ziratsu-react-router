import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
