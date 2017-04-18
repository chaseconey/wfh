var mdns = require('mdns'),
  browser  = mdns.createBrowser(mdns.tcp('ipp')),
  program = require('commander');

browser.on('serviceUp', function (rec) {
  console.log(rec.name, 'http://'+rec.host+':'+rec.port+'/'+rec.txtRecord.rp);
});
browser.start();