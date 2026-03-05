/**
 * Server Entry Point
 */

const app = require('./app');
const { PORT, NODE_ENV } = require('./config/env');
const logger = require('./utils/logger');

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  logger.info(`🚀 ZestDo API Server running on http://0.0.0.0:${PORT}`);
  logger.info(`📍 Environment: ${NODE_ENV}`);
  logger.info(`🏥 Health check: http://0.0.0.0:${PORT}/api/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  server.close(() => process.exit(1));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});

module.exports = server;
