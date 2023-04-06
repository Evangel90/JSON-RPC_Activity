const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/1nqtYB9Yc8_X2TjfcaGxAiWMYE0bw3id";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0x5fed0866acb30c09b8fe3f2fe49bfa1e37743ce1",  //My wallet address
    "latest" //
  ]
}).then((response) => {
  console.log(response.data.result);
});