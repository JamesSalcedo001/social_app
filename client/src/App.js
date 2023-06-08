import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import { UserProvider } from './context/user';
import Login from './Login';
import Signup from './Signup';
import Posts from './Posts';
import CommentsList from "./CommentsList"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/post_list" element={<Posts/>} />
          <Route exact path="/comment_list" element={<CommentsList/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;


// links for presentation


// signup for newuser cat => https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg

// post image for newuser seal/sea lion => https://ocean.si.edu/sites/default/files/styles/photo_full/public/HawaiianMonkSeal_JamesWatt_SeaPicsCropped_0_0.jpg.webp?itok=0jQb6FSZ
