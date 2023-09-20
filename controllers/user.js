const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');
const { response, responseError } = require('../lib/response');

exports.signup = async (req, res) => {
  const { email, password, username } = req.body;

  const isExist = UserModel.isExistUser(email);

  if (isExist) return res.status(400).send(responseError('用戶已存在'));

  const hashPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );

  UserModel.signup(email, username, hashPassword);

  res.status(201).send(response('註冊成功'));
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const isExist = UserModel.isExistUser(email);

  if (!isExist) return res.status(401).send(responseError('用戶不存在'));

  const user = UserModel.getUser(email);
  const isAvailable = await bcrypt.compare(password, user.password);

  if (!isAvailable)
    return res.status(401).send(responseError('帳號和密碼錯誤'));

  const token = jwt.sign(
    { email, username: user.username },
    process.env.JWT_KEY
  );
  res.status(201).send(response('登入成功', { token }));
};

exports.profile = (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send(responseError('未登入'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    res.status(200).send(response('成功', decoded));
  } catch (err) {
    res.status(401).send(responseError('驗證錯誤'));
  }
};
