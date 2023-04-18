import React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'resumo',
      headerName: 'Resumo',
      width: 500,
      editable: true,
    },
    {
      field: 'dataCriacao',
      headerName: 'Data de Criação',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'Resolvido, pausado, cancelado.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Em Andamento' },
    { id: 2, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Cancelado' },
    { id: 3, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Em Andamento' },
    { id: 4, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 5, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 6, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 7, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 8, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Em Andamento' },
    { id: 9, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 10, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Resolvido' },
    { id: 11, resumo: 'Incidente problemático', dataCriacao: '17/04/2023', status: 'Em Andamento' },

  ];

export default function NotificacaoTable() {
    return (
        <Box sx={{ height: 420, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 6,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
    );
}
