const { v4: uuidv4 } = require('uuid');

class UserModel {
  constructor() {
    this.users = [
      {
        id: uuidv4(),
        email: 'test@gmail.com',
        username: 'John Doe',
        password: 'password',
      },
    ];
  }
  isExistUser(email) {
    return this.users.some((user) => user.email === email);
  }
  getUser(email) {
    return this.users.find((user) => user.email === email);
  }
  signup(email, username, password) {
    const user = {
      id: uuidv4(),
      email,
      username,
      password,
    };
    this.users.push(user);
  }
}

module.exports = new UserModel();
