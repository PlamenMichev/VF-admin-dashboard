export const ROUTES = {
  dashboard: '/dashboard',
  404: '/404',
  login: '/login',
};

export const PATHS = {
  associationsPath: 'associations',
  404: '404',
  overviewPath: 'overview',
  login: 'auth',
};

export const URLS = {
  associationsList: ROUTES.dashboard + '/' + PATHS.associationsPath,
  overview: ROUTES.dashboard + '/' + PATHS.overviewPath,
  login: ROUTES.login + '/' + PATHS.login,
};
