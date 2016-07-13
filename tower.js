/**
 * Created by minecraft on 2016/7/13.
 */
const schedule = require('node-schedule');
const childProcess = require('child_process');
const config = require('./config.mailgun.js');

schedule.scheduleJob(config.dcardCheckOutTime || '* * 12 * * *', function () {
    console.log('Tower: check dcard');
    var task = childProcess.spawn('node', ['bot.js', config.dcardEmail, config.dcardPassword]);
    task.stdout.on('data', function (data) {
        console.log("stdout: ", data.toString());
    });
    task.stderr.on('data', function (data) {
        console.log("stderr: ", data.toString());
    });
});

schedule.scheduleJob(config.dcardSendPageTime || '* 1 12 * * *', function () {
    console.log('Tower: send photo');
    var curlOpt = {
        apiKey: config.apiKey,
        api: config.restApi,
        from: `from='Mailgun Sandbox <postmaster@${config.domain}>`,
        to: `to=DK <${config.mailTo}>`,
        subject: "subject=Checkout your Dcard today!",
        text: "text=https://www.dcard.tw/dcard",
        attachment: "attachment=@./dcard.jpg"
    };
    var task = childProcess.spawn("curl", ["-s", "--user", curlOpt.apiKey, curlOpt.api,
        "-F", curlOpt.from,
        "-F", curlOpt.to,
        "-F", curlOpt.subject,
        "-F", curlOpt.text,
        "-F", curlOpt.attachment
    ]);
    task.stdout.on('data', function (data) {
        console.log("stdout: ", data.toString());
    });
    task.stderr.on('data', function (data) {
        console.log("stderr: ", data.toString());
    });
});