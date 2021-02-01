import { registerSettings } from './modules/settings.mjs';
import { getOrCreateFolder } from './modules/settings.mjs';
//import { findFolder } from './modules/settings.mjs';
//import { createFolder } from './modules/settings.mjs';
//import { createJournalEntries } from './modules/settings.mjs';
//import { createIfNotExists } from './modules/settings.mjs';

Hooks.on("ready", function() {
  	let syrinToken = game.settings.get("syrin-play", 'syrinToken');
  	if (syrinToken == "") {
  		console.log("SYRIN: Token not set.");
  	} else {	
		getOrCreateFolder("syrin-play", "Elements", "JournalEntry", "#2f288a", syrinToken);
		getOrCreateFolder("syrin-play", "Moods", "JournalEntry", "#8a2828", syrinToken);
  	}
});

Hooks.on('init', async function() {
	console.log('syrin-play | Initializing syrin-play');
	registerSettings();
});
