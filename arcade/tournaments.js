//Tour JS
var newtourney = function(tourney,entreefree,numplayers,host,size){ 
function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}
function is32(n) {
    var sizes = [4,8,16,32];
	if(!n in stuff) return false;
	return true
  }
    var context = {
    players: [],
    round: {
	players: [],
	num: 1,
	winners: [],
	losers: []
	},
    tier: undefined,
    size: size,
    byes: 0,
	hasByes: false,
	byers: [],
    prize: {
        first: 5*entreefee,
        second: 3*entreefree
        },
		getByes: function(room){
		tourney.shuffle(tourney.players)
		var numbyes = 0;
		if(is32(tourney.players) == false){
	    if(tourney.players.length === 12 || tourney.players.length === 20){
	     numbyes = 4;
		 }
		 if(tourney.players.length === 24){
	     numbyes = 8;
		 }
		 if(tourney.players.length === 28){
	     numbyes = 12;
		 }
			for(var i = 0; tourney.players.length>i; i++){
		 delete tourney.players[i]; tourney.byers.push(tourney.players[i])
		   if(i > numbyes) break;
			}
			tourney.byes = numbyes;
			return numbyes;
			}
			else return 0;
		},
        shuffle: function(list) {
                 var i, j, t;
                 for (i = 1; i < list.length; i++) {
                        j = Math.floor(Math.random()*(1+i)); // choose j in [0..i]
                        if (j != i) {
                                t = list[i]; // swap list[i] and list[j]
                                list[i] = list[j];
                                list[j] = t;
                        }
                 }
                 return list;
                },
		   getBrackets: function(list){
		   var html = ''
		   if(list.length === 32){
		   if(tourney.round.num == 1){
		   html += '<div class="tournament32-wrap">'+
		'<div class="round6-top winner6"></div>'+
		'<div class="round5-topwrap">'+
			'<div class="round5-top"></div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[0]+'</div>'+
						'<div class="round1-bottom">'+list[32]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[16]+'</div>'+
						'<div class="round1-bottom">'+list[17]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[8]+'</div>'+
						'<div class="round1-bottom">'+list[25]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[9]+'</div>'+
						'<div class="round1-bottom">'+list[24]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[4]+'</div>'+
						'<div class="round1-bottom">'+list[29]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[13]+'</div>'+
						'<div class="round1-bottom">'+list[20]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[5]+'</div>'+
						'<div class="round1-bottom">'+list[28]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[12]+'</div>'+
						'<div class="round1-bottom">'+list[21]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="round5-bottomwrap">'+
			'<div class="round5-bottom">Bottom Winner</div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[2]+'</div>'+
						'<div class="round1-bottom">'+list[31]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[15]+'</div>'+
						'<div class="round1-bottom">'+list[18]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[7]+'</div>'+
						'<div class="round1-bottom">'+list[26]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[10]+'</div>'+
						'<div class="round1-bottom">'+list[23]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[3]+'</div>'+
						'<div class="round1-bottom">'+list[30]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[14]+'</div>'+
						'<div class="round1-bottom">'+list[19]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
				'<div class="round3-bottom"></div>'+
				'<div class="round2-topwrap">'+
						'<div class="round2-top"></div>'+
						'<div class="round1-top">'+list[26]+'</div>'+
						'<div class="round1-bottom">'+list[7]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom"></div>'+
						'<div class="round1-top">'+list[11]+'</div>'+
						'<div class="round1-bottom">'+list[22]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';
	}
	if(tourney.round.num == 2){
	html += '<div class="tournament32-wrap">'+
		'<div class="round6-top winner6"></div>'+
		'<div class="round5-topwrap">'+
			'<div class="round5-top"></div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][0].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][0].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][0].players[1]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][1].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][1].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][1].players[1]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][2].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][2].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][2].players[1]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][3].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][3].players[0]+'</div>'+
						'<div class="round1-bottom>'+tourney.rounds[0][3].players[1]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][4].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][4].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][4].players[1]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][5].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][5].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][5].players[1]+'</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][6].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][6].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][6].players[1]+'</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][7].winner+'</div>'+
						'<div class="round1-top">'+tourney.rounds[0][7].players[0]+'</div>'+
						'<div class="round1-bottom">'+tourney.rounds[0][7].players[1]+'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<div class="round5-bottomwrap">'+
			'<div class="round5-bottom"></div>'+
			'<div class="round4-topwrap">'+
				'<div class="round4-top"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][8].winner+'</div>'+
						'<div class="round1-top">#2 seed</div>'+
						'<div class="round1-bottom">#31 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][9].winner+'</div>'+
						'<div class="round1-top">#15 seed</div>'+
						'<div class="round1-bottom">#18 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
					'<div class="round3-bottom"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][10].winner+'</div>'+
						'<div class="round1-top">#7 seed</div>'+
						'<div class="round1-bottom">#26 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][11].winner+'</div>'+
						'<div class="round1-top">#10 seed</div>'+
						'<div class="round1-bottom">#23 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="round4-bottomwrap">'+
				'<div class="round4-bottom"></div>'+
				'<div class="round3-topwrap">'+
					'<div class="round3-top"></div>'+
					'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][12].winner+'</div>'+
						'<div class="round1-top">#3 seed</div>'+
						'<div class="round1-bottom">#30 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][13].winner+'</div>'+
						'<div class="round1-top">#14 seed</div>'+
						'<div class="round1-bottom">#19 seed</div>'+
					'</div>'+
				'</div>'+
				'<div class="round3-bottomwrap">'+
				'<div class="round3-bottom"></div>'+
				'<div class="round2-topwrap">'+
						'<div class="round2-top">'+tourney.rounds[0][14].winner+'</div>'+
						'<div class="round1-top">#6 seed</div>'+
						'<div class="round1-bottom">#27 seed</div>'+
					'</div>'+
					'<div class="round2-bottomwrap">'+
						'<div class="round2-bottom">'+tourney.rounds[0][15].winner+'</div>'+
						'<div class="round1-top">#11 seed</div>'+
						'<div class="round1-bottom">#22 seed</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'
	}
	}
	if(list.length === 16){}
    },
    Object.merge(tourney, context)
	return tourney
    }
var cmds = {};
