import React, { useState, useEffect, useRef } from 'react';
import Alert from '@mui/material/Alert';

// material
import { Card, Container, Typography, TextField, FormLabel, Grid, InputLabel, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { useRoute } from '@react-navigation'
import { Link as RouterLink, useLocation } from 'react-router-dom';

// components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';

import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

import Api from '../../api/APIPUT';

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

export default function BusinessEdit(route) {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { state } = useLocation();

  const [getLista, setListBusiness] = useState([]);

  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [description, setDescription] = useState(state.description);
  const [document, setDocument] = useState(state.document);
  const [hodelName, sethodelName] = useState(state.hodelName);
  const [holderDocument, setHolderDocument] = useState(state.holderDocument);
  const [stateDistrict, setStateDistrict] = useState(state.stateDistrict);
  const [city, setCity] = useState(state.city);
  const [neighborhood, setNeighborhood] = useState(state.neighborhood);
  const [complement, setComplement] = useState(state.complement);
  const [number, setNumber] = useState(state.number);
  const [streetname, setStreetname] = useState(state.streetname);
  const [zip, setZity] = useState(state.zip);

  const updateBusiness = async () => {
    const id = state.id;
    if (
      name !== '' &&
      email !== '' &&
      description !== '' &&
      streetname !== '' &&
      number !== '' &&
      complement !== '' &&
      neighborhood !== '' &&
      city !== '' &&
      stateDistrict !== '' &&
      zip !== ''
    ) {
      try {
        console.log(
          'response 222',
          name,
          email,
          description,
          streetname,
          number,
          complement,
          neighborhood,
          city,
          stateDistrict,
          zip,
          id
        );
        const response = await Api.putBusiness(
          name,
          email,
          description,
          streetname,
          number,
          complement,
          neighborhood,
          city,
          stateDistrict,
          zip,
          id
        );
        if (response.status === 200) {
          console.log(response.data.data, 'sucesso');
        }
      } catch (error) {
        console.log(error, 'error putBusiness');
      }
    } else {
      console.log('error putBusiness null');
    }
  };

  return (
    <Page title="Cadastrar Empresas">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Detalhes Empresas
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <Typography sx={{ padding: 3, width: '33%', height: '10%', flexShrink: 0 }}>
                  Dados da Empresa
                </Typography>
                <AccordionDetails>
                  <form>
                    <Grid container>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Nome:</InputLabel>
                        <TextField
                          // onChange={(t) => setName(t)}
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                          id="filled-select-currency"
                          hiddenLabel
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">E-mail:</InputLabel>
                        <TextField
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                          id="filled-select-currency"
                          hiddenLabel
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Descrição:</InputLabel>
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

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
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
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <Typography sx={{ padding: 3, width: '33%', height: '10%', flexShrink: 0 }}>Endereço</Typography>
                {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                <AccordionDetails>
                  <form>
                    <Grid container>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Rua:</InputLabel>
                        <TextField
                          onChange={(event) => setStreetname(event.target.value)}
                          value={streetname}
                          id="filled-select-currency"
                          hiddenLabel
                          //  defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Número:</InputLabel>
                        <TextField
                          onChange={(event) => setNumber(event.target.value)}
                          value={number}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Complemento:</InputLabel>
                        <TextField
                          onChange={(event) => setComplement(event.target.value)}
                          value={complement}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Bairro:</InputLabel>
                        <TextField
                          onChange={(event) => setNeighborhood(event.target.value)}
                          value={neighborhood}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Cep:</InputLabel>
                        <TextField
                          onChange={(event) => setZity(event.target.value)}
                          value={zip}
                          id="filled-select-currency"
                          helperText=""
                          hiddenLabel
                          defaultValue=""
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Cidade:</InputLabel>
                        <TextField
                          onChange={(event) => setCity(event.target.value)}
                          value={city}
                          id="filled-select-currency"
                          hiddenLabel
                          // defaultValue={'item.email'}
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
                        <InputLabel htmlFor="filled-adornment-password">Estado:</InputLabel>
                        <TextField
                          id="filled-select-currency"
                          onChange={(event) => setStateDistrict(event.target.value)}
                          value={stateDistrict}
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
                  <Grid item xs={12} sm={12} md={12} sx={{ padding: 1, textAlign: 'center' }}>
                    <button
                      style={{
                        padding: 10,
                        width: 88,
                        margin: 10,
                        border: 0,
                        background: 'red',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                      onClick={() => updateBusiness()}
                      variant="contained"
                    >
                      Salvar
                    </button>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
