//chabot básico

const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start((context, next) =>{
  const user = context.update.message.from;
  console.log(user);
  { user.id == 205052355
    ? context.reply('Saudações, mestre.') 
    : context.reply('Desculpe, mas só falo com o meu mestre!')};
});

bot.startPolling()