"use strict";
exports.__esModule = true;
var Server_1 = require("../Server");
var Launcher = /** @class */ (function () {
    // classes have constructors that initialize our class
    function Launcher() {
        //initializinf our class Server in the constructor
        this.server = new Server_1.Server();
    }
    // classes have methods
    Launcher.prototype.launchApp = function () {
        console.log("Started app");
        this.server.createServer();
        // this will allow to call anyhting from this class 
        // 1 of the last resorts, it is encouraged to use as less as possible
        // (this.server as any).somePrivateLogic();
    };
    return Launcher;
}());
new Launcher().launchApp();
