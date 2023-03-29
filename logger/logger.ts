import { format, createLogger, transports } from 'winston';

const { combine, timestamp, label, printf } = format;
const CATEGORY = 'winston custom format';

// Using the printf format.
const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
// Create logger
const logger = createLogger({
  level: 'debug',
  format: format.json(),
  transports: [new transports.Console()],
});

export default logger;
