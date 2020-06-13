const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '795725413:AAGy80ZQKV9Z2s5rs7noy6dJAH4Or68X39o';

const bot = new TelegramBot( TOKEN, { polling: true });

bot.on('new_chat_members', (msg) => {
    bot.sendMessage(msg.chat.id, `Olá ${msg.from.first_name}, bem-vindo ao BoloMaster! Na verdade, bem-vindo é o caralho. Quer educação volte para o Whatsapp. Esse grupo aqui só tem gente da pior ladainha. Tem biscoitera, tem LGBT, tem negro bandido, maconheiro, tem vagabundo, tem machista. Só gente com tendência suicida, tá entendendo? Salve-se enquanto ainda pode. SAIA DAQUI URGENTE..`)
})