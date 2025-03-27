import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Perfume from './pages/ProductPage/Perfume';
import Diffuser from './pages/ProductPage/Diffuser';
import New from './pages/ProductPage/New';

//Router: url과 컴포넌트 연결. 페이지 이동.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage" element={<Mypage />}/>
        <Route path="/diffuser" element={<Diffuser />}/>
        <Route path="/perfume" element={<Perfume />}/>
        <Route path="/new" element={<New />}/>
      </Routes>
    </Router>

  );

}

export default App;
