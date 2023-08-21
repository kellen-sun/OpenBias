const axios = require('axios');

const data = {
  "document": {
    "content": "trudeau divorce",
    "type": "PLAIN_TEXT"
  }
};

axios.post('https://language.googleapis.com/v1/documents:moderateText?key=AIzaSyAAFBGhuP1QwijXBky9-L8blKewIVr2zNc', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });

