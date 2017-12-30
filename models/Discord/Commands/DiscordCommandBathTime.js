const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandBathTime extends DiscordCommand {

  constructor(subsystem) {
    super("bathtime", "Maurice is filthy", undefined, subsystem, true);
  }

  onRun(message, permissions, args) {
    var responses = [
		"https://i.imgur.com/AMcLpeZ.gifv",
		"https://i.pinimg.com/originals/35/59/98/35599867ed0a8b9871093d141701de2a.jpg"
		"http://gorcom36.ru/upload/iblock/776/kot.jpg"
		"https://t1.ea.ltmcdn.com/en/images/5/9/4/img_how_to_give_a_sphynx_cat_or_hairless_cat_a_bath_1495_paso_1_600.jpg"
		"http://www.fnews.gr/wp-content/uploads/2016/11/krgata1.jpg"
		
	];
    var response = responses[Math.floor(Math.random() * responses.length)];
    message.reply(response);
  }

}

module.exports = DiscordCommandBathTime;
