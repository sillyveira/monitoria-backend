import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Module1 from './pages/Module1';
import './App.css'
import Module2 from './pages/Module2';
// import Module3 from './pages/Module3';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Module1 />} />
          <Route path="/modulo1" element={<Module1 />} />
          <Route path="/modulo2" element={<Module2 />} />
          {/* <Route path="/modulo3" element={<Module3 />} /> */}
        </Routes>
      </main>
    </div>
  );
}
