import './App.css';
import BarraInicialApp from './components/BarraInicialApp';
import NotificacaoTable from './components/NotificacaoTable';
import React from "react";


function App() {
  return (
    <div className="App">
      <BarraInicialApp/>
      <NotificacaoTable/>
    </div>
  );
}

export default App;
