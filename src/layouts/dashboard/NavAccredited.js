// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const NavAccredited = [
  {
    title: 'Credenciado',
    path: '/dashboard/credenciado/list',
    icon: getIcon('ic:round-list'),
  },
  {
    title: 'Cadastrar Credenciado',
    path: '/dashboard/credenciado/create',
    icon: getIcon('healthicons:ambulatory-clinic'),
  },
];

export default NavAccredited;
