import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/sub2" : ""

function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Link to="/">home </Link> |
      <Link to="/about2">about</Link>
      <Routes>
        <Route path="/" exact element={
          <div className="App">
            <h1>这里是sub2项目home页面，页面基于react开发</h1>
          </div>
        }></Route>
        <Route path="/about2" element={<h1>这里是sub2项目about页面，页面基于react开发</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
