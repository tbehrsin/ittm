import UserDataSource from './User';

const dataSources = () => ({
  user: new UserDataSource(),
});

export { dataSources };
