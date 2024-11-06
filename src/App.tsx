import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Wrench, Package, BarChart2 } from 'lucide-react';
import AddTool from './pages/AddTool';
import MyTools from './pages/MyTools';
import MyRentals from './pages/MyRentals';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link to="/" className="flex items-center text-gray-900 hover:text-blue-600">
                  <Home className="h-5 w-5 mr-1" />
                  <span>Início</span>
                </Link>
                <Link to="/my-tools" className="flex items-center text-gray-900 hover:text-blue-600">
                  <Wrench className="h-5 w-5 mr-1" />
                  <span>Minhas Ferramentas</span>
                </Link>
                <Link to="/my-rentals" className="flex items-center text-gray-900 hover:text-blue-600">
                  <Package className="h-5 w-5 mr-1" />
                  <span>Meus Aluguéis</span>
                </Link>
                <Link to="/reports" className="flex items-center text-gray-900 hover:text-blue-600">
                  <BarChart2 className="h-5 w-5 mr-1" />
                  <span>Relatórios</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<MyTools />} />
            <Route path="/my-tools" element={<MyTools />} />
            <Route path="/add-tool" element={<AddTool />} />
            <Route path="/my-rentals" element={<MyRentals />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;