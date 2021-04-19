"use strict";
exports.__esModule = true;
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.somePrivareLogic = function () {
        console.log("doing private logic here");
    };
    Server.prototype.createServer = function () {
        console.log("created server");
    };
    return Server;
}());
exports.Server = Server;
