// @mui
import PropTypes from 'prop-types';
import {
  //  alpha,
  styled,
} from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetConfig.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetConfig({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 2,
        boxShadow: 0,
        textAlign: 'center',
        color: '#fff',
        // color: (theme) => theme.palette[color].darker,
        bgcolor: '#251A3D',
        '&:hover': {
          backgroundColor: '#FFCC1B',
          color: '#251A3D',
          '& .MuiListItemIcon-root': {
            color: 'white',
          },
        },
        // bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      {icon ? (
        <IconWrapperStyle
          sx={{
            color: (theme) => theme.palette[color],
            // backgroundImage: (theme) =>
            // `linear-gradient(135deg, ${alpha(theme.palette[color].main, 0)} 0%, ${alpha(
            // theme.palette[color].main,
            // 0.3
            // )} 100%)`,
          }}
        >
          <Iconify icon={icon} width={35} height={35} />
        </IconWrapperStyle>
      ) : null}

      <Typography variant="subtitle2">{title}</Typography>

      {/* <Typography variant="h3">R${fShortenNumber(total)}</Typography> */}
    </Card>
  );
}
