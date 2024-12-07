const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVWW7jRhC9S/9KHpEUVwEGwk0btVAWKckK8tEim5u4drckUgOfISdI8hMgV8h5coHkCAEtGzaSmYnDr0az+OpV1avHzyAvYoIs1IDBZ1Di+Awpao+0KREYAO0UBAiDLvAhhWAAVosNVyviMEjL4PoQW+k2Pa+DgIx3M7s8XKOsGgZKYGdk492Dpy4oT4c09r4BKOxweFD0HUNnBHf2HdWaGDiM5qPcGqnXhZnsc5FVKaMnxT14ahFhjOM8NMsIZQjD1EKNDWP8MfrFHM3CzCqOkRavic+JyO3vk23/vFk2nuv4Cp+sHYWPLq77MfqZyF1yR91d80knLJLxWtVHCaWcXce0w0sMQ/FCR5PlaHu50SdxmCN/4qOcxrT5cN/FGU6tPd5oy8Pev/BlZ9k7DieC60hCMruce5v9o+HGy2jNMR8j3vNnTHmynI0qK5NHpVytFFQaU+vKmGdtNt2zvWSpjLWs6hfvidv4VSvH/9P39bTSNlvLnlQdMsbKfOFxdSBb/I45FFN+0V9UtQ+b+sHl+I/RN21Ys1Fk8pPonJmJXRjLU1TyS3YU1bG3OyTHcikewrF5Cd/oQ3rC31SHH5Fqllq2GTLqrLTVOocmfQx7R9rZ1GmwJ9tQpg+Hve97neysnUajRVTzJ1JldMRUqe5NDqHAyYupf/GP0064PRzV8P65oiNqJj4YsE9dgFEYE4ohjYu8vZPFLoD+eY08jOhzd4GtybOZtn7cOOPH5bbyDirHV7x7cI6bzlHusQ+uUM+5SWz6l3vQBSUuPEQI8scxoQVu5ogQGCICBt8/D6qtGaOsoGga+2AAWJlTeEmReEX+jny6RJASWJafckRBFwS4yOYIDCg+oS54jhf7+lAXBJZTTZbVuL6u9SVhKOjG0NSGAi+3BWa3nE6cIUJhVoIBK/X7As+zHPv0QxfkqKY39bQ199kuCGJMqJufyrSA/qu0Xl9CzytOOV03uae3B4TB4N01ojTOQ9IWdsoh9qL4jPS2DjAIYErQUxf46Bx7qMUDabPzdztNcqRKxmJuuIwtQbVtXFTktxABShzfZ6Q7gZOZO16QhTsZ8sqdzCqcKDEISYEE2nbcFrf95qs6Mshkrx/qM0vWVxaf+GTccOt9sFkWN1O8CQBh5L92+QC946l0iiPKv4GbmklnzieiMHooVQ+Xo1C6PATeNbbMd7g3YYHB5zez1Au/xRtPbdU0dRG002rz/FMMA6X/bz3ksA0Gf/3y289//PTrn7//2KZ6mUML4iMK45SAAdCt/FCKrmFa8cNVKkYjdR6qetg2+nVur1t4kzlyeaGKm4Uj2wLNRGnCFo4OnXAYmBZpdGfnkIZ1Yakn6v0XQMAATKvIOJos3JcTJsBqMj3qjyS6js6ikLP6eMoZ1UWw1uN+5GSd1EqW64wRVuXE4BfDK+aJnMt9dCWXdActmG97Pre1jct9m+2mn/fJ1I1nUFLCTYSmazZZ6KO+Qiq3Zwj94bypdG82HE1LaFzUfC5g1WhkbilWQRjWmi6y5OoG57VdCmk9JKvKyWfsbuprq5s/PPtT+vJfiF9W96a2IEbPNvsyiP+a15vumafuO4gX3/6KtrRdulzCgiRuz+gc9qdTs4DmJTvy2q7W8Tw8sow0p5tRtSou4Kld6DKFNChwBgYA5j4uYh90QQoJVd9W9wtuwEpdkDVqWa4ppK8bD9T2mdcr8PQ3wrRJC5IIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Papi mike",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "18294797498",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'MIKE_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

