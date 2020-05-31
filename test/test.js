const { Client } = require("klasa");
const config = require("./config");

Client.use(require("../dist/lib/Client"));

const client = new Client({
    prefix: config.prefix,
    createPiecesFolders: false,
    commandEditing: true
});

client.login(config.token);
