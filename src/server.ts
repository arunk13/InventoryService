import * as express from 'express';
import * as routes from './routes/app.routes';

let app = express();

app.use("/inventory", routes.router);

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});

