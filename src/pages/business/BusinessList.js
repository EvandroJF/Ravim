import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// components
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import MaterialTable from 'material-table';
import Table from '../../components/Table';
// material
import tableIcons from '../../components/MaterialTableIcons';
import Page from '../../components/Page';
import { getBusiness, deleteBusiness } from '../../api';

moment.locale('pt-br');

export default function BusinessList() {
  const [getLista, setListBusiness] = useState([]);
  useEffect(() => {
    async function fetch() {
      const response = await getBusiness();
      setListBusiness(response);
    }
    fetch();
  }, []);

  const deleteDataTable = async (id) => {
    try {
      const response = await deleteBusiness(id);
      setListBusiness(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <Page title="Lista de Empresas">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Lista Empresas
        </Typography>
        {console.log(getLista)}
        <Table
          getLista={getLista}
          coluna={[
            { title: 'Razão Social', field: 'name' },
            { title: 'CNPJ', field: 'identifier' },
            { title: 'Cidade', field: 'city' },
            { title: 'Distrito', field: 'state_district' },
            { title: 'E-mail', field: 'email' },
            { title: 'Telefone', field: 'phone1' },
          ]}
        />
      </Container>
    </Page>
  );
}
