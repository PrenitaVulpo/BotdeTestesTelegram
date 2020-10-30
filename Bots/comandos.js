//Testando comandos no bot.

const env = require('../.env');
const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const bot = new Telegraf(env.token);

bot.start(context => {
  nome = context.update.message.from.first_name;
  context.reply(`Olá, ${nome}! Me avise se precisar de /ajuda, ok?`)
})

bot.command('ajuda', context => context.reply('/ajuda abre esse diálogo com essas opções:'
  + '\n/ajuda2: testa o método "hears" para disparo de comandos'
  + '\n/opt: opção genérica'
  + '\n/opt2: outra opção genérica'
  + '\n/opt3: mais outra opção genérica')
);

bot.hears('/ajuda2', context=>context.reply('Parece que o método "hears" funcionou.'
  + '\n Volte para o diálogo anterior com /ajuda')
);

bot.hears(/\/opt(2|3)/, context=>context.reply('Resposta genérica'
  + '\n Volte para o diálogo anterior com /ajuda')
)

bot.command('opt', context=>context.reply( 'genérico!'
  + '\n Volte para o diálogo anterior com /ajuda'
))

bot.startPolling();