process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '795725413:AAGy80ZQKV9Z2s5rs7noy6dJAH4Or68X39o';

const bot = new TelegramBot( TOKEN, { polling: true });

bot.on("polling_error", console.log);

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Received your message');
})

