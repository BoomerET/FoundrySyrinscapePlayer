import { registerSettings } from './modules/settings.mjs';
import { getOrCreateFolder } from './modules/settings.mjs';
import { findFolder } from './modules/settings.mjs';
import { createFolder } from './modules/settings.mjs';
import { createJournalEntries } from './modules/settings.mjs';
import { createIfNotExists } from './modules/settings.mjs';


Hooks.on("ready", function() {
  	//console.log("SyrinPlay: Initialization is ready and game data is available.");

  	let syrinToken = game.settings.get("syrin-play", 'syrinToken');
  	if (syrinToken == "") {
  		console.log("SYRIN: Token not set.");
  	} else {
  		//console.log("SYRIN: " + syrinToken);
  		//let syrinURL01 = "https://www.syrinscape.com/online/frontend-api/";
  		//let soundType = "moods";
  		// or element
  		//let soundNumber = 145919;
  		//let syrinULR02 = soundType +"/";
  		//let syrinULR03 = soundNumber.toString() + "/play/?auth_token=" + syrinToken;
  		//let stopAllSyrin = "https://www.syrinscape.com/online/frontend-api/stop-all/?auth_token=" + syrinToken;
  		//console.log("curl -s " + syrinURL01 + syrinULR02 + syrinULR03);
  		//console.log("curl -s " + stopAllSyrin);
  		//let sanitize = (text) => {
  		//	if (text && typeof text === "string") {
    	//		return text.replace(/\s/g, '-').toLowerCase();
  		//	}
  		//		return text;
		//};

  		//game.settings.register("syrin-play", "entity-moods-compendium", {
    	//	name: "syrin-play.entity-moods-compendium.name",
    	//	hint: "syrin-play.entity-moods-compendium.hint",
    	//	scope: "world",
    	//	config: false,
    	//	type: String
  		//});

  		//game.settings.register("syrin-play", "entity-elements-compendium", {
    	//	name: "syrin-play.entity-elements-compendium.name",
    	//	hint: "syrin-play.entity-elements-compendium.hint",
    	//	scope: "world",
    	//	config: false,
    	//	type: String
  		//});
	
		getOrCreateFolder("syrin-play", "Elements", "JournalEntry", "#2f288a", syrinToken);
		getOrCreateFolder("syrin-play", "Moods", "JournalEntry", "#8a2828", syrinToken);
  	}
});

Hooks.on('init', async function() {
	console.log('syrin-play | Initializing syrin-play');
	registerSettings();
});
