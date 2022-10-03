import React from 'react';
// import { faker } from '@faker-js/faker';
// @mui
// import { useTheme } from '@mui/material/styles';
import {
  // Skeleton,
  Grid,
  Container,
  Typography,
  // Card,
  // CardHeader,
  // Avatar,
  // ListItemAvatar
} from '@mui/material';
// components
import Page from '../components/Page';
// import Iconify from '../components/Iconify';
// sections
// import { Card, CardHeader } from '@mui/material';

import {
  // AppOrderTimeline,
  // AppCurrentSubject,
  // AppConversionRates,
  // AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Painel">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Olá, Bem-vindo
        </Typography>
        {/* <a>{JSON.stringify(chart)}</a> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary
              title="Agendamentos Confirmados"
              total={714000}
              // icon={'ant-design:android-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary title="Aguardando confirmação" total={1352831} color="info" />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary title="Agendamentos Pendentes" total={1723315} color="warning" />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary title="Agendamentos Cancelados" total={234} color="error" />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary title="Agendamentos Concluídos" total={234} color="error" />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <AppWidgetSummary title="Total de Agendamentos" total={234} color="error" />
          </Grid>

          {/* {chart ? */}
          <Grid item xs={24} md={12} lg={16}>
            <AppWebsiteVisits
              // subheader="(+43%) than last year"
              title="Quantidade de agendamentos por tipo"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ]}
              // chartLabels={chart?.coins?.map(x => x.name)}
              chartData={[
                // {
                //   name: 'A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                {
                  name: 'Presencial',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 50],
                },
                {
                  name: 'Telemedicina',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 50],
                },
                // {
                //   name: 'teste',
                //   type: 'area',
                //   fill: 'gradient',
                //   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                // },
                // {
                //   name: 'teste',
                //   type: 'line',
                //   fill: 'line',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 50],
                //   // data: chart?.coins?.map(x => x.price),
                // },
              ]}
            />
          </Grid>
          {/* // data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 50],
          //   :
          //   <Grid item
          //     // xs={20} md={20} lg={20}
          //     xs={24} md={12} lg={16}>
          //     <Skeleton xs={24} md={12} lg={16} variant="rect" height={318} />
          //   </Grid>
          // } */}
          {/* <Grid
            // item xs={9} md={9} lg={9}
            item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Quantidade de registros"
              // subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ]}
              chartData={[
                {
                  // name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 50],
                },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentVisits
              title="Top 5 veiculos com maior custo"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            /> */}
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
