//testando replys

const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(async context =>{
  await console.log(context.update.message.from)
  //resposta comum
  await context.reply(`Seja bem-vindo(a), ${context.update.message.from.first_name}!😎`);
  //resposta com HTML
  await context.replyWithHTML('Destacando mensagem com <b>HTML</b> '
  + '<i>de várias</i> <code>formas</code> <pre>possíveis</pre>'
  + '<a href="duckduckgo.com">Esse link te levará ao motor de busca DuckDuckGo</a>');
  //resposta com Markdown
  await context.replyWithMarkdown('Destacando texto com *Markdown*'
  + '_de várias_ `formas` ```diferentes```'
  + '[PatoPatoVai](duckduckgo.com)');
  //resposta com imagem salva
  await context.reply('Aqui uma foto salva no servidor:');
  await context.replyWithPhoto({source:'../media/images/dog.jpg'});
  //enviando imagem com URL como argumento
  await context.replyWithPhoto('https://static.boredpanda.com/blog/wp-content/uploads/2018/01/Molly-5a65a1d189b95-png__880.jpg'
  , {caption:'Essa aqui eu peguei da net'});
  //enviando imagens com objeto
  await context.replyWithPhoto(
    {url: 'https://i.ytimg.com/vi/eeyrycqL4t4/maxresdefault.jpg'},
    {caption: "Gato Makonhaaa"});
  //responder com localização
  await context.reply('Aqui está alguém:');
  await context.replyWithLocation(29.9773008, 31.1303068);
  //responder com vídeo
  await context.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()