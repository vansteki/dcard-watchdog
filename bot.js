var webdriverio = require('webdriverio');
var config = require('./config.mailgun.js');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
if (!config.dcardEmail || !config.dcardPassword) return;
webdriverio
    .remote(options)
    .init()
    .url('https://www.dcard.tw/login')
    .getTitle().then(function(title) {
        console.log('Bot: Title was: ' + title);
    })
    .setValue('input[name=email]', config.dcardEmail)
    .setValue('input[name=password]', config.dcardPassword)
    .leftClick("button")
    .waitForVisible("a[href='/dcard']", 5000)
    .leftClick("a[href='/dcard']")
    .waitForVisible("div[class*='DcardPage_avatarPhoto']", 5000)
    .saveScreenshot("./dcard.jpg")
    .end();