const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';
exports.nodeEnv = nodeEnv;

const logStars = function(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};
exports.logStars = logStars;

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl(){
    return `http://${this.host}:${this.port}`;
  }
};

