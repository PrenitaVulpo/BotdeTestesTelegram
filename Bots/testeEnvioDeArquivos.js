//o axios será usado para conectar à API do Telegram e pegar arquivos

const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);
const axios = require('axios');


bot.start(context => {
  console.log(context.update.message.from.first_name)
  context.reply('Me manda uma vozinha ou foto de agora :)')
})
bot.on('voice', async context => {
  const id = context.update.message.voice.file_id;
  const response = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`);
  console.log(response.data);
  context.replyWithVoice({url: `${env.apiFileUrl}/${response.data.result.file_path}`});
})
bot.on('photo', async context => {
  const id = context.update.message.photo[0].file_id;
  const response = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`);
  console.log(response.data);
  context.replyWithPhoto({url: `${env.apiFileUrl}/${response.data.result.file_path}`});
})

bot.startPolling();