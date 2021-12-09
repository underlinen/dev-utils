import chalk from 'chalk';

const print = {
  info(...args) {
    const prefix = chalk.green(args[0]);
    args.shift();
    args.unshift(prefix);
    console.log.apply(console, args);
  },
  warn(...args) {
    const prefix = chalk.yellow(args[0]);
    args.shift();
    args.unshift(prefix);
    console.log.apply(console, args);
  },
  error(...args) {
    const prefix = chalk.red(args[0]);
    args.shift();
    args.unshift(prefix);
    console.log.apply(console, args);
  },
};

export default print;