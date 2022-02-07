const http = require('http');

const markup = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Я просто код</title>
    <meta charset="UTF-8">
    <style>
      .container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 100px;
      }

      p {
        font-family: sans-serif;
        font-size: 90px;
        margin: 0;
      }

      img {
        width: 512px;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Я бы обнял тебя — но&nbsp;— я просто код</p>
      <img src="https://pictures.s3.yandex.net/code.gif" alt="мой код">
    </div>
  </body>
  </html>
`;

// напишите код здесь
