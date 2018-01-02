const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandPat extends DiscordCommand {

  constructor(subsystem) {
    super("pat", "Everyone needs a good pat", undefined, subsystem, true);
  }

  onRun(message, permissions, args) {
    var responses = [
		"https://i.pinimg.com/736x/2a/2b/b5/2a2bb56ad24925caf726a89329cf4d3c--animal-funnies-funny-animals.jpg",
		"http://i.imgur.com/CsiPl.jpeg",
		"https://i.pinimg.com/originals/76/fa/12/76fa123889732a269c70fd925afe39c8.jpg",
		"https://catloversshow.com.au/melbourne/wp-content/uploads/sites/2/2016/08/pat-a-cat-featured-new.jpg",
		"https://i.pinimg.com/736x/81/7d/44/817d4495cf89570bc6568f714588a880--cat-s-kitty-cats.jpg",
		"https://funnypictures1.fjcdn.com/funny_gifs/Head_389b42_6102763.gif",
		"https://pm1.narvii.com/5994/85e9a3ee61bdefcf0ea388be81c98c62ad5fb08e_hq.jpg",
		"http://i0.kym-cdn.com/photos/images/original/000/915/038/7e9.gif",
		"https://pa1.narvii.com/6400/8685249d3f096bae8cdd976c1b33513c5dc415b2_hq.gif",
		"https://media-exp2.licdn.com/mpr/mpr/p/2/005/0b1/32b/05142c9.jpg",
		"http://cdn3-www.dogtime.com/assets/uploads/2009/05/file_1096_should-i-pat-a-dogs-head.jpg",
		"http://dogobediencenet.com/wp-content/uploads/2013/06/Dog-Head-Pat.jpg",
		"https://pa1.narvii.com/6400/46ef0d4102ce26622f8119bfab47ab0d8f908db1_hq.gif",
		"https://www.taipeitrends.com.tw/wp-content/uploads/2013/06/TT-cat-pat-2.jpg",
		"http://laoblogger.com/images/pat-the-cat-clipart-7.jpg"
		
	];
    var response = responses[Math.floor(Math.random() * responses.length)];
    message.reply(response);
  }

}

module.exports = DiscordCommandPat;
