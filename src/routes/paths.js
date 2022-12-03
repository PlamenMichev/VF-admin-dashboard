export const ROUTES = {
  dashboard: '/dashboard',
  404: '/404',
};

export const PATHS = {
  associationsPath: 'associations',
  404: '404',
  overviewPath: 'overview',
};

export const URLS = {
  associationsList: ROUTES.dashboard + '/' + PATHS.associationsPath,
  overview: ROUTES.dashboard + '/' + PATHS.overviewPath,
};
