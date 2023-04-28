import React, { Fragment } from "react";
import { Button } from '@mui/material';
import BarraInicialApp from '../components/BarraInicialApp';
import NotificacaoTable from '../components/NotificacaoTable';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadNotificacao from "./CadNotificacao";

export default function Home () {
    return (     
        <Router>
            <Fragment>
            <Routes>
                <Route path="/" Component={HomePage}/>   
                <Route path="/cadNotificacao" Component={CadNotificacao}></Route>         
            </Routes>
            </Fragment>
        </Router>   
    );
}

const HomePage = () => (
    <Fragment>
        <BarraInicialApp/>
        <br/>
        <NotificacaoTable/> 
        <br/>
        <Button type="button" variant="contained" color="success" style={{display: 'flex', marginLeft: '80%'}}><Link to="/cadNotificacao">Cadastrar</Link></Button>
    </Fragment>
)



