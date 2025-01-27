import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Meals from './pages/Meals';
import ServiceClient from './pages/ServiceClient';
import Chatbot from './pages/chatbot';
// Import any new components here

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Meals" element={<Meals />} />
        <Route path="/ServiceClient" element={<ServiceClient />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        {/* Add new routes here if necessary */}
      </Routes>
    </div>
  );
}

export default App;
