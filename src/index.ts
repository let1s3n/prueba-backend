var http = require("http");

http
  .createServer(function (req: any, res: any) {
    res.write("Hola Defontana!");
    res.end();
  })
  .listen(80);
