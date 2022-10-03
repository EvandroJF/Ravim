import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';

// material
import { Card, Container, Typography, TextField, FormLabel, Grid, InputLabel, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Iconify from '../components/Iconify';

// components
import Page from '../components/Page';

export default function Vehicle() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: 'USD',
      label: 'Honda',
    },
    {
      value: 'EUR',
      label: '2022',
    },
    {
      value: 'BTC',
      label: 'Altomatico',
    },
    {
      value: 'JPY',
      label: 'Sedan',
    },
    {
      value: 'JPY',
      label: 'Custo com abastecimento',
    },
  ];

  const alertOpen = false;
  return (
    <Page title="usuário">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Criar Novo usuário
        </Typography>
        {alertOpen ? (
          <Alert
            action={
              <Button
              // onClick={() => setalertOpen(false)} color="inherit" size="small"
              >
                Fechar
              </Button>
            }
            variant="filled"
            severity="error"
          >
            Error ao exibir informações do usuário
          </Alert>
        ) : null}

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary>
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Sobre</Typography>
                  {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <form>
                    <Grid container>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Nome:</InputLabel>
                        <TextField
                          helperText=""
                          hiddenLabel
                          defaultValue={'item.name'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">E-mail:</InputLabel>
                        <TextField
                          id="filled-select-currency"
                          disabled
                          hiddenLabel
                          defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Empresa:</InputLabel>
                        <TextField
                          id="filled-select-currency"
                          disabled
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Cargo:</InputLabel>

                        <TextField
                          id="filled-select-currency"
                          disabled
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          defaultChecked={'BTC'}
                          fullWidth
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value} defaultChecked={'BTC'}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Informações pessoais</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
                    egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <Typography sx={{ padding: 3, width: '33%', height: '10%', flexShrink: 0 }}>Informações</Typography>
              <Grid container style={{ padding: 10 }}>
                <Grid item xs={12} sm={12} md={12} sx={{ padding: 1 }}>
                  <InputLabel htmlFor="filled-adornment-password">Nome:</InputLabel>
                  <TextField
                    value={''}
                    onChange={handleChange2}
                    helperText=""
                    hiddenLabel
                    defaultValue="Honda"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{ padding: 1 }}>
                  <InputLabel htmlFor="filled-adornment-password">CPF:</InputLabel>
                  <TextField
                    value={''}
                    onChange={handleChange2}
                    helperText=""
                    hiddenLabel
                    defaultValue="Honda"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{ padding: 1 }}>
                  <InputLabel htmlFor="filled-adornment-password">Categoria:</InputLabel>
                  <TextField
                    value={''}
                    onChange={handleChange2}
                    helperText=""
                    hiddenLabel
                    defaultValue="Honda"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
