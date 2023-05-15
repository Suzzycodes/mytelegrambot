require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.API_TOKEN);

console.log(bot)

bot.start((ctx) => {
    ctx.reply('Hello! Welcome to your Telegram bot.');
  });

  bot.help((ctx) => {
    ctx.reply('I can assist you with various commands. Here are some available commands:');
    ctx.reply('/start - Start the bot');
    ctx.reply('/help - Display the available commands');
    ctx.reply('/hello - Greet the bot');
    ctx.reply('/echo <message> - Echo back your message');
    // Add more commands and explanations here
  });
  
  bot.command('hello', (ctx) => {
    ctx.reply('Hello there! How can I assist you?');
  });
  
  bot.command('echo', (ctx) => {
    const message = ctx.message.text.split(' ').slice(1).join(' ');
    if (message) {
      ctx.reply(`You said: ${message}`);
    } else {
      ctx.reply('Please provide a message to echo. Usage: /echo <message>');
    }
  });
  
  bot.on('sticker', (ctx) => {
    ctx.reply('Cool sticker! 🎉');
  });
  


  bot.on('message', (ctx) => {
    const text = ctx.message.text.toLowerCase();
    
    if (text.includes('say something nice')) {
      ctx.reply('You are beautiful.');
    } 
    if (text.includes('thanks')) {
        ctx.reply('You are welcome.');
      } 
    if (text.includes('who are you?')) {
        ctx.reply('I am Suzzybot.');
    }   
      else {
      ctx.reply("I'm sorry, I didn't understand that command. Type /help for assistance.");
    }
  });
  bot.launch();



/*
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.API_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! Welcome to your Telegram bot.');
});

*/