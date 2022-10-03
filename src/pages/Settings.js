import * as React from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material
import { Container, Typography, Grid } from '@mui/material';

import { AppWidgetConfig } from '../sections/@dashboard/app';

// components
import Page from '../components/Page';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <Page title="Configurações">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Configurações
        </Typography>

        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            onClick={() => navigate('/dashboard/settings/userinfo', { state: { id: 7, color: 'green' } })}
          >
            <AppWidgetConfig style={{ cursor: 'pointer' }} title="Informações do perfil" icon={'bxs:user-circle'} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Segurança"
              color="white"
              icon={'ic:outline-lock-reset'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Preferencia"
              color="primary"
              icon={'clarity:settings-solid'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Contratos"
              color="info"
              icon={'mdi:file-document-edit-outline'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Suporte Stalebu"
              color="primary"
              icon={'bx:support'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Cadatro de usuario"
              color="primary"
              icon={'heroicons-solid:users'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
