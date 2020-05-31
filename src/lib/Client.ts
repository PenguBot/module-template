import { KlasaClient, KlasaClientOptions } from "klasa";
import { join } from "path";

export class BoilerplateClient extends KlasaClient {

    constructor(options?: KlasaClientOptions) {
        super(options);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        BoilerplateClient[KlasaClient.plugin].call(this);
    }

    static [KlasaClient.plugin](this: BoilerplateClient): void {
        const coreDirectory = join(__dirname, "..");

        // Register the directory of the plugin pieces to klasa, `this.commands` can be any Store. commands is just an example.
        // Make sure to register all of your stores otherwise something wont work!
        this.commands.registerCoreDirectory(coreDirectory);
    }

}
