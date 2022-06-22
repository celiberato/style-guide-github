import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Dashboard from './components/Dashboard';
import PortletItem from './components/Portlet';

function App() {
  return (
    <div className="App">
      <PortletItem color={'red'}></PortletItem>
      <Dashboard title="Meu Painel de Controle" />
    </div>
  );
}

export default App;
