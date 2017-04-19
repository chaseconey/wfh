
let fs = require('fs');
let os = require('os');
let yaml = require('js-yaml');
let colors = require('colors');
let slack_notification = require('./lib/slack');
let print_notification = require('./lib/print');
let twilio_notification = require('./lib/twilio');

try {
  var config = yaml.safeLoad(fs.readFileSync(`${os.homedir()}/.wfh`, 'utf8'));
  console.log('Configuration file loaded.'.green);
} catch (e) {
  console.log(colors.red(e));
}

if (config.printer.enabled) {
  console.log("Printer enabled, sending...".white);
  print_notification(config.printer, config.me, function() {
    console.log("Message sent to printer".green);
  });
}

if (config.slack.enabled) {
  console.log("Slack enabled, sending...".white);
  for (let index in config.slack.channels) {
    slack_notification(config.slack.channels[index], config.slack.webhookUri, config.me, function() {
      console.log(`Message sent to ${config.slack.channels[index].channel}`.green);
    });
  }
}

if (config.twilio.enabled) {
  console.log("SMS enabled, sending...".white);

  for (let index in config.twilio.recipients) {
    twilio_notification(config.twilio.recipients[index], config.twilio, config.me, function() {
      console.log("SMS Sent to ".green);
    });
  }
}

