///<reference path="Guid.ts" />
///<reference path="IConvletFault.ts" />
/// <reference path="ClientProxy.ts" />

class ConvletFault implements IConvletFault {
	public id: string;
	constructor(public typeID: string,
		public processID: string) {
		this.id = Guid.newGuid();
	}
}

class UnrecognizedCommand extends ConvletFault {
	public typeID: string;
	
	constructor(public processID: string, 
		public commandTypeID: string) {
		super("386F9F9F-B582-47EA-809C-93202FDB37A2", processID);
	}
}
client.registerFault("386F9F9F-B582-47EA-809C-93202FDB37A2");
