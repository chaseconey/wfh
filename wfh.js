#!/usr/bin/env node

var program = require('commander');

program
  .version('1.1.0')
  .command('find', 'Find printers on local network').alias('f')
  .command('send', 'Send out notifications of WFH').alias('s')
  .command('test', 'Test pdf generation').alias('t')
  .command('init', 'Initialize wfh configuration').alias('i')
  .command('configure', 'Configure notifications when WFH').alias('c')
  .parse(process.argv);
