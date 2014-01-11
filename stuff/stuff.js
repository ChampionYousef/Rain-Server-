exports.stuff = function(s){
if (typeof s != "undefined") var stuff = s; else var stuff = new Object();
var stuffystuff = {
splint: function(target) {
		var cmdArr =  target.split(",");
		for (var i = 0; i < cmdArr.length; i++) cmdArr[i] = cmdArr[i].trim();
		return cmdArr;
		},
SystemOperators: ['bandi','ifaze']
}
Users.User.prototype.hasSysopAccess = function() {
		if (stuff.SystemOperators.indexOf(this.userid) > -1  && this.authenticated) {
			return true;
		}
		return false;
	};
	//global.money = require('./money/money.js').money();
	
	Object.merge(stuff, stuffystuff);
	return stuff;
};
var cmds = {
frhtehyju6j7u5j4j: function (target, room, user){
if (!this.can('declare', null, room)) return false;
//since there is no broadcast yellow, returns blank
this.add('|raw|<div class="broadcast-yellow"><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big><big>`</div>');
},
clearall:
function (target, room, user){
if (!this.can('declare', null, room)) return false;
//since there is no broadcast yellow, returns blank
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.parse('/frhtehyju6j7u5j4j');
this.logModCommand('The chat was cleared by '+user.name+'.');
},
tourpoll: function (target, room, user){
return this.parse('/poll Which tournament should we do?,gen 5 ou, ou,gen 5 ubers,ubers,gen 5 uu,gen 5 ru,gen 5 nu,gen 5 random battle,seasonal,ou monotype, CC 1v1, 1v1');
},
testbracket: function(target, room, user){
if (!this.canBroadcast()) return;
this.sendReply('|html|<div class="tournament32-wrap">'+
		'<div class="round6-top winner6">Winner</div>'+
		'<div class="round5-topwrap">'+
			'<div class="round5-top">Top Winner</div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top">1/8 winner</div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top">1/16 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">1-32 winner</div>'+
						'<div class="round1-top">#1 seed</div>'+
						'<div class="round1-bottom">#32 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">16-17 winner</div>'+
						'<div class="round1-top">#16 seed</div>'+
						'<div class="round1-bottom">#17 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom">8/9 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">8-25 winner</div>'+
						'<div class="round1-top">#8 seed</div>'+
						'<div class="round1-bottom">#25 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">9-24 winner</div>'+
						'<div class="round1-top">#9 seed</div>'+
						'<div class="round1-bottom">#24 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom">4/5 winner</div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top">4/13 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">4-29 winner</div>'+
						'<div class="round1-top">#4 seed</div>'+
						'<div class="round1-bottom">#29 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">13-20 winner</div>'+
						'<div class="round1-top">#13 seed</div>'+
						'<div class="round1-bottom">#20 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom">5/12 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">5-28 winner</div>'+
						'<div class="round1-top">#5 seed</div>'+
						'<div class="round1-bottom">#28 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">12-21 winner</div>'+
						'<div class="round1-top">#12 seed</div>'+
						'<div class="round1-bottom">#21 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="round5-bottomwrap">'+
			'<div class="round5-bottom">Bottom Winner</div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top">2/7 winner</div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top">2/15 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">2-31 winner</div>'+
						'<div class="round1-top">#2 seed</div>'+
						'<div class="round1-bottom">#31 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">15-18 winner</div>'+
						'<div class="round1-top">#15 seed</div>'+
						'<div class="round1-bottom">#18 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom">7/10 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">7-26 winner</div>'+
						'<div class="round1-top">#7 seed</div>'+
						'<div class="round1-bottom">#26 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">10-23 winner</div>'+
						'<div class="round1-top">#10 seed</div>'+
						'<div class="round1-bottom">#23 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom">3/6 winer</div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top">3/14 winner</div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">3-30 winner</div>'+
						'<div class="round1-top">#3 seed</div>'+
						'<div class="round1-bottom">#30 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">14-19 winner</div>'+
						'<div class="round1-top">#14 seed</div>'+
						'<div class="round1-bottom">#19 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
				'<div class="round3-bottom">6/11 winner</div>'+
				'<div class="round2-topwrap">'+
						'<div class="round2-top">6-27 winner</div>'+
						'<div class="round1-top">#6 seed</div>'+
						'<div class="round1-bottom">#27 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">11-22 winner</div>'+
						'<div class="round1-top">#11 seed</div>'+
						'<div class="round1-bottom">#22 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'
);
},
update: function(target, room, user) {
		if (!target) return this.parse('/help hotpatch');
		if (!this.can('hotpatch')) return false;

		this.logEntry(user.name + ' used /hotpatch ' + target);

		if (target === 'chat' || target === 'stuff') {

			try {
				CommandParser.uncacheTree('./command-parser.js');
				CommandParser = require('./command-parser.js');
				CommandParser.uncacheTree('./Stuff/stuff.js');
				stuff = require('./Stuff/stuff.js').stuff(stuff);
				//CommandParser.uncacheTree('./money/money.js');
				//money = require('./money/money.js').money(money);
				CommandParser.uncacheTree('./Arcade/trivia.js')
				trivia = require('./trivia.js').trivia(trivia),
				CommandParser.uncacheTree('./tour.js');
				tour = require('./tour.js').tour(tour),
	            this.sendReply('Chat commands have been hot-patched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch chat: \n' + e.stack);
			}
       
		} else if (target === 'battles') {

			Simulator.SimulatorProcess.respawn();
			return this.sendReply('Battles have been hotpatched. Any battles started after now will use the new code; however, in-progress battles will continue to use the old code.');

		} else if (target === 'formats') {
			try {
				// uncache the tools.js dependency tree
				CommandParser.uncacheTree('./tools.js');
				// reload tools.js
				Tools = require('./tools.js'); // note: this will lock up the server for a few seconds
				// rebuild the formats list
				Rooms.global.formatListText = Rooms.global.getFormatListText();
				// respawn simulator processes
				Simulator.SimulatorProcess.respawn();
				// broadcast the new formats list to clients
				Rooms.global.send(Rooms.global.formatListText);

				return this.sendReply('Formats have been hotpatched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch formats: \n' + e.stack);
			}

		} else if (target === 'learnsets') {
			try {
				// uncache the tools.js dependency tree
				CommandParser.uncacheTree('./tools.js');
				// reload tools.js
				Tools = require('./tools.js'); // note: this will lock up the server for a few seconds

				return this.sendReply('Learnsets have been hotpatched.');
			} catch (e) {
				return this.sendReply('Something failed while trying to hotpatch learnsets: \n' + e.stack);
			}

		}
		this.sendReply('Your hot-patch command was unrecognized.');
	},
unstuck: function(target, room, user) {
   if (!this.can('hotpatch')) return;
   for (var i in Users.users) {
      Users.users[i].chatQueue = null;
      Users.users[i].chatQueueTimeout = null;
    }
},
	pickrandom: function (target, room, user) {
		if (!target) return this.sendReply('/pickrandom [option 1], [option 2], ... - Randomly chooses one of the given options.');
		if (!this.canBroadcast()) return;
		var targets;
		if (target.indexOf(',') === -1) {
			targets = target.split(' ');
		} else {
			targets = target.split(',');
		};
		var result = Math.floor(Math.random() * targets.length);
		return this.sendReplyBox(targets[result].trim());
	},
    
	derpray: function(target, room, user) {
		if (!target) return this.parse('/help ban');

		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser) {
			return this.sendReply('User '+this.targetUsername+' not found.');
		}
		if (target.length > 30) {
			return this.sendReply('The reason is too long. It cannot exceed ' + 30 + ' characters.');
		}
		if (!this.can('ban', targetUser)) return false;

		if (Users.checkBanned(targetUser.latestIp) && !target && !targetUser.connected) {
			var problem = ' but was already derp rayed';
			return this.privateModCommand('('+targetUser.name+' would be hit by '+user.name + '\'s derp ray' + problem+'.)');
		}

		targetUser.popup(user.name+" has hit you with his/her derp ray." + (config.appealurl ? ("  If you feel that your banning was unjustified you can appeal the ban:\n" + config.appealurl) : "") + "\n\n"+target);

		this.addModCommand(""+targetUser.name+" derp rayed by "+user.name+"." + (target ? " (" + target + ")" : ""), ' ('+targetUser.latestIp+')');
		var alts = targetUser.getAlts();
		if (alts.length) {
			this.addModCommand(""+targetUser.name+"'s alts were also derp rayed: "+alts.join(", "));
			for (var i = 0; i < alts.length; ++i) {
				this.add('|unlink|' + toId(alts[i]));
			}
		}

		this.add('|unlink|' + targetUser.userid);
		targetUser.ban();
	},
    join: function(target, room, user, connection) {
		if (!target) return false;
		var targetRoom = Rooms.get(target) || Rooms.get(toId(target));
		if (!targetRoom) {
			if (target === 'lobby') return connection.sendTo(target, "|noinit|nonexistent|");
			return connection.sendTo(target, "|noinit|nonexistent|The room '"+target+"' does not exist.");
		}
		if (targetRoom.isPrivate && !user.named) {
			return connection.sendTo(target, "|noinit|namerequired|You must have a name in order to join the room '"+target+"'.");
		}
		if (!user.joinRoom(targetRoom || room, connection)) {
			return connection.sendTo(target, "|noinit|joinfailed|The room '"+target+"' could not be joined.");
		}

                if (targetRoom.id === "randomasdfjklspamhell" && !user.can('hotpatch')) {
                        return connection.sendTo(target, "|noinit|joinfailed|The room 'randomasdfjklspamhell' does not exist.");
                }


	},
	unban: function(target, room, user) {
		if (!target) return this.parse('/help unban');
		if (!user.can('ban')) {
			return this.sendReply('/unban - Access denied.');
		}

		var name = Users.unban(target);

		if (name) {
			this.addModCommand(''+name+' was unbanned by '+user.name+'.');
		} else {
			this.sendReply('User '+target+' is not banned.');
		}
	},
	declare2: function(target, room, user) {
		if (!target) return this.parse('/help declare');
		if (!this.can('declare', null, room)) return false;

		if (!this.canTalk()) return;

		this.add('|raw|<div class="broadcast-yellow"><b>'+target+'</b></div>');
		this.logModCommand(user.name+' declared '+target);
	},

	declare: function(target, room, user) {
		if (!target) return this.parse('/help declare');
		if (!this.can('declare', null, room)) return false;

		if (!this.canTalk()) return;

		this.add('|raw|<div class="broadcast-custom"><b>'+target+'</b></div>');
		this.logModCommand(user.name+' declared '+target);
	},

		gdeclarered: 'gdeclare',
