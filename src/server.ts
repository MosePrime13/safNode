import * as express from 'express';
import * as request from 'request';

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send({ message: 'mama' });
});

app.get('/authorize', (req, res) => {

    const consumer_key = "vRsNz0mnAlXGS1i8ZXfZLcF7S5XDPe07";
    const consumer_secret = "VHScAmlQQA6t8sO2";
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = Buffer.from(consumer_key + ':' + consumer_secret).toString('base64');

    request(
        {
          url : url,
          headers : {
            "Authorization" : auth
          }
        },
        function (error, response, body) {
          if(error){
              console.log(error);
          }
          console.log(body);
        }
      );

    res.send({ message: 'mama' });
});


const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));