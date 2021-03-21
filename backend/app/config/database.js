module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URL'),
      },
      options: {
        ssl: true,
      },
    },
  },
});