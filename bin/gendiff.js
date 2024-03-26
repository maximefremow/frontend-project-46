#!/usr/bin/env node

import { Command } from 'commander';
import parser from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .argument('<filepath1>', '<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(parser(filepath1, filepath2));
  });

program.parse();