// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const NavManagement = [
  {
    title: 'Gestão E-social',
    path: '/dashboard/gestao',
    icon: getIcon('carbon:gui-management'),
  },
];

export default NavManagement;
