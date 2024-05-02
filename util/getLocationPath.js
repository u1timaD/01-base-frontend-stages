export const getLocationPath = () => {
  const location = window.location.pathname;
  return `/${location.split('/').at(-1)}`;
};
