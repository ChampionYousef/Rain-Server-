exports.roul = function (r) {
	if (typeof r != "undefined") {
		var roul = r;
	} else {
		var roul = new Object();
	}
	var Roulettestuff = {
		colors: ['red', 'red', 'red', 'red', 'red', 'red','red','red','red', 'red','yellow', 'yellow', 'yellow', 'yellow', 'yellow','yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange','orange','black', 'black', 'black','black','black','gold'],
		getNewcolor: function(room){
		roul[room.id].color = roul.colors[Math.floor(Math.random() * roul.colors.length)];
		},
		reset: function (room) {
			roul[room.id] = {
				winners: new Array(),
				users: new Array(),
				isOn: false,
			};
			roul.getNewcolor(room)
		},
		start: function (room, user) {
			var part1 = '<h3><center><font size="2"><font color="green"><img src=http://i.imgur.com/nHY1VEk.gif><u>A roulette has been started by</font><font size="2"><font color="black"> ' + user.name + '</font></u><img src=http://i.imgur.com/nHY1VEk.gif></center></h3><br />';
			var part2 = '<center><i><b>/bet</b> to bet. You may bet multiple tickets with <b>/bet [color],[amount]</center></i><br />';
			var part3 = '<center><b>black</b> = <img src=http://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png>5000<br /><br /><font color=#ffff00><b>yellow</b></font color> & <font color="red"><b>red</b></font color> = <img src=http://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png>100<br /><br/><font color="green"><b>green</b></font color> & <font color=#ff881f><b>orange</b></font color> = <img src=http://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png>500<br /><br /><font color=rgb(249,237,50)><b><i>gold</i></b></font color> = <img src=http://cdn.bulbagarden.net/upload/8/8c/Pok%C3%A9monDollar.png>100,000,000 (Feelin\' lucky?)<br /><br/><i>(Hint: red = 25%, yellow = 25%, green = 20%, orange = 20%, black = 9%, gold = 1%)';
			room.addRaw(part1 + part2 + part3);
			if(!roul[room.id]){
			roul.reset(room)
			}
			roul[room.id].isOn = true;
		}

	};
	Users.User.prototype.bet = null;
	Users.User.prototype.bets = 0;
	Object.merge(roul, Roulettestuff);
	return roul
};
var cmds = {
roul: 'roulette',
	roulette: function (target, room, user) {
		if (!user.can('mute')) {
			return this.sendReply('Whoa, kid! You\'re not old enough to gamble!');
		}

		if (typeof roul[room.id] == "undefined" || !roul[room.id].isOn) {
			roul.start(room, user);
		} else {
			return this.sendReply('There is already a roulette on.');
		}

	},

	bet: function (target, room, user) {
		if (typeof roul[room.id] == "undefined" || !roul[room.id].isOn) return this.sendReply('There is no roulette game running in this room.');
		else {
		money.read(user)
		var winners = roul[room.id].winners;
		var color = roul[room.id].color;
		var targets = target.split(',');
		var target = toId(targets[0]);
		if (user.bp.tkts < 1) return this.sendReply('You do not even have a ticket!');
		if (roul.colors.indexOf(target) === -1) return this.sendReply(target + ' is not a valid color.');
		if (targets[1]) {
			var times = parseInt(toId(targets[1]));
			if (isNaN(times) || times < 0 || user.bp.tkts < times) {
			return this.sendReply('That is an invalid amount of bets!');
			}
			else {
			this.sendReply('You are now betting ' + times + ' times to ' + target)
			user.bets += times;
			user.bp.tkts -= times;
			user.bet = target;
			if (roul[room.id].users.indexOf(user.userid) === -1) roul[room.id].users.push(user.userid);
			}
		   } else {
		    this.sendReply('Please specify an amount. Example, /bet red,5');
			
		}
		}
	},

	spin: function (target, room, user) {
		if (typeof roul[room.id] == "undefined" || !roul[room.id].isOn) return this.sendReply('There is no roulette game currently.');
		if (roul[room.id].users.length === 0) return this.sendReply('Nobody has made bets in this game');
		else {
		var winners = roul[room.id].winners;
		for (var i in Users.users) {
		    if(roul[room.id].users.indexOf(Users.users[i].userid))
			var loopchoice = '';
				loopchoice = Users.users[i].bet;
				if (loopchoice === roul[room.id].color) winners.push(Users.users[i].userid);
		}

		var perbetwin = 0;
		switch (roul[room.id].color) {
		case "red":
			perbetwin = 100;
			break;
		case "yellow":
			perbetwin = 100;
			break;
		case "black":
			perbetwin = 5000;
			break;
		case "green":
			perbetwin = 500;
			break;
		case "orange":
			perbetwin = 500;
			break;
		case "gold":
			perbetwin = 100000000;
		}
		var totalwin = [];
         for(var i=0; i<winners.length; i++){
		 totalwin[i] = Users.users[winners[i]].bet*perbetwin;
		 Users.users[winners[i]].bp.dollars += totalwin[i];
		 money.save(Users.users[winners[i]])
		 }
		for (var i in Users.users) {
			    var loopuser = Users.users[i];
				loopuser.bet = null;
				loopuser.bets = 0;
			}
		if (winners.length === 1) {
			this.add('The roulette landed on ' + roul[room.id].color + '. The only winner was ' + winners[0] + ', who won the sum of ' + totalwin[0] + ' Dollars.');
		} else if (winners.length > 1) {
			this.add('The roulette landed on ' + roul[room.id].color + '. Winners: ' + winners.toString() + '. They won, respectively, ' + totalwin.toString() + ' Dollars.');
		} else {
			this.add('The roulette landed on ' + roul[room.id].color + '. Nobody won this time.');
		}
		roul.reset(room);
	},
	endroul: function (target, room, user) {
		if (user.can('host') && !typeof roul[room.id] == "undefined" || roul[room.id].isOn) {
			this.add('The roulette has been ended!');
			roul.reset(room);
		}
		else{
		this.sendReply('There is no roulette to end!')
		}
	}
}
Object.merge(CommandParser.commands, cmds);
