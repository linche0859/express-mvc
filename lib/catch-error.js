const { responseError } = require('./response');

exports.catchError = (controllerFn) => {
  return async (req, res, next) => {
    try {
      await controllerFn(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(500).send(responseError('伺服器錯誤'));
    }
  };
};
