"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = exports.Mail = void 0;
var NodemailerManager_1 = require("./NodemailerManager");
Object.defineProperty(exports, "Mail", { enumerable: true, get: function () { return NodemailerManager_1.Mail; } });
var TwilioManager_1 = require("./TwilioManager");
Object.defineProperty(exports, "SMS", { enumerable: true, get: function () { return TwilioManager_1.SMS; } });
