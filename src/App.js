import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import './App.css';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import Perfume from './pages/ProductPage/Perfume';
import Diffuser from './pages/ProductPage/Diffuser';
import New from './pages/ProductPage/New';
import Footer from './component/Footer';
import Header from './component/Header';
import ToolBar from "./component/ToolBar";

//Router: url과 컴포넌트 연결. 페이지 이동.
function App() {
  return (
    <CookiesProvider>
      <Router>
        <Header />
        <ToolBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/diffuser" element={<Diffuser />}/>
          <Route path="/perfume" element={<Perfume />}/>
          <Route path="/new" element={<New />}/>
        </Routes>
        <Footer />
      </Router>
    </CookiesProvider>

  );

}

export default App;
