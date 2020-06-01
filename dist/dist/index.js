"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const klasa_1 = require("klasa");
const Client_1 = require("./lib/Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.BoilerplateClient; } });
module.exports[klasa_1.KlasaClient.plugin] = Client_1.BoilerplateClient[klasa_1.KlasaClient.plugin];
//# sourceMappingURL=index.js.map