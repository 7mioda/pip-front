import { ROUTE } from './types';

export default (path) => ({
  type: ROUTE,
  payload: path,
});
