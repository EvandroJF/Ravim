import React from 'react';

import { Container, Grid, Box, Typography, Modal, IconButton } from '@mui/material';

// components
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';

import Page from '../components/Page';
import Iconify from '../components/Iconify';

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

export default function TimeLine() {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Page title="Histórico">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Agendamento ASO - Histórico
        </Typography>
      </Container>
    </Page>
  );
}
