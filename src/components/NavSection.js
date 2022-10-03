import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, Typography } from '@mui/material';
//
// import { AuthContext } from '../contexts/auth';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  marginBottom: 5,
  '&:hover': {
    backgroundColor: theme.palette.hover.primary,
    color: '#251A3D',
    '& .MuiListItemIcon-root': {
      color: 'white',
    },
  },
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active }) {
  // const theme = useTheme();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info, children } = item;

  const [open, setOpen] = useState(isActiveRoot);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: '#fff',
    fontWeight: 'fontWeightMedium',
    bgcolor: '#3A2B5A',
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = active(path);

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'text.disabled',
                        transition: (theme) => theme.transitions.create('transform'),
                        ...(isActiveSub && {
                          transform: 'scale(2)',
                          bgcolor: 'primary.main',
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({
  navConfig,
  NavConfigItems,
  NavSchedule,
  NavCollaborator,
  NavBusiness,
  NavAccredited,
  NavManagement,
  ...other
}) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  // const { authenticated, logout } = useContext(AuthContext)
  // const handleLogount = () => {
  //   logout()
  // }
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Home</Typography>
        {navConfig.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}

        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Agendamentos</Typography>
        {NavSchedule.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}
        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Empresas</Typography>
        {NavBusiness.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}
        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Colaborador</Typography>
        {NavCollaborator.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}
        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Credenciado</Typography>
        {NavAccredited.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}

        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Gestão</Typography>
        {NavManagement.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}
        <Typography style={{ fontWeight: 'bold', marginLeft: 10, color: '#212B36' }}>Gerenciar</Typography>
        {NavConfigItems.map((item) => (
          <>
            <NavItem key={item.title} item={item} active={match} />
          </>
        ))}
      </List>
    </Box>
  );
}
