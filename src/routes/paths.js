export const ROUTES = {
  dashboard: '/dashboard',
  404: '/404',
  auth: '/auth',
};

export const PATHS = {
  associationsPath: 'associations',
  404: '404',
  overviewPath: 'overview',
  login: 'login',
  weeklyReport: 'weekly-report',
  demoCalendar: 'demo-calendar',
};

export const URLS = {
  associationsList: ROUTES.dashboard + '/' + PATHS.associationsPath,
  overview: ROUTES.dashboard + '/' + PATHS.overviewPath,
  login: ROUTES.auth + '/' + PATHS.login,
  weeklyReport: ROUTES.dashboard + '/' + PATHS.weeklyReport,
  demoCalendar: ROUTES.dashboard + '/' + PATHS.demoCalendar,
};
