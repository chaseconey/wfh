const Slack = require('slack-node');

module.exports = function slack_notification(channel, webhookUri, me, cb) {
  slack = new Slack();
  slack.setWebhook(webhookUri);
  
  slack.webhook({
    channel: channel.channel,
    username: channel.botname || "wfh-bot",
    text: channel.text || `${config.slack.mentionName} is WFH today.`
  }, function(err, response) {
    cb();
  });
};