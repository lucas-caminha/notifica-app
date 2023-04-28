import React from "react";
import BarraInicialApp from '../components/BarraInicialApp';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../styles/cadNotificacao.css';
import { Box, Container } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function CadNotificacao() {
    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <BarraInicialApp/>
            <br/>
            <Container>
                <form onSubmit={alerte}>
                    <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', marginLeft: '10%'}} >
                        <Typography variant="h5" sx={{ mr: 2, display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
                                    }}>CADASTRO DE NOTIFICAÇÕES</Typography>
                        <br/>
                        <TextField label="Resumo" id="outlined-start-adornment" sx={{ width: '100ch' }} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Data de início" format="DD/MM/YYYY" sx={{marginTop: '1%'}}/>
                        </LocalizationProvider>
                        <Select sx={{marginTop: '1%'}}
                            labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Status"
                            value={status} onChange={handleChange}>
                                <MenuItem value={0}>Em andamento</MenuItem>
                                <MenuItem value={1}>Concluido</MenuItem>
                                <MenuItem value={2}>Cancelado</MenuItem>
                        </Select>
                        <Button type="submit" variant="contained" color="success" style={{marginTop: '1%'}}>Cadastrar</Button>
                    </Box>
                </form> 
            </Container>
        </div>
    );
}

function alerte() {
    alert("Vai cadastrar!!!");
}

