///<reference path="Guid.ts" />
///<reference path="IConvletFault.ts" />
/// <reference path="ClientProxy.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ConvletFault = (function () {
    function ConvletFault(typeID, processID) {
        this.typeID = typeID;
        this.processID = processID;
        this.id = Guid.newGuid();
    }
    return ConvletFault;
})();
var UnrecognizedCommand = (function (_super) {
    __extends(UnrecognizedCommand, _super);
    function UnrecognizedCommand(processID, commandTypeID) {
        _super.call(this, "386F9F9F-B582-47EA-809C-93202FDB37A2", processID);
        this.processID = processID;
        this.commandTypeID = commandTypeID;
    }
    return UnrecognizedCommand;
})(ConvletFault);
client.registerFault("386F9F9F-B582-47EA-809C-93202FDB37A2");
