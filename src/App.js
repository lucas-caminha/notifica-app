import { Button } from '@mui/material';
import './App.css';
import BarraInicialApp from './components/BarraInicialApp';
import NotificacaoTable from './components/NotificacaoTable';
import React from "react";


function App() {
  return (
    <div className="App">
      <BarraInicialApp/>
      <br/>
      <NotificacaoTable/>
      <br/>
      <Button variant="contained" color="success" style={{display: 'flex', marginLeft: '80%'}}>Cadastrar</Button>
    </div>
  );
}

export default App;
