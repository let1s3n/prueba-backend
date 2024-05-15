import sql from "mssql";
import sqlConfig from "./utils/dbconfig";

const conectarBD = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    return await sql.connect({
      ...sqlConfig,
      beforeConnect: (conn) => {
        conn.once("connect", (err) => {
          err ? console.error(err) : console.log("Conexión a DB iniciada");
        });
        conn.once("end", (err) => {
          err ? console.error(err) : console.log("Conexión a DB terminada");
        });
      },
    });

    /* const result = await sql.query(`SELECT * FROM Producto`);
  console.log(result); */
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default conectarBD;
