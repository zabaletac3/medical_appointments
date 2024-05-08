import winston from "winston";
import chalk from "chalk";
import DailyRotateFile from "winston-daily-rotate-file";


const levels: Record<string, any> = {
    error: chalk.red.bold,
    warn: chalk.yellow.bold,
    info: chalk.green.bold,
    debug: chalk.blue.bold,
};

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
    const color = levels[level](level.toUpperCase());
    return ` ${chalk.gray.bold(`${timestamp}`)} ${color}: ${chalk.cyan.bold(`${message}`)}`;
});

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        logFormat,
    ),
    transports: [
        new winston.transports.Console(),
        // new DailyRotateFile({
        //     filename: "logs/%DATE%.log",
        //     datePattern: "YY-MM-DD",
        //     zippedArchive: true,
        //     maxSize: "20m",
        //     maxFiles: "14d"
        // }),
        new DailyRotateFile({
            filename: "logs/error-log%DATE%.log",
            datePattern: "YY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            level: "error",
        }),
        new DailyRotateFile({
            filename: "logs/%DATE%.log",
            datePattern: "YY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d",
            level: "info",
        }),
    ],
});

export default logger;