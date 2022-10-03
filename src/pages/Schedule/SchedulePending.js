import React from 'react';

import { Container, Grid, Box, Typography, Modal, IconButton } from '@mui/material';

// components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';

import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

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

export default function SchedulePending() {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const handleOpen = (item) => {
    setOpen(true);
    setItem(item);
  };

  const handleClose = () => setOpen(false);

  const data = [
    {
      key: 1,
      title: 'Teste',
      subtitle: 'Mustang Eleanor',
      description: '12/10/2022',
      value: '300,00',
      image: 'codicon:star-full',
      carimage: '',
    },
    {
      key: 2,
      title: 'Teste',
      subtitle: 'Honda CRV - 2.0 EXL 4X4 ',
      description: '10/10/2022',
      value: '30,00',
      image: 'codicon:star-full',
      carimage: '',
    },
    {
      key: 3,
      title: 'Teste',
      subtitle: 'Honda CRV - 2.0 EXL 4X4 ',
      description: '05/10/2022',
      value: '100,00',
      image: 'entypo:tools',
      carimage: '',
    },
    {
      key: 4,
      title: 'Teste',
      subtitle: 'Honda CRV - 2.0 EXL 4X4 ',
      description: '01/10/2022',
      value: '300,00',
      image: 'codicon:star-full',
      carimage: '',
    },
    {
      key: 5,
      title: 'Teste',
      subtitle: 'Honda CRV - 2.0 EXL 4X4 ',
      description: '01/10/2022',
      value: '300,00',
      image: 'codicon:star-full',
      carimage: '',
    },
    {
      key: 6,
      title: 'Teste',
      subtitle: 'Honda CRV - 2.0 EXL 4X4 ',
      description: '01/10/2022',
      value: '300,00',
      image: 'codicon:star-full',
      carimage: '',
    },
  ];

  const BodyModal = () => (
    <Box sx={style}>
      <Typography variant="h5" sx={{ mb: 5 }}>
        Detalhe do evento
      </Typography>

      <IconButton
        onClick={() => handleClose()}
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
          display: 'flex',
        }}
        aria-label="close"
        component="span"
      >
        <Iconify icon="eva:close-circle-outline" height={35} width={35} />
      </IconButton>
      <Box
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          display: 'flex',
        }}
      >
        {item.carimage ? <img style={{ maxHeight: 250 }} src={item.carimage} alt="Imagem do veiculo" /> : null}
        {/* <Skeleton variant="rect" height={200} maxWidth={250} style={{ display: 'flex', flex: 1, borderRadius: 5 }} /> */}
      </Box>

      <Box>
        <Typography id="modal-modal-title3" variant="h6" component="h2">
          {item.event_name}
        </Typography>
        <Typography id="modal-modal-title1" variant="h6" component="h2">
          Teste: {''}
          <Typography variant="subtitle1" style={{ display: 'inline' }}>
            {item.identifier}
          </Typography>
        </Typography>
        <Typography id="modal-modal-title2" variant="h6" component="h2">
          Teste: {''} {item.subtitle}
          <Typography variant="subtitle1" style={{ display: 'inline' }}>
            {item.vehicle_brand} {item.vehicle_model}
          </Typography>
        </Typography>
        {item.event_date ? (
          <Typography id="modal-modal-title4" variant="h6" component="h2">
            Teste:
          </Typography>
        ) : null}

        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          {moment(item.event_date).format('MMMM d, YYYY')}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Page title="Linha do Tempo">
      <Container maxWidth="xl">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BodyModal />
        </Modal>

        <Typography variant="h4" sx={{ mb: 5 }}>
          Agendamentos pendentes
        </Typography>
      </Container>
    </Page>
  );
}
