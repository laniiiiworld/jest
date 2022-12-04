const UserService = require('../user_service');
const UserClient = require('../user_client');

jest.mock('../user_client');

describe('UserService - stub', () => {
  const login = jest.fn(async () => ({ id: 'lani', password: '1234' }));
  UserClient.mockImplementation(() => ({ login }));
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('lani', '1234');
    expect(login).toHaveBeenCalledTimes(1);
    expect(userService.isLogedIn).toBeTruthy();
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('lani', '1234');
    await userService.login('lani', '1234');
    expect(login).toHaveBeenCalledTimes(1);
  });
});
