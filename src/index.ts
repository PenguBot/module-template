import { Client as KlasaClient } from "klasa";
import { BoilerplateClient as Client } from "./lib/Client";

export { Client };

// @ts-ignore
module.exports[KlasaClient.plugin] = Client[KlasaClient.plugin];
