// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Configurações',
    path: '/dashboard/settings',
    icon: getIcon('clarity:settings-solid'),
  },
];

export default navConfig;
