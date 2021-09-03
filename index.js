/*
A note to my future self:
Dear Future Self,
You left this js file in your Assignment Files
folder for the sake of keeping it.
It was not meant to be run. You will need
to install chalk.
Don't run this, you didn't put this here
to let it be run again.
Close VSCode now, I know you have it open.
Thanks,
Past You.
*/
const chalk = require('chalk');
console.log(chalk.green(' _______   ________   ________  _______   ________  ________           ________  ________  _____ ______   _______'));
console.log(chalk.green('|\\  ___ \\ |\\   ___  \\|\\   ___ \\|\\  ___ \\ |\\   __  \\|\\   ____\\         |\\   ____\\|\\   __  \\|\\   _ \\  _   \\|\\  ___ \\'));
console.log(chalk.green('\\ \\   __/|\\ \\\  \\\\ \\  \\ \\  \\_|\\ \\ \\   __/|\\\ \\  \\|\\  \\ \\  \\___|_        \\ \\\  \\___|\\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\   __/|'));
console.log(chalk.green(' \\ \\  \\_|/_\\ \\  \\\\ \\  \\ \\  \\ \\\\ \\ \\  \\_|/_\\ \\   _  _\\ \\_____  \\        \\ \\  \\  __\\ \\   __  \\ \\  \\\\|__| \\  \\ \\  \\_|/__ '));
console.log(chalk.green('  \\ \\  \\_|\\ \\ \\  \\\\ \\  \\ \\  \\_\\\\ \\ \\  \\_|\\ \\ \\  \\\\  \\\\|____|\\  \\        \\ \\  \\|\\  \\ \\  \\ \\  \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\'));
console.log(chalk.green('   \\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\_______\\ \\__\\\\ _\\ ____\\_\\  \\        \\ \\_______\\ \\__\\ \\__\\ \\__\\    \\ \\__\\ \\_______\\'));
console.log(chalk.green('    \\|_______|\\|__| \\|__|\\|_______|\\|_______|\\|__|\\|__|\\_________\\        \\|_______|\\|__|\\|__|\\|__|     \\|__|\\|_______|'));
console.log(chalk.green('                                                      \\|_________|'));
console.log(chalk.green('(In case it\'s broken, it\'s meant to say "Ender\'s Game" in fancy text art.)\n\nCopyright (not really) © 2021 by Jeremy Hsieh\nBased off the book by Orson Scott Card\n'));

while (true){
	let startInput = prompt(chalk.blue('Welcome to Ender\'s Game! To respond to prompts, type your input after the ">". Try one now, type "start"!\n')).toLowerCase();
	if (startInput == 'start'){
		break;
	}else{
		console.log(chalk.red('Not quite. Try again!'));
	}
}
console.log(chalk.green('Great! Now let\'s get on with it.'));
console.log(chalk.yellow('----------------------------------------------------------------'))

console.log(chalk.green('We\'re hundreds of years in the future. Humanity is at war with an alien species called the Formics, or buggers. We\'ve scored some victories against them, but they\'re coming back. Humanity has formed the International Fleet, or I.F, for this. The I.F have established a Battle School, which trains highly intelligent children to remotely fight battles in the war.\nYou are Ender Wiggin, a child living on Earth with your (frankly cruel) brother, Peter, and (much kinder) sister, Valentine. You\'ve just defended yourself from another student, Stilson, in a rather violent way. Word of this fight has spread, and Colonel Graff from the I.F has approached your family, recruiting you to Battle School.'));
while (true){
	const input1 = prompt(chalk.blue('Do you:\nA: Accept the offer\nB: Decline the offer\n(Type the letter you want to answer with)\n')).toLowerCase();
	if (input1 == 'a'){
		break;
	}else if (input1 == 'b'){
		console.log(chalk.green('You declined the offer to go to Battle School, which has more long-term consequences for humanity than you might think. No one else there can strategize how to use the I.F\'s biggest weapon, and humanity is eradicated by the buggers.'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else{
		console.log(chalk.red('Hm, that\'s not an option. Try that again.'));
	}
}
console.log(chalk.green('You accepted Colonel Graff\'s offer to go to Battle School. The I.F has you in isolation to study you closely, as you play an adventure game on your personal machine. If you\'re not in training, you\'re in the game. You kill giants and explore the domain.\nYour commander, Bonzo Madrid, has brought your army to its first simulation battle with another group, where you have to avoid attacks from the other army\'s guns. Wherever you get shot, you get frozen. The ultimate goal is to have 2 men open the other team\'s gate, and have one man walk through it, all while freezing the other side\'s troops. You have two tactic choices.'));
while (true){
	const input2 = prompt(chalk.blue('Do you:\nA: Run around thrashing about, shooting whatever you can\nB: Defend yourself with your legs, and leave your arms protected to fire away\n')).toLowerCase();
	if (input2 == 'a'){
		console.log(chalk.green('With your rather plan-less strategy, you\'re an easy target (and not a very great shot).'), chalk.red('\nThe other army fully freezes you in seconds, and you lose the fight.'), chalk.green('\nLet\'s fast forward to another battle.'));
	}else if (input2 == 'b'){
		break;
	}else{
		console.log(chalk.red('Hm, that\'s not an option. Try that again.'));
	}
}
console.log(chalk.green('Your defense makes you smaller and harder to hit, while also protecting your arms to shoot at the other army. You help your army take a slew of wins, and soon you\'re put in charge of your own army of rookies. Even with them all being new, and being placed against several armies in a single battle, you prevail.\nIt\'s not all great though. Bonzo, your old commander, has been jealous and far from happy. At last, his anger has come to a head. He\'s confronted you in the showers to have it out in a brawl. You\'ve got 3 plans of attack.'));
while (true){
	const input3 = prompt(chalk.blue('Do you:\nA: Strategically take him out with carefully-executed attacks\nB: Relentlessly try to shove him over\nC: Attempt to escape as quickly as possible\n'));
	if (input3 == 'a'){
		break;
	}else if (input3 == 'b'){
		console.log(chalk.green('Unfortunately, Bonzo\'s much bigger and stronger than you. Your attempts to topple him are futile, and he kills you rather easily.'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else if (input3 == 'c'){
		console.log(chalk.green('You may be fast, but Bonzo is bigger and stronger. He manages to grab you before you get out, and kills you rather easily.'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else{
		console.log(chalk.red('Hm, that\'s not an option. Try that again.'));
	}
}
console.log(chalk.green('You\'ve managed to take out Bonzo with strategic kicks and knocked him out cold. (He\'ll be fine. Probably.)\nBack on Earth, Peter and Valentine have begun to use a communication system to politically influence the globe, and it\'s working, as people being to take note. Both are attempting to remain anonymous, though nothing hides from the I.F.\nAs for you, you\'ve earned yourself a vacation on Earth, in which you can see Valentine for the first time in years. It\'s still not the same, however, and it doesn\'t last long. Soon, you\'re shipped out to Eros, an asteroid that is home to the elite level of the I.F\'s training facilities, Command School. Here, you meet Mazer Rackham, a hero from the first Formic War. He puts you through more simulated space battles, all made by him. Some of your friends from Battle School come and join you.\nBut still, you hate the place. The isolation, the constant battles, and even how Mazer himself acts. The best thing that could happen now is to be expelled, to finally go home.'));
prompt(chalk.blue('Press ENTER to continue\n'));
console.log(chalk.green('Now, your final test comes. This time, your fleet is heavily outnumbered by the buggers. You\'re in control of it all, along with your friends and rookies you trained from Battle School. The I.F is putting it\'s ultimate weapon, the Molecular Disruption Device (M.D Device), capable of destroying a planet, into play. Three strategy options, one goal of killing the buggers with the M.D Device.'));
while (true){
	const input4 = prompt(chalk.blue('Do you:\nA: Scatter your fleet in an attempt to clear the buggers away\nB: Hold your fleet back and see what happens\nC: Move every single ship you have into the fight in order to make way for the M.D Device, and to maybe get yourself expelled\nD: Get up and leave\n'));
	if (input4 == 'a'){
		console.log(chalk.green('With none of your ships together, it becomes easy for the buggers to pick your fleet off. Humanity is eradicated by the buggers.'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else if (input4 == 'b'){
		console.log(chalk.green('With your ships retreating, the buggers move in. Despite a long, hard battle, the M.D Device can\'t get a path to fire in. Humanity is eradicated by the buggers.'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else if (input4 == 'c'){
		console.log(chalk.green('With every ship going in to fight, they clear a path for the M.D Device. You successfully fire the weapon, decimating the Formic planet.\nAnother day, another simulator run, right? Not today. This was the real deal. The bugger deaths, the soldiers sent to die, the destruction of the planet, all real. The commanders may be applauding, but you\'re not proud. You spend weeks in isolation, depressed from what you\'ve done to an entire species.'));
		break;
	}else if (input4 == 'd'){
		console.log(chalk.green('Well, I\'m not sure why you did that. With no one to control the fleet, nothing can happen. Humanity is eradicated by the buggers, I guess?'), chalk.red('\nGame over man, game over!'), chalk.gray('Hit run to play again.'));
		process.exit();
	}else{
		console.log(chalk.red('Hm, that\'s not an option. Try that again.'));
	}
}
prompt(chalk.blue('Press ENTER to continue\n'));
console.log(chalk.green('As you hide away, the rest of humanity has received news of the death of the Formics. Now, the world governments have began fighting with each other. You can\'t go home again now, as Peter, now a man in high power, and the nations of the world wouldn\'t be very friendly. Eros, on the other hand, has become a launchpad of planet colonization. You decide to go with your sister, Valentine, to a new planet, fresh for colonization.'));
prompt(chalk.blue('Press ENTER to continue\n'));
console.log(chalk.green('Fast forward to the new planet. As you venture through the planet, you discover a tower. But it seems like no ordinary one. It seems almost... familiar?'));
prompt(chalk.blue('Press ENTER to continue\n'));
console.log(chalk.green('You\'ve seen this before. In the game. The I.F didn\'t put it there; the Formics did. Their queen was communicating with you through the game. She placed the tower in your game to lead you to her egg. Now, she asks you to take it and find a new home for it, for the Formics.'));
const input5 = prompt(chalk.magenta('Will you take it?\nA: Yes\nB: No\n'));
if (input5 == 'a'){
	console.log(chalk.green('You decided to take the egg. Thanks to you, the Formics have hope of living once again. You set off to find a world that can host Formic life and let them flourish.\nEnding achieved: True Ending (This ending is the actual ending of the novel)'), chalk.gray('Hit run to play again.'));
}else if (input5 == 'b'){
	console.log(chalk.green('You decided not to take the egg. The queen is displeased, but is powerless to stop you. The Formics may never see life again.'), chalk.red('\nEnding achieved: Evil Ending'), chalk.gray('Hit run to play again.'));
}