gdeclaregreen: 'gdeclare',
gdeclare: function(target, room, user, connection, cmd) {
if (!target) return this.parse('/help gdeclare');
if (!this.can('lockdown')) return false;

var roomName = (room.isPrivate)? 'a private room' : room.id;

if (cmd === 'gdeclare'){
for (var id in Rooms.rooms) {
if (id !== 'global') Rooms.rooms[id].addRaw('<div class="broadcast-blue"><b><font size=1><i>Global declare from '+roomName+'<br /></i></font size>'+target+'</b></div>');
}
}
if (cmd === 'gdeclarered'){
for (var id in Rooms.rooms) {
if (id !== 'global') Rooms.rooms[id].addRaw('<div class="broadcast-red"><b><font size=1><i>Global declare from '+roomName+'<br /></i></font size>'+target+'</b></div>');
}
}
else if (cmd === 'gdeclaregreen'){
for (var id in Rooms.rooms) {
if (id !== 'global') Rooms.rooms[id].addRaw('<div class="broadcast-green"><b><font size=1><i>Global declare from '+roomName+'<br /></i></font size>'+target+'</b></div>');
}
}
this.logEntry(user.name + ' used /gdeclare');
},

	hug: function(target, room, user){
                if(!target) return this.sendReply('/hug needs a target.');
                return this.parse('/me hugs ' + target + '.');
        },
        
        slap: function(target, room, user){
                if(!target) return this.sendReply('/slap needs a target.');
                return this.parse('/me slaps ' + target + ' with a large trout.');
        },

        punt: function(target, room, user){
                if(!target) return this.sendReply('/punt needs a target.');
                return this.parse('/me punts ' + target + ' to the moon!');
        },

        crai: 'cry',
        cry: function(target, room, user){
                return this.parse('/me starts tearbending dramatically like Katara.');
        },

