//Respondendo mensagens específicas.

const env = require('../.env');
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const bot = new Telegraf(env.token);

const tecladoComida = Markup.keyboard([
  ['🐷 porco', '🐮 gado', '🐐 bode'],
  ['🐔 frango', '🥚 só tem ovo'],
  ['🐟 peixe', '🦞 frutos do mar'],
  ['🍄 sou vegano']
]).resize().extra();

bot.start(async context => {
  await context.reply(`Olá, ${context.update.message.from.first_name}!`);
  await context.reply('Qual bebida você quer?', 
    Markup.keyboard(['Pepsi', 'Cajuína']).resize().oneTime().extra()  
  );
})

bot.hears(['Pepsi', 'Cajuína'], async context => {
  context.reply('E qual carne você vai comer?',tecladoComida);
});

bot.hears('🐷 porco', context => {
  context.reply('É a minha carne favorita!')
})

bot.hears('🍄 sou vegano', context => {
  context.reply('Ok. Eu prefiro carne mesmo.');
});

bot.hears('🥚 só tem ovo', context => {
  context.reply('Ovo ainda tem bastante proteína.')
})

bot.hears('text', context => {
  context.reply('Legal!');
})

bot.startPolling();
