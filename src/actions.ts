import Listr from 'listr';
import { delay } from './utils';

export const scout = () => {
  return new Listr([
    {
      title: 'Analyzing file system',
      task: async () => await delay(2000),
    },
    {
      title: 'Scouting for security vulnerabilities',
      task: async () => await delay(2000),
    },
    {
      title: 'Generating reports',
      task: async () => await delay(1500),
    },
    {
      title: 'Cleaning up',
      task: async () => await delay(1500),
    },
  ]).run();
};
