const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';
exports.nodeEnv = nodeEnv;

const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};
exports.logStars = logStars;

const port = {
  port: env.PORT || 8080
};
exports.default = port;
