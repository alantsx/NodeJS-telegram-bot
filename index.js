process.env.NTBA_FIX_319 = 1;
var express = require('express');
var app     = express();
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = 'your-bot-token';

const bot = new TelegramBot( TOKEN, { polling: true });

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

//Send console log on polling_error
bot.on("polling_error", console.log);


//Matches "/echo [message]"
bot.onText(/\/repita (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

//Function Return Random Number
bot.onText(/\/sorte/, (msg) => {
    const percent = Math.floor(Math.random() * 101);
    const resp = `Deixa eu ver aqui na minha bola de cristal, ${msg.from.first_name}. Seu nível de sorte hoje é de ${percent}% !`;
    const opts = { reply_to_message_id: msg.message_id };
    
    bot.sendMessage(msg.chat.id, resp, opts);
});
