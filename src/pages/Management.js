import * as React from 'react';

// material
import { Container, Typography, Grid } from '@mui/material';

import { AppWidgetConfig } from '../sections/@dashboard/app';

// components
import Page from '../components/Page';

export default function Management() {
  return (
    <Page title="Configurações">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Gestão de E-social
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig style={{ cursor: 'pointer' }} title="Tabelas" color="primary" icon={'carbon:data-table'} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Lista de NR"
              color="primary"
              icon={'clarity:list-outline-badged'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig style={{ cursor: 'pointer' }} title="Eventos" color="primary" icon={'carbon:event'} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetConfig
              style={{ cursor: 'pointer' }}
              title="Regras "
              color="primary"
              icon={'carbon:subnet-acl-rules'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