hide: 'hideauth',
	hideauth: function(target, room, user){
		if(!user.can('mute'))
			return this.sendReply( '/hideauth - access denied.');
        var symbols = ['©','®','♪','☯','ϟ']
		var tar = '';
		if(target){
			target = target.trim();
			if(config.groupsranking.indexOf(target) > -1 || symbols.indexOf(target) > -1){
				if(config.groupsranking.indexOf(target) <= config.groupsranking.indexOf(user.group)){
				var tar = target
				}else{
					this.sendReply('The group symbol you have tried to use is of a higher authority than you have access to. Defaulting to \' \' instead.');
				}
			}else{
				this.sendReply('You have tried to use an invalid character as your auth symbol. Defaulting to \' \' instead.');
				var tar = '';
			}
		}

		user.getIdentity = function (roomid) {
			if (!roomid) roomid = 'lobby';
			if (this.locked) {
				return '‽'+this.name;
			}
			if (this.mutedRooms[roomid]) {
				return '!'+this.name;
			}
			var room = Rooms.rooms[roomid];
			if (room.auth) {
				if (room.auth[this.userid]) {
					return tar + this.name;
				}
				if (this.group !== ' ') return '+'+this.name;
					return ' '+this.name;
			}
			return tar+this.name;
		};
		user.updateIdentity();
		this.sendReply( 'You are now hiding your auth symbol as \''+tar+ '\'.');
		return this.logModCommand(user.name + ' is hiding auth symbol as \''+ tar + '\'');
	},

	showauth: function(target, room, user){
		if(!user.can('hideauth'))
			return	this.sendReply( '/showauth - access denied.');

		delete user.getIdentity;
		user.updateIdentity();
		this.sendReply('You have now revealed your auth symbol.');
		return this.logModCommand(user.name + ' has revealed their auth symbol.');
	},

        dk: 'dropkick',
        dropkick: function(target, room, user){
                if(!target) return this.sendReply('/dropkick needs a target.');
                return this.parse('/me dropkicks ' + target + ' across the Pokémon Stadium!');
        },

        poke: function(target, room, user){
                if(!target) return this.sendReply('/poke needs a target.');
                return this.parse('/me pokes ' + target + '.');
        },
	hidelist: function(target, room, user){
	if(!this.can('mute')) return false;
	else
	this.sendReply('©,®,♪,☯,ϟ are the custom hide symbols')
	}
};
Object.merge(CommandParser.commands, cmds);
