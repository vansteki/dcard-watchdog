# dcard-watchdog :dog2:
別再錯過你/妳的卡友了!
dcard-watchdog 會每日幫你登入，還會將卡友的頁面刁到你的信箱喔! 

## Step0.   edit config file, you will need:

    1. mailgun account
    2. dcard account
    3. know how to use cronjob
    4. cp config.mailgun.template.js config.mailgun.js
    5. see config.mailgun.template.js for how to config it

## Step1.   install

    npm install

## Step2.   if your are first time using it, download selenium-server and run it
 
    npm run webdriver&
        
## Step2.   or just run selenium-server
        
    npm run server&        

## Step3.   run app

    npm run app