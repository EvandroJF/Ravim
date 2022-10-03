// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const NavSchedule = [
  {
    title: 'Agendamentos',
    path: '/dashboard/Agendamentos',
    icon: getIcon('material-symbols:edit-calendar-rounded'),
  },

  {
    title: 'Histórico',
    path: '/dashboard/Historico',
    icon: getIcon('material-symbols:history-rounded'),
  },

  {
    title: 'Pendente',
    path: '/dashboard/Pendente',
    icon: getIcon('material-symbols:assignment-late-rounded'),
  },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
];

export default NavSchedule;
