import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

// material
import { Card, Container, Typography, TextField, FormLabel, Grid, InputLabel, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';

// components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';

import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

import { postBusiness } from '../../api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  minWidth: 350,
  bgcolor: 'background.paper',
  border: '2px solid #f1f1f1',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};
moment.locale('pt-br');

export default function BusinessAdd() {
  const [currency, setCurrency] = React.useState('SP');

  const select = (event) => {
    setCurrency(event.target.value);
  };

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');
  const [hodelName, sethodelName] = useState('');
  const [holderDocument, setHolderDocument] = useState('');
  const [bank, setBank] = useState('');
  const [branchNumber, setBranchNumber] = useState('');
  const [branchCheckDigit, setBranchCheckDigit] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountCheckDigit, setAccountCheckDigit] = useState('');
  const [typeBankAccount, setTypeBankAccount] = useState('checking');

  const creatBusiness = async () => {
    if (
      name !== '' &&
      email !== '' &&
      description !== '' &&
      document !== '' &&
      hodelName !== '' &&
      holderDocument !== '' &&
      bank !== '' &&
      branchNumber !== '' &&
      branchCheckDigit !== '' &&
      accountNumber !== '' &&
      accountCheckDigit !== '' &&
      typeBankAccount !== ''
    ) {
      const response = await postBusiness(
        name,
        email,
        description,
        document,
        hodelName,
        holderDocument,
        bank,
        branchNumber,
        branchCheckDigit,
        accountCheckDigit,
        accountCheckDigit,
        typeBankAccount
      );
      console.log(response);
      if (response.data) {
        // window.location.reload();
      } else {
        alert(response.menssage);
      }
    } else {
      alert('Preencha os campos');
    }
  };

  const currencies = [
    {
      value: 'SP',
      label: 'SP',
    },
    {
      value: 'CE',
      label: 'CE',
    },
  ];

  return (
    <Page title="Cadastrar Empresas">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Cadastrar Empresas
        </Typography>
        <Grid container spacing={3}>
          <Grid>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <Typography sx={{ padding: 3, width: '33%', height: '10%', flexShrink: 0 }}>
                  Informações do CNPJ
                </Typography>
                <AccordionDetails>
                  <form>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Razão Social:</InputLabel>
                        <TextField
                          // onChange={(t) => setName(t)}
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                          id="filled-select-currency"
                          hiddenLabel
                          //  defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Nome Fantasia:</InputLabel>

                        <TextField
                          // onChange={(t) => setName(t)}

                          id="filled-select-currency"
                          hiddenLabel
                          //  defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">CNPJ:</InputLabel>
                        <TextField
                          onChange={(event) => setDocument(event.target.value)}
                          value={document}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">E-mail:</InputLabel>
                        <TextField
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                          id="filled-select-currency"
                          hiddenLabel
                          // defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">CNAE:</InputLabel>
                        <TextField
                          onChange={(event) => setDescription(event.target.value)}
                          value={description}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">CNAE Secundário:</InputLabel>
                        <TextField
                          onChange={(event) => setDescription(event.target.value)}
                          value={description}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Telefone 1:</InputLabel>
                        <TextField
                          onChange={(event) => setDescription(event.target.value)}
                          value={description}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Telefone 2:</InputLabel>
                        <TextField
                          onChange={(event) => setDescription(event.target.value)}
                          value={description}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
                <Typography sx={{ padding: 3, width: '33%', height: '10%', flexShrink: 0 }}>
                  Endereço comercial
                </Typography>
                <AccordionDetails>
                  <form>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Rua:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          hiddenLabel
                          //  defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Número:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Complemento:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Bairro:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Cep:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Cidade:</InputLabel>
                        <TextField
                          disabled
                          id="filled-select-currency"
                          hiddenLabel
                          // defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={6} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Estado:</InputLabel>
                        <TextField
                          id="filled-select-currency"
                          hiddenLabel
                          select
                          value={currency}
                          onChange={select}
                          size="small"
                          fullWidth
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>

            <Grid item xs={12} sm={12} md={12} sx={{ padding: 1, textAlign: 'center' }}>
              <Button
                style={{
                  padding: 10,
                  width: 480,
                  margin: 10,
                  cursor: 'pointer',
                }}
                onClick={() => creatBusiness()}
                variant="outlined"
                size="medium"
              >
                Salvar
              </Button>
              <Button
                style={{
                  padding: 10,
                  width: 480,
                  margin: 10,
                  border: 0,
                  color: 'white',
                  cursor: 'pointer',
                }}
                variant="contained"
                onClick={() => creatBusiness()}
                size="medium"
              >
                Salvar ir para Contrato
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
