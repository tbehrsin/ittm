import mockData from '../../../mock-object.json';

class UserDataSource {
  async getUsers() {
    return mockData?.data?.items?.slice();
  }

  async getUser({ id }) {
    return mockData?.data?.items?.find(user => user.id === id);
  }
}

export default UserDataSource;
