// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const NavCollaborator = [
  {
    title: 'Colaboradores',
    path: '/dashboard/colaboradores/list',
    icon: getIcon('fa-solid:users'),
  },
  {
    title: 'Cadastrar colaborador',
    path: '/dashboard/colaboradores/criar',
    icon: getIcon('bxs:user'),
  },
];

export default NavCollaborator;
