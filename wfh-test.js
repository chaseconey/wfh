
let fs = require('fs');
let ipp = require("ipp");
let markdownpdf = require("markdown-pdf");
let colors = require('colors');
let yaml = require('js-yaml');
let os = require('os');

try {
  var config = yaml.safeLoad(fs.readFileSync(`${os.homedir()}/.wfh`, 'utf8'));
  console.log('Configuration file loaded.'.green);
} catch (e) {
  console.log(colors.red(e));
}
  
markdownpdf().from.string(config.printer.pdf.template).to(config.printer.pdf.dest, function () {
  console.log(`File written to ${config.printer.pdf.dest}`)
});