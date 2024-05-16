import sql from "mssql";
import sqlConfig from "./dbconfig";

const conectarBD = async () => {
  try {
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
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default conectarBD;
