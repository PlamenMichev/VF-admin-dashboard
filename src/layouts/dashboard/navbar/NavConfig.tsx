// components
import Iconify from 'src/components/Iconify';
import { URLS } from 'src/routes/paths';

// ----------------------------------------------------------------------

const ICONS = {
  associations: <Iconify icon="majesticons:browser" />,
};

const navConfig = [
  {
    subheader: '',
    items: [
      //TODO Translate this string
      { title: 'Associations', path: URLS.associationsList, icon: ICONS.associations },
    ],
  },
];

export default navConfig;
