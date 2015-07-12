/// <reference path="../TranslationInfo.ts" />
/// <reference path="../Faults.ts" />
/// <reference path="../Events.ts" />
/// <reference path="../ClientProxy.ts" />

//TODO: Try using decorators for this instead...
client.registerTranslation(new TranslationInfo<UnrecognizedCommand>("386F9F9F-B582-47EA-809C-93202FDB37A2", 
	function(m) { return `The system could not interprete your request. Please contact an administrator.`; }));	