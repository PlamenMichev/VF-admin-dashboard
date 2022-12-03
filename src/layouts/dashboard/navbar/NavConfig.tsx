// components
import Iconify from 'src/components/Iconify';
import { URLS } from 'src/routes/paths';

// ----------------------------------------------------------------------

const ICONS = {
  associations: <Iconify icon="majesticons:home" />,
  overview: <Iconify icon="majesticons:list-box" />,
};

const navConfig = [
  {
    subheader: '',
    items: [
      //TODO Translate this string
      { title: 'Overview', path: URLS.overview, icon: ICONS.overview },
      { title: 'Associations', path: URLS.associationsList, icon: ICONS.associations },
    ],
  },
];

export default navConfig;
