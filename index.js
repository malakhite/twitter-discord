//'use strict'

const Twitter = require('twitter-stream-api');
const Discord = require('discord.js');
const config = require('./config/config');

let keys = config.keys;

let twitter =  new Twitter(keys);
let hook = new Discord.WebhookClient(config.discord.id, config.discord.token);

twitter.debug(function (reqObj) {
    require('request-debug')(reqObj, function (type, data, req) {
        console.log(type, data, req);
    });
});

twitter.stream('statuses/filter', {
    follow: config.users
});

twitter.on('connection success', function(uri) {
    console.log('Connection successful', uri);
});

twitter.on('connection aborted', function() {
    console.log('Connection aborted');
});

twitter.on('connection error network', function() {
    console.log('Connection error network');
});

twitter.on('connection error stall', function() {
    console.log('Connection error stalled');
});

twitter.on('connection error http', function(httpStatusCode) {
    console.log('Connection error http', httpStatusCode);
});

twitter.on('connection rate limit', function() {
    console.log('Connection rate limit');
});

twitter.on('connection error unknown', function() {
    console.log('Connection error unknown');
});

twitter.on('data', function(obj) {
    console.log(obj.user.screen_name, 'says', obj.text);
    hook.send(
        obj.text, {
            username : obj.user.screen_name
        }
    );
});