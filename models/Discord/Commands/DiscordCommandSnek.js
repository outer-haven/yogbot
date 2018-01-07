const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandSnek extends DiscordCommand {

  constructor(subsystem) {
    super("snek", "Heckin hiss", undefined, subsystem, true);
  }

  onRun(message, permissions, args) {
    var responses = [
		"https://i.redditmedia.com/UrUUf6e_DQEUOuAjoaRNGWKn_v6f7eqZC-riYc-PyE0.jpg?w=684&s=05cc9cb623f9b83191efd1a9074e5a21",
		"https://i.redd.it/73teqe7m33ez.jpg",
		"https://i.redd.it/u95agrpn74ky.jpg",
		"https://imgur.com/IQbIOQG",
		"https://imgur.com/a65KMpn",
		"https://i.redd.it/mfjzlur6qtuy.jpg",
		"http://i.imgur.com/eZSxDrQ.gif",
		"https://imgur.com/CHr0sEY",
		"https://imgur.com/NvxM0pv",
		"https://gfycat.com/ConsiderateFaithfulHake"
	];
    var response = responses[Math.floor(Math.random() * responses.length)];
    message.reply(response);
  }

}

module.exports = DiscordCommandSnek;
