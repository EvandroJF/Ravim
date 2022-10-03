// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Empresas',
    path: '/dashboard/business/list',
    icon: getIcon('ic:round-list'),
  },
  {
    title: 'Cadastrar Empresas',
    path: '/dashboard/business/create',
    icon: getIcon('ic:round-add-business'),
  },
];

export default navConfig;
