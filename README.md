# <div align='center'>Rexzy Official</div>

## usage
```
"depencies": {
  "@whiskeysockets/baileys": "npm:rexzyofficial"
}
```
## Import
```javascript
const {
  default: makeWASocket,
  // other exports
} = require('@whiskeysockets/baileys');
```

---

# Connecting To WhatsApp

## With QR Code
```javascript
const {
  default: makeWASocket,
  Browsers
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: Browsers.poucode('Chrome'),
  printQRInTerminal: true
});
```

## Connect With Pairing Code
```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion,
  Browsers
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: Browsers.poucode('Chrome'),
  printQRInTerminal: false,
  version: await fetchLatestWAWebVersion(),
  aiLabel: false // set true to show an AI label on messages sent by the bot
  // other options
});

const number = "628XXXXXXXXXX";
const code = await client.requestPairingCode(number.trim()); // or (number, "YYYYYYYY") for a custom pairing code

console.log("Your pairing code: " + code);
```

# Storing Data
```javascript
const {
  default: makeWASocket,
  makeInMemoryStore
} = require('@whiskeysockets/baileys');
const pino = require('pino');

const store = makeInMemoryStore({
  logger: pino().child({ level: 'silent', stream: 'store' })
});
const client = makeWASocket({
  // options
});
store.bind(client.ev);

client.ev.on('contacts.upsert', () => {
  console.log('New contact: ' + Object.values(store.contacts()));
});
```

## Send an orderMessage
```javascript
const fs = require('fs');
const thumbnail = fs.readFileSync('./rexzthum.jpg');

await client.sendMessage(m.chat, {
  thumbnail,
  message: "Order summary",
  orderTitle: "My Store",
  totalAmount1000: 72502,
  totalCurrencyCode: "IDR"
}, { quoted: m });
```

## Send a pollResultSnapshotMessage
```javascript
await client.sendMessage(m.chat, {
  pollResultMessage: {
    name: "My Poll",
    options: [
      { optionName: "Option 1" },
      { optionName: "Option 2" }
    ],
    newsletter: {
      newsletterName: "X - CYBER",
      newsletterJid: "120363424944937940@newsletter"
    }
  }
});
```

## Send a productMessage
```javascript
await client.relayMessage(m.chat, {
  productMessage: {
    title: "Product.pdf",
    description: "Product description",
    thumbnail: { url: "./rexzythumb.jpg" },
    productId: "EXAMPLE_TOKEN",
    retailerId: "EXAMPLE_RETAILER_ID",
    url: "https://example.com",
    body: "Body text",
    footer: "Footer",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: "{\"display_text\":\"Visit\",\"url\":\"https://example.com\"}"
      }
    ],
    priceAmount1000: 72502,
    currencyCode: "IDR"
  }
});
```

## Send an interactiveMessage
```javascript
await client.sendMessage(m.chat, {
  image: { url: "./rexzyimg.jpg" },
  text: "body",
  title: "title", // required when sending 
footer: "footer",
  interactiveButtons: [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "\0"
      })
    }
  ],
  messageParams: JSON.stringify({
    bottom_sheet: {
      /** other params **/
    }
  })
});
```
