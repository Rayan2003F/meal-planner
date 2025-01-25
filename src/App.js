import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import Brand from './pages/Brand';
import Product from './pages/Product';
import ServiceClient from './pages/ServiceClient';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Brand" element={<Brand/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/ServiceClient" element={<ServiceClient/>} />
      </Routes>
</div>

  );
}

export default App;
