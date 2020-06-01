"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoilerplateClient = void 0;
const klasa_1 = require("klasa");
const path_1 = require("path");
class BoilerplateClient extends klasa_1.KlasaClient {
    constructor(options) {
        super(options);
        BoilerplateClient[klasa_1.KlasaClient.plugin].call(this);
    }
    static [klasa_1.KlasaClient.plugin]() {
        const coreDirectory = path_1.join(__dirname, "..");
        this.commands.registerCoreDirectory(coreDirectory);
    }
}
exports.BoilerplateClient = BoilerplateClient;
//# sourceMappingURL=Client.js.map