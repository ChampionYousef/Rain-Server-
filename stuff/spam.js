/**
This is the file where I edit anything message wise.
I add a spam system mostly, howeever I also edit some errors such as the ways where users couldn't talk.
I also make a edit to the spamroom system. I make sure the spam logs are logged in a file along with  the spamroom.
Enjoy my  message edting/spam filter. Email me any errors at imdatbulll@gmail.com(yes 3 ls)
Credits:
Davandi(me)
TalkTakesTime(original creator of spamroom)

**/
exports.spam = function(s){
if(typeof s != "undefined") var spam = s; else var spam = new Object();
//var spamlog = fs.createWriteStream('/config/spamlog.txt', {'flags': 'a'});

var spammy = {
spammers: new Array('gavigator','professorgavin','suk','ilikewangs'),
//rated mature
words: new Array('nigger','fag','snen','penis','wank','cunt','rape','queef','spic','porn','fgt','kike','tits','anal','cock','pussy','ann coulter','howard stern','jizz','cum','spamspamspam','donger',"t1ts", "c0ck", "p0rn", "n1gger")
		
	    }; 



global.today = new Date(); 
//Users.User.prototype.o3omessagetime = today.getMinutes();
//Users.User.prototype.numMessages = 0
global.spamroom = new Object();
Object.merge(spam, spammy);
return spam
}
 


var cmds = {
mee: function(target, room, user, connection) {
		// By default, /mee allows a blank message
		if (target) target = this.canTalk(target);
		if (!target) return;

		var message = '/mee ' + target;
		// if user is not in spamroom
		if (spamroom[user.userid] === undefined) {
			// check to see if an alt exists in list
			for (var u in spamroom) {
				if (Users.get(user.userid) === Users.get(u)) {
					// if alt exists, add new user id to spamroom, break out of loop.
					spamroom[user.userid] = true;
					break;
				}
			}
		}

		if (user.userid in spamroom) {
			this.sendReply('|c|' + user.getIdentity() + '|' + message);
			return Rooms.rooms['spamroom'].add('|c|' + user.getIdentity() + '|' + message);
		} else {
			return message;
		}
	},
unspam: 'unspamroom',
	unspammer: 'unspamroom',
	unspamroom: function(target, room, user, connection) {
		var target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply('The user \'' + this.targetUsername + '\' does not exist.');
		}
		if (!this.can('mute', targetUser)) {
			return false;
		}
		if (!spamroom[targetUser]) {
			return this.sendReply('That user is not in the spamroom list.');
		}
		for(var u in spamroom)
			if(targetUser == Users.get(u))
				delete spamroom[u];
		Rooms.rooms['randomasdfjklspamhell'].add('|raw|<b>' + this.targetUsername + ' was removed from the spamroom list.</b>');
		this.logModCommand(targetUser + ' was removed from spamroom by ' + user.name);
		return this.sendReply(this.targetUsername + ' and their alts were successfully removed from the spamroom list.');
	},
	spam: 'spamroom',
	spammer: 'spamroom',
	spamroom: function(target, room, user, connection) {
		if (!target) return this.sendReply('Please specify a user.');
		var target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply('The user \'' + this.targetUsername + '\' does not exist.');
		}
		if (!this.can('mute', targetUser)) {
			return false;
		}
		if(!Rooms.rooms.spamroom){
this.parse('/makechatroom randomasdfjklspamhell');
Rooms.rooms.spamroom.isPrivate = true;
}
		if (spamroom[targetUser]) {
			return this.sendReply('That user\'s messages are already being redirected to the spamroom.');
		}
		spamroom[targetUser] = true;
		Rooms.rooms['randomasdfjklspamhell'].add('|raw|<b>' + this.targetUsername + ' was added to the spamroom list.</b>');
		this.logModCommand(targetUser + ' was added to spamroom by ' + user.name);
		return this.sendReply(this.targetUsername + ' was successfully added to the spamroom list.');
	},
	me: function(target, room, user, connection) {
		// By default, /me allows a blank message
		if (target) target = this.canTalk(target);
		if (!target) return;

		var message = '/me ' + target;
		// if user is not in spamroom
		if (spamroom[user.userid] === undefined) {
			// check to see if an alt exists in list
			for (var u in spamroom) {
				if (Users.get(user.userid) === Users.get(u)) {
					// if alt exists, add new user id to spamroom, break out of loop.
					spamroom[user.userid] = true;
					break;
				}
			}
		}

		if (user.userid in spamroom) {
			this.sendReply('|c|' + user.getIdentity() + '|' + message);
			return Rooms.rooms['randomasdfjklspamhell'].add('|c|' + user.getIdentity() + '|' + message);
			
		} else {
			return message;
		}
	}
};
Object.merge(CommandParser, cmds);
