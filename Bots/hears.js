//Respondendo mensagens específicas.

const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);
const axios = require('axios');
const moment = require('moment');

bot.hears(/youtube.com/gi, context=>context.reply('vídeos'));
//recebe uma data e responde com o dia da semana
bot.hears(/(\d{2}\/\d{2}\/\d{4})/gi, context=>{
  moment.locale('PT-BR');
  const data = moment(context.match[1], 'DD/MM/YYYY');
  context.reply(`${context.match[1]} cai num(a) ${data.format('dddd')}`);
});


bot.startPolling();