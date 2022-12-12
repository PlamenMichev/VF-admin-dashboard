/* eslint-disable import/no-duplicates */
// @mui
import { enUS, daDK } from '@mui/material/locale';
import enLocale from 'date-fns/locale/en-US';
import dkLocale from 'date-fns/locale/da';
import { URLS } from './routes/paths';

// API
export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';

export const PATH_AFTER_LOGIN = URLS.overview; // as '/dashboard/app'

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
    locale: enLocale,
  },
  {
    label: 'Dansk',
    value: 'dk',
    systemValue: daDK,
    icon: 'https://flagcdn.com/w20/dk.png',
    locale: dkLocale,
  },
];

export const defaultLang = allLangs[1]; // Danish
