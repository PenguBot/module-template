import { KlasaClient } from "klasa";
import { BoilerplateClient } from "./lib/Client";

export { BoilerplateClient as Client };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports[KlasaClient.plugin] = BoilerplateClient[KlasaClient.plugin];
