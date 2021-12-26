const app = require("./app/app");

const port = 3000


app.listen(process.env.PORT || port, () => {
    console.log('starter server in port: http://127.0.0.1:' + port)
});