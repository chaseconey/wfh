
let fs = require('fs');
let ipp = require("ipp");
let markdownpdf = require("markdown-pdf");

module.exports = function print_notification(config, me, cb) {

  markdownpdf().from.string(config.pdf.template).to(config.pdf.dest, function () {
    fs.readFile(config.pdf.dest, function (err, data) {
      let printer = ipp.Printer(`${config.endpoint}`);
      let file = {
          "operation-attributes-tag":{
          "requesting-user-name": "User",
          "job-name": "Print Job",
          "document-format": "application/pdf"
        },
        data: data
      };

      printer.execute("Print-Job", file, function (err, res) {
          cb();
      });
    });
  });
};