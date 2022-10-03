import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// components
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import MaterialTable from 'material-table';

// material
import tableIcons from './MaterialTableIcons';
import Page from './Page';

// import Page from '../../components/Page';

// import { getBusiness, deleteBusiness } from '../../src/';

moment.locale('pt-br');

export default function Table({ getLista, setListBusiness, coluna }) {
  const navigate = useNavigate();
  return (
    <MaterialTable
      title="Empresa"
      icons={tableIcons}
      // [
      //   { title: 'Nome', field: 'name' },
      //   { title: 'Cidade', field: 'city' },
      //   { title: 'Distrito', field: 'state_district', type: 'takeout_time' },
      //   { title: 'E-mail', field: 'email' },
      //   { title: 'Data de Criação', field: 'create_date' },
      // ]
      columns={coluna}
      data={getLista}
      actions={[
        {
          icon: tableIcons.History,
          tooltip: 'History',
          // onClick: (event, rowData) => handleOpen(rowData),
          // onClick: (event, rowData) => navigate('/dashboard/business/list/edit', { state: rowData }),
        },
        {
          icon: tableIcons.Edit,
          tooltip: 'Edit',
          // onClick: (event, rowData) => handleOpen(rowData),
          // onClick: (event, rowData) => navigate('/dashboard/business/list/edit', { state: rowData }),
        },
        {
          icon: tableIcons.Delete,
          tooltip: 'Delete  ',
          // onClick: (event, rowData) => deleteDataTable(rowData.id),
        },
      ]}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
}
