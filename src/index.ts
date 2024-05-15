import "dotenv/config";
import app from "./app";

const main = async () => {
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
  /* const result = await sql.query(`SELECT * FROM Producto`);
  console.log(result); */
  /* http
    .createServer(function (req: any, res: any) {
      res.write("Hola Defontana!");
      res.end();
    })
    .listen(80); */
  //Settings
};

main();
