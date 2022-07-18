import Router from 'next/router';

const onRouteBack = (path = '/') => {
  if (window.history.length <= 2) return Router.replace(path);
  return Router.back();
};

export default onRouteBack;
