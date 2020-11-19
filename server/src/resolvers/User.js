export default {
  Query: {
    users: async (_, params, { dataSources }) => dataSources.user.getUsers(),
    user: async (_, { id }, { dataSources }) =>
      dataSources.user.getUser({ id }),
  },
};
