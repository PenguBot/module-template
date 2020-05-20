import { Client, KlasaClientOptions } from "klasa";
import { join } from "path";

import "./schemas/defaultGuildSchema";
import "./extensions/Guild";
import "./extensions/Message";

export class BoilerplateClient extends Client {

    constructor(options?: KlasaClientOptions) {
        super(options);

        // @ts-ignore
        BoilerplateClient[Client.plugin].call(this);
    }

    static [Client.plugin](this: BoilerplateClient): void {
        const coreDirectory = join(__dirname, "..");

        // Register all pieces within the module to klasa
        this.arguments["registerCoreDirectory"](coreDirectory);
        this.languages["registerCoreDirectory"](coreDirectory);
        this.tasks["registerCoreDirectory"](coreDirectory);
        this.events["registerCoreDirectory"](coreDirectory);
        this.inhibitors["registerCoreDirectory"](coreDirectory);
        this.arguments["registerCoreDirectory"](coreDirectory);
        this.commands["registerCoreDirectory"](coreDirectory);
    }

}
