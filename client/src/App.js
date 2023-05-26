import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import { UserProvider } from './context/user';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
