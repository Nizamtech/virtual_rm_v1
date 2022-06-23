import './App.css'
import React, { Component }  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Shared/Layout/Layout';
import Sidebar from './components/Shared/Sidebar';
function App() {
  return (
    <BrowserRouter>
    <div >
<h1 className=' text-red-600 font-bold '>Sidebar Fixed</h1>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
  Button
</button>
<Layout>
<Routes>
      <Route path="/" element={<Dashboard />}>
       
      </Route>
    </Routes>
</Layout>

    </div>
    </BrowserRouter>
  );
}

export default App;
