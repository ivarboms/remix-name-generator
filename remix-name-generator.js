function random(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

new Vue({
	el: '#remix-name-gen',
	data: {
		songName: '',
		remixerName: '',
		remixAdjective: '',
		remixNoun: '',
		remix: 'Remix',
	},
	methods: {
		generateResult: function() {
			this.generateSongName();
			this.randomizeAdjective();
			this.randomizeNoun();
		},
		generateSongName: function() {
			let adjectiveCount = getRandomInt(1, 2);
			let adjectives2 = [];
			for (let i = 0; i < adjectiveCount; ++i) {
				adjectives2.push(random(adjectives));
			}
			let adjective = adjectives2.join(' ');

			let noun = random(nouns);
			this.songName = `${adjective} ${noun}`;
		},
		randomizeAdjective: function() {
			this.remixAdjective = random(adjectives);
		},
		randomizeNoun: function() {
			this.remixNoun = random(nouns);
		},
		toggleRe: function() {
			this.remix = this.remix === 'Remix' ? 'Mix' : 'Remix';
		},
	},
});
