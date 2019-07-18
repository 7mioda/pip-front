import { useEffect } from 'react';

export default (title, isFetching = null) => useEffect(() => {
  document.title = isFetching
    ? 'Plantify.it  |  Loading...'
    : `Plantify.it  | ${title}`;
  return () => undefined;
}, [isFetching, title]);
