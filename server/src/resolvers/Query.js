import pkg from '../../package.json';

export default {
  Query: {
    version: () => pkg.version,
  },
};
