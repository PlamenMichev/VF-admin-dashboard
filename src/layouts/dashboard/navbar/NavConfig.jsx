// components
import Iconify from '../../../components/Iconify';
import { URLS } from '../../../routes/paths';

// ----------------------------------------------------------------------

const ICONS = {
  associations: <Iconify icon="majesticons:home" />,
  overview: <Iconify icon="majesticons:list-box" />,
  weeklyReport: <Iconify icon="majesticons:textbox" />,
  demo: <Iconify icon="majesticons:calendar" />,
};

const navConfig = (translate) => [
  {
    subheader: '',
    items: [
      //TODO Translate this string
      { title: translate('navigation.overview'), path: URLS.overview, icon: ICONS.overview },
      {
        title: translate('navigation.associations'),
        path: URLS.associationsList,
        icon: ICONS.associations,
      },
      {
        title: translate('navigation.weeklyReport'),
        path: URLS.weeklyReport,
        icon: ICONS.weeklyReport,
      },
      { title: translate('navigation.demoCalendar'), path: URLS.demoCalendar, icon: ICONS.demo },
    ],
  },
];

export default navConfig;
