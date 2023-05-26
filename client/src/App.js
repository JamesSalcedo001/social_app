import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import { UserProvider } from './context/user';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
