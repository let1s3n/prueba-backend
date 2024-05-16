import "dotenv/config";
import app from "./app";

const main = async () => {
  await app.listen(app.get("port"));
  console.log("Server en el puerto", app.get("port"));
};

main();
