/**
 * Created by minecraft on 2016/7/13.
 */
var apiKey = "";
var domain = "";
var restApi = `https://api.mailgun.net/v3/${domain}/messages`;
var mailTo = "";　//填入你的信箱
var dcardEmail = "";　//Dcard 帳號
var dcardPassword = "";
var dcardCheckOutTime = "0 12 * * * *"; //登入時間
var dcardSendPageTime = "1 12 * * * *"; //寄送時間

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