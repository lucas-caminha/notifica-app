import React from "react";
import BarraInicialApp from '../components/BarraInicialApp';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../styles/cadNotificacao.css';
import { Box } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';


export default function CadNotificacao() {
    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div>
            <BarraInicialApp/>
            <br/>
            <Box sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', marginLeft: '10%'}} >
                <TextField label="Resumo" id="outlined-start-adornment" sx={{ width: '100ch' }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Data de início" format="DD/MM/YYYY" sx={{marginTop: '1%'}}/>
                </LocalizationProvider>
                <Select sx={{marginTop: '1%'}}
                    labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"
                    value={1} onChange={handleChange} label="Status">
                        <MenuItem value={0}>Em andamento</MenuItem>
                        <MenuItem value={1}>Concluido</MenuItem>
                        <MenuItem value={2}>Cancelado</MenuItem>
                </Select>
                <Button type="button" variant="contained" color="success" style={{marginTop: '1%'}}>Cadastrar</Button>
            </Box>
        </div>
    );
}



