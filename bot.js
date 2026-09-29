const TelegramBot = require("node-telegram-bot-api");
const crypto = require("crypto");
const fs = require("fs");


const TOKEN = "8953648378:AAEU3jx3oOAAyAkMX_ErB04CMngKVUP3H-g";


const bot = new TelegramBot(
    TOKEN,
    {
        polling:true
    }
);


let links = {};


if(fs.existsSync("links.json")){
    links = JSON.parse(
        fs.readFileSync("links.json")
    );
}


bot.on("message",(msg)=>{


    let text = msg.text;


    if(!text) return;


    if(text.startsWith("http")){


        let id = crypto
        .randomBytes(4)
        .toString("hex");


        links[id] = text;


        fs.writeFileSync(
            "links.json",
            JSON.stringify(links,null,2)
        );


        bot.sendMessage(
            msg.chat.id,
            `
Link baru:

https://paris-baths-departmental-accommodations.trycloudflare.com/r/${id}
`
        );


    }

});