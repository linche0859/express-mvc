exports.responseError = (message) => ({
  error: message,
});

exports.response = (message, payload) => {
  const result = { message };
  if (payload) result.data = payload;
  return result;
};
