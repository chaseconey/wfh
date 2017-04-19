
## wfh

A simple wfh (working from home) notification tool that may or may not be more about trolling your boss.

**Features**

* Slack integration
* Printer integration (via IPP)
* Twilio integration for SMS action
* Easy configuration file via yaml format

### Quickstart

* `npm install -g wfh` to install the cli
* `wfh init` to initialize the configuration file in your home directory
* `vim ~/.wfh` and add your settings
* `wfh send` to send based on your configured settings

### Todo

* Add email integration
* Make configure command work