import React, { useEffect, useState } from 'react';

// material
import { Container, Typography, TextField, Grid, InputLabel, Skeleton, Breadcrumbs, Link } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Iconify from '../components/Iconify';

// components
import Page from '../components/Page';

export default function UserInfo() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [asdata, setData] = React.useState([]);
  console.log(asdata);
  const [alertOpen, setalertOpen] = useState(false);
  const [isloading, setLoading] = useState(false);

  const Components = ({ item, label }) => (
    <>
      {item ? (
        <Grid item xs={12} sm={5.8} md={5.8} sx={{ padding: 1 }}>
          <InputLabel htmlFor="filled-adornment">{label}:</InputLabel>
          <TextField
            item
            xs={12}
            sm={12}
            m={12}
            id="filled-adornment"
            disabled
            helperText=""
            hiddenLabel
            defaultValue={item}
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      ) : null}
    </>
  );

  const { state } = useLocation();

  return (
    <Page title="Informações do usuário">
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Veículo
        </Typography> */}
        <Breadcrumbs style={{ marginBottom: 10 }} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Início
          </Link>
          <Link underline="hover" color="inherit" href="/dashboard/settings/">
            Configurações
          </Link>
          <Typography color="text.primary">Informações do usuário</Typography>
        </Breadcrumbs>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              {!isloading ? (
                <>
                  {asdata !== [] ? (
                    <>
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                          expandIcon={<Iconify icon="material-symbols:expand-more-rounded" height={35} width={35} />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: '33%', flexShrink: 0 }}>Dados Pessoais</Typography>
                          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                        </AccordionSummary>

                        <AccordionDetails>
                          <form>
                            <Grid container>
                              <>aa</>
                            </Grid>
                          </form>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ) : null}
                </>
              ) : (
                <Skeleton variant="rectangular" height={'80vh'} style={{ borderRadius: 5 }} />
              )}
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div>
              {!isloading ? (
                <>
                  {asdata !== [] ? (
                    <>
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                          expandIcon={<Iconify icon="material-symbols:expand-more-rounded" height={35} width={35} />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: '33%', flexShrink: 0 }}>Dados Profissionais</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <form>
                            <Grid container>
                              <>aa</>
                            </Grid>
                          </form>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ) : null}
                </>
              ) : (
                <Skeleton variant="rectangular" height={'80vh'} style={{ borderRadius: 5 }} />
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
