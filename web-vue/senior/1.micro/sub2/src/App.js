import logo from './logo.svg';
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
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              sub2 home页
            </header>
          </div>
        }></Route>
        <Route path="/about2" element={<h1>sub2 about页</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
