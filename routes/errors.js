const express = require('express');
const router = express.Router();
const { response } = require('../lib/response');
const { catchError } = require('../lib/catch-error');

const asyncErrorController = async (req, res, next) => {
  a;
  res.send(response('運行成功'));
};

const normalController = (req, res, next) => {
  res.send(response('運行成功'));
};

router.get('/', catchError(asyncErrorController));

router.get('/normal', catchError(normalController));

router.get('/no-catch', asyncErrorController);

module.exports = router;
