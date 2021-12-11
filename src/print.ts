import chalk from 'chalk';

/**
 * Node console.log
 * @param args 
 */
function log(...args) {
  console.log(...args);
}

/**
 * Wrapper log
 * @param color 
 * @param args 
 */
function print(color, ...args) {
  if (args.length > 1) {
    log(
      chalk[`bg${color.replace(/^\w/, (w) => w.toUpperCase())}`](` ${args[0]} `),
      chalk[color](args.slice(1))
    );
  } else {
    log(chalk[color](...args));
  }
}

/**
 * Print divider
 * @param {'info' | 'warn' | 'success' | 'error'} level
 */
log.divider = (level = 'info') => {
  const logger = log[level] || log.info;
  logger('---------------------------------------------------------------------------------------');
};

log.info = print.bind(null, 'blue');
log.warn = print.bind(null, 'yellow');
log.error = print.bind(null, 'red');
log.success = print.bind(null, 'green');
log.chalk = chalk;

export default log;
