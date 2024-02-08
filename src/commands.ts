import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { scout } from './actions';

yargs(hideBin(process.argv))
  .command(
    'scout',
    'analyze codebase for vulnerabilities',
    () => {},
    async () => {
      await scout();
    },
  )
  .demandCommand(1)
  .parse();
