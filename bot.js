var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
if (!process.argv[2] || !process.argv[3]) return;
webdriverio
    .remote(options)
    .init()
    .url('https://www.dcard.tw/login')
    .getTitle().then(function(title) {
        console.log('Bot: Title was: ' + title);
    })
    .setValue('input[name=email]', process.argv[2])
    .setValue('input[name=password]', process.argv[3])
    .leftClick("button")
    .waitForVisible("a[href='/dcard']", 5000)
    .leftClick("a[href='/dcard']")
    .waitForVisible("div[class*='DcardPage_avatarPhoto']", 5000)
    .saveScreenshot("./screenshot.png")
    .end();