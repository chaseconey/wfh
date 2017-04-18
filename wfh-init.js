let fs = require('fs');
let os = require('os');
let configFile = `${os.homedir()}/.wfh`;

if (!fs.existsSync(configFile)) {
    console.log(`Copying ${__dirname}/example.yml to ${configFile}`);
    fs.createReadStream(__dirname + '/example.yml').pipe(fs.createWriteStream(configFile));
}
