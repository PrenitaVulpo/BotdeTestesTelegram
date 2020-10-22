//testando eventos

const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start((context, next) =>{
  const user = context.update.message.from;
  console.log(user)
  context.reply(`Olá, ${user.first_name}!`);
  next();
})

bot.start(context=>{
  context.reply('Você pode me enviar um texto, um adesivo, um áudio, uma foto, um contato ou uma localização');
})

bot.on('text', context =>{
  context.reply(`Você me enviou o seguinte texto: ${context.update.message.text}`)
})

bot.on('location', context=>{
  const location = context.update.message.location;
  console.log(location);
  context.reply(`Você me enviou uma localização, 
  a latitude é: ${location.latitude} e a latitude é ${location.latitude}`)
})

bot.on('contact', context=>{
  const contact = context.update.message.contact;
  console.log(contact)
  {contact.user_id == undefined
  ? context.reply(`Vou me lembrar desse(a) tal de ${contact.first_name} que não tem Telegram...`)
  :context.reply(`Vou me lembrar desse(a) tal de ${contact.first_name}, ele(a) tem Telegram.`)}
})

bot.on('voice', context=>{
  const voice = context.update.message.voice;
  console.log(voice);
  context.reply(`Seu áudio durou ${voice.duration} segundo(s)`)
})

bot.on('photo', context=>{
  const photos = context.update.message.photo;
  console.log(photos)
  photos.forEach((photo)=>{context.reply(`A foto enviada está disponível em ${photo.width} por ${photo.height}`)})
})

bot.on('sticker', context=>{
  const adesivo = context.update.message.sticker;
  console.log(adesivo)
  {adesivo.is_animated
  ? context.reply(`Você me enviou um adesivo animado. O emoji dele é ${adesivo.emoji} e o conjunto é o ${adesivo.set_name}.`)
  : context.reply(`Você me enviou um adesivo. O emoji dele é ${adesivo.emoji} e o conjunto é o ${adesivo.set_name}.`)}
})

bot.startPolling()