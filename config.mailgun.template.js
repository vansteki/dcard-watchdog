/**
 * Created by minecraft on 2016/7/13.
 */
var apiKey = "";
var domain = "";
var restApi = `https://api.mailgun.net/v3/${domain}/messages`;
var mailTo = "";
var dcardEmail = "";
var dcardPassword = "";
var dcardCheckOutTime = "0 12 * * * *";
var dcardSendPageTime = "1 12 * * * *";

module.exports = {
    apiKey,
    domain,
    restApi,
    mailTo,
    dcardEmail,
    dcardPassword,
    dcardCheckOutTime,
    dcardSendPageTime
};