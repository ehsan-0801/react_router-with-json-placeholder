import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFOund/NotFound';
import Posts from './Components/Posts/Posts';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home /> }>
        </Route>
        <Route path="/friends" element={ <Friends /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/friend/:friendId" element={ <FriendDetail /> }></Route>
        <Route path="/posts/" element={ <Posts /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </div >
  );
}

export default App;